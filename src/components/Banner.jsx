import React from "react";
import banner from "D:/SchoolManagementApp/Frontend/vite-project/public/Banner.png";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container p-2 mx-auto md:px-20 px-4 flex flex-col md:flex-row bg-white dark:bg-slate-900 dark:text-white">
        <div className="w-full md:order-1 order-2 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Hello,Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday !!</span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="join w-full ">
              <input
                className="input input-bordered join-item bg-white dark:bg-slate-900 w-full"
                placeholder="Email"
              />
              <button className="btn btn-secondary join-item rounded bordered ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:order-2 order-1 md:w-1/2 mt-12 md:mt-16">
          <img src={banner} className="md:mx-12 "></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
