"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { email, name, photoURL, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoURL,
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
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-xl rounded-2xl p-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create your account
        </h1>
        <hr className="border-gray-200 mb-6" />

        <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-gray-800 font-semibold mb-2">
              Full Name
            </legend>
            <input
              {...register("name", {
                required: "Name field is required",
              })}
              type="text"
              className="input w-full bg-gray-100 border-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

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

          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-gray-800 font-semibold mb-2">
              Photo URL
            </legend>
            <input
              {...register("photoURL", {
                required: "Photo URL field is required",
              })}
              type="url"
              className="input w-full bg-gray-100 border-none text-gray-700 placeholder-gray-400"
              placeholder="Enter your photo URL"
            />
            {errors.photoURL && (
              <p className="text-red-500">{errors.photoURL.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset p-0 relative">
            <legend className="fieldset-legend text-gray-800 font-semibold mb-2">
              Password
            </legend>
            <input
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
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

          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-gray-800 font-semibold mb-2">
              Confirm Password
            </legend>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type="password"
              className="input w-full bg-gray-100 border-none text-gray-700 placeholder-gray-400"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-gray-700 hover:bg-gray-800 text-white border-none font-semibold">
            Register
          </button>

          <p className="text-center text-sm text-gray-500 pt-1">
            Already Have An Account?{" "}
            <Link
              href="/login"
              className="text-red-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
