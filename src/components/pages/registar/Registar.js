import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Registar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //sign in with google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // create user with email password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // update user
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let setError;
  if (error || gError) {
    setError = (
      <span className="text-red-500">{error.message || gError.message}</span>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center">
          <h2 className="card-title">Registar</h2>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="enter your name"
                className="input input-bordered w-full max-w-xs mt-4 mb-3"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500">required</span>
              )}

              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="input input-bordered w-full max-w-xs my-3"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
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
                value="registar"
              />
            </form>
            <p>
              already have an account? <Link to="/login">login</Link>
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

export default Registar;
