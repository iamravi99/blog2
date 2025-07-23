import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // You can handle login logic here
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <h3 className="font-bold text-lg mb-4">Login</h3>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block font-medium mb-1">Password:</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded"
              />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Sign Up Redirect */}
          <p className="mt-4 text-sm">
            Not registered?{" "}
            <Link to="/signup" className="text-lime-500 underline">
              Sign up
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  )
}

export default Login
