import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { userLogin, LoginGoogle } = useContext(UserContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  console.log(from);

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        return navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    LoginGoogle()
      .then((result) => {
        const user = result.user;
        const accountType = "buyer";
        saveUser(user.displayName, accountType, user.photoUrl);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // save user info mongo DB
  const saveUser = (name, email, accountType, img) => {
    const user = { name, email, accountType: accountType, user_img: img };
    fetch("https://used-procuct.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // set email for custom hook useToken for check token
        // console.log("saveUser data", data);
        navigate(from, { replace: true });
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-2xl text-center my-4">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="Password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 character or longer",
                },
              })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text-alt">Forget Password?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full text-white"
            value="Login"
            type="submit"
          />
        </form>
        <p>
          New to Doctors Portal?
          <Link to={"/signup"} className="text-secondary">
            Create new account
          </Link>
        </p>

        <div className="divider">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
