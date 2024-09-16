import React from 'react'
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
      return (
        <>
          <div className="flex h-screen items-center justify-center border shadow-md">
            <div className="modal-box bg-white dark:bg-slate-900">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                
    
                <h3 className="font-bold text-lg mb-2 text-center text-slate-900 dark:text-white">
                  Contact Us
                </h3>
                <div>
                  <label className="input input-bordered flex bg-white dark:bg-slate-900 items-center gap-2 mt-2 mb-2">
                    Name
                    <input
                      type="text"
                      className="grow"
                      placeholder="Diya Shah"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">Field Required</span>
                    )}
                  </label>
                  <label className="input input-bordered flex bg-white dark:bg-slate-900 items-center gap-2 mt-2 mb-2">
                    Email
                    <input
                      type="text"
                      className="grow"
                      placeholder="daisy@site.com"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">Field Required</span>
                    )}
                  </label>
                  <label className="input input-bordered flex bg-white dark:bg-slate-900 items-center gap-2 mt-2 mb-2">
                    Query
                    <input
                      type="textarea"
                      className="grow"
                      placeholder="Write your query"
                      {...register("query", { required: true })}
                    />
                    {errors.query && (
                      <span className="text-sm text-red-500">Field Required</span>
                    )}
                  </label>
                  
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-block bg-pink-500 mt-2 mb-2 text-white btn-outline "
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      );
}

export default Contact
