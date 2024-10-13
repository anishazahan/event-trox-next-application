"use client";
import { performLogin } from "@/app/Actions";
import { useAuth } from "@/app/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { auth, setAuth } = useAuth();
  const router = useRouter();

  async function onSubmit(data) {
    try {
      const formData = { email: data?.email, password: data?.password };

      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setError("Please provide a valid login credential");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div className="my-2 text-red-500">{error}</div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className="bg-transparent outline-none bg-black border"
            type="email"
            name="email"
            id="email"
          />
          {errors.email && <span className="text-red-500 text-sm text-italic">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            className="bg-transparent outline-none bg-black border"
            type="password"
            name="password"
            id="password"
          />
          {errors.password && <span className="text-red-500 text-sm text-italic">{errors.password.message}</span>}
        </div>

        <button type="submit" className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
