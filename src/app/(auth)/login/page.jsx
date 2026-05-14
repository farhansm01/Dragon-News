"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data, "data ");
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Signed Up Successfully!!!");
    }

    console.log(res, error);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-2xl p-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login your account
        </h1>
        <hr className="border-gray-200 mb-6" />

        <form className="space-y-5" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-gray-800 font-semibold mb-2">
              Email Address
            </legend>
            <input
              {...register("email", {
                required: "Email field is required",
              })}
              type="email"
              className="input w-full bg-gray-100 border-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="relative fieldset p-0">
            <legend className="fieldset-legend text-gray-800 font-semibold mb-2">
              Password
            </legend>
            <input
              {...register("password", {
                required: "password field is required",
              })}
              type={isShowPassword ? "text" : "password"}
              className="input w-full bg-gray-100 border-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your password"
            />
            <span
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
              className="absolute right-2 top-4 cursor-pointer"
            >
              {isShowPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-gray-700 hover:bg-gray-800 text-white border-none font-semibold">
            Login
          </button>

          <p className="text-center text-sm text-gray-500 pt-1">
            Don&apos;t Have An Account?{" "}
            <Link
              href="/register"
              className="text-red-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
