import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login'; // Make sure this component exists

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Info Submitted:", data);
    alert("Sign up success (frontend only)");
  };

  return (
    <div className='flex h-screen justify-center items-center bg-gray-100'>
      <div className="border rounded-lg shadow-lg p-8 bg-white w-full max-w-md relative">
        <form method="dialog">
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</Link>
        </form>

        <h3 className="font-bold text-2xl mb-6 text-center">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <label htmlFor="fullname" className="block mb-1 font-semibold">Name</label>
          <input
            {...register("fullname", { required: true })}
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your name"
            className="input input-bordered w-full mb-2"
          />
          {errors.fullname && <p className="text-red-500 text-sm mb-2">Name is required</p>}

          {/* Email */}
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full mb-2"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">Email is required</p>}

          {/* Password */}
          <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full mb-4"
          />
          {errors.password && <p className="text-red-500 text-sm mb-4">Password is required</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 w-full text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Have an account?{" "}
          <button
            onClick={() => document.getElementById("my_modal_3")?.showModal()}
            className="text-lime-500 underline"
          >
            Login
          </button>
        </p>

        {/* Login component/modal */}
        <Login />
      </div>
    </div>
  );
};

export default Signup;
