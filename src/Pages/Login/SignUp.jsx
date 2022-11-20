import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, UpdateName } = useContext(UserContext);

  const [createdUserEmail, setCreatedUserEmail]= useState("")

  const navigate = useNavigate();
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate('/')
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        const userProfile = {
          displayName: data.name,
        };
        UpdateName(userProfile)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => {
            console.error(error);
          });

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // set email for custom hook useToken for check token
        setCreatedUserEmail(email)

      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-2xl text-center my-4">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              className="input input-bordered w-full"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {/* errors will return when field validation fails  */}
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
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

                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must be have one uppercase , one special case *[!@#$&*], one digits",
                },
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
          </div>

          <input
            className="btn btn-accent w-full text-white mt-4 my-2"
            value="Sign up"
            type="submit"
          />
        </form>
        <p>
          Already Have an Account?
          <Link to={"/login"} className="text-secondary ">
            Login
          </Link>
        </p>

        <div className="divider">OR</div>

        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
