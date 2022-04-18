import React from "react";

export default function Login() {
  return (
    <div className="h-screen justify-center pt-10">
      <div className=" justify-center">
        <img
          className="object-contain h-20 w-full"
          src="https://logo.clearbit.com/spotify.com"
        />
      </div>
      <div className="mt-10 mx-auto w-3/4 md:w-2/6 shadow-[0rem_0.1rem_1rem_0.25rem_rgba(0,0,0,.05)] rounded-md">
        <div className="p-10 text-center font-medium">
          <h2 className=" text-2xl">Sign In </h2>
          <p className="mt-4 text-sec">
            New Here? <a className="text-primary">Create an account</a>
          </p>
          <form className="mt-10 text-left">
            <div>
              <label className="block">Email</label>
              <input
                className="mt-2 input-primary"
                id="full-name"
                type="text"
                value="Jane Doe"
              />
            </div>
            <div className="mt-10">
              <label className="block">Password</label>
              <input
                className="mt-2 input-primary"
                id="full-name"
                type="password"
                value="Jane Doe"
              />
            </div>
            <div className="mt-10">
              <button className="bg-primary hover:opacity-90  h-12 duration-200 rounded-md w-full py-2 px-4 text-white  outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
