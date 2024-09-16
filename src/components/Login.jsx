import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-900">
          <form onSubmit={handleSubmit(onSubmit)} >
            {/* if there is a button in form, it will close the modal */}
            {/* <button className="btn btn-sm  btn-ghost absolute right-2 top-2" >
              ✕
            </button> */}
            <Link
              to="/"
              className="btn btn-sm  btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
            Login
          </h3>
          <div>
            <label className="input input-bordered flex bg-white dark:bg-slate-900 items-center gap-2 mt-2 mb-2">
              Email
              <input
                type="email"
                className="grow"
                placeholder="daisy@site.com"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">Field Required</span>}
            </label>
            <label className="input input-bordered flex bg-white dark:bg-slate-900 items-center gap-2 mt-2 mb-2">
              Password
              <input
                type="password"
                className="grow"
                placeholder="******"
                {...register("password", { required: true })}
              /><br/>
              {errors.password && <span className="text-sm text-red-500">Field Required</span>}
            </label>
            <button
             
              //onSubmit={handleSubmit()}
              className="btn btn-block bg-pink-500 mt-2 mb-2 text-white btn-outline "
            >Login</button>
            <span className="text-slate-500 ">
              Didn't have Account?
              <a href="/signup" className="text-pink-400">
                Sign Up
              </a>
            </span>
          </div></form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
