import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  // Update Name
  const UpdateName = (userProfile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, userProfile);
  };

  // UserLogin
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google provider
  const googleProvider = new GoogleAuthProvider();
  // Login with google
  const LoginGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // Sign Out
  const logOut = () => {
    signOut(auth);
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    UpdateName,
    userLogin,
    LoginGoogle,
    logOut,
    loading,
    setLoading
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
