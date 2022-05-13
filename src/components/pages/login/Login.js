import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //sign in with google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // sign in with email password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let setError;
  // password reset email
  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");

  const passwordReset = () => {
    sendPasswordResetEmail(email);
  };

  // require auth
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (error || gError) {
    setError = <p>{error.message || gError.message}</p>;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center">
          <h2 className="card-title">Registar</h2>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="enter your email"
                className="input input-bordered w-full max-w-xs my-3"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500">required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500">please enter valid email</span>
              )}
              <input
                type="password"
                placeholder="enter your password"
                className="input input-bordered w-full max-w-xs my-3"
                {...register("password", { required: true, min: 6 })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">required</span>
              )}
              {errors.password?.type === "min" && (
                <span className="text-red-500">
                  enter at least 6 characters
                </span>
              )}
              {setError}
              <input
                type="submit"
                className="input input-bordered w-full max-w-xs my-3 btn btn-primary text-white"
                value="login"
              />
            </form>
            <p>
              new to doecots portal? <Link to="/registar">registar</Link>
            </p>
            <p className="cursor-pointer" onClick={() => passwordReset()}>
              forgot password?
            </p>
          </div>
          <div className="divider">or</div>
          <button
            className="btn btn-secondary w-full max-w-xs"
            onClick={() => signInWithGoogle()}
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
