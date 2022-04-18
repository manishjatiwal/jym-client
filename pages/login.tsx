import GoogleLogo from "@public/google-icon.svg";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useFetch from "@hooks/useFetch";
import { useEffect } from "react";
import fireAlert from "@components/swal/swal";
import useStore, { accessTokenAtom, userDataAtom } from "@hooks/useStore";
import Link from "next/link";
import Image from "next/image";

type Inputs = {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

export default function Login() {
  const { response, error, isLoading, doFetch } = useFetch("/v1/auth/login");

  const [, setUserdata] = useStore(userDataAtom);
  const [, setAccessToken] = useStore(accessTokenAtom);

  useEffect(() => {
    if (error) {
      fireAlert({
        type: "error",
        title: "Error!",
        message: error.message,
      });
    }
  }, [error]);

  useEffect(() => {
    if (response?.token) {
      setUserdata({ ...response.userData });
      setAccessToken(response.token);
      // navigate("/ow/dashboard");
    }
  }, [response]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    doFetch({
      method: "POST",
      data: data,
    });
  };

  return (
    <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="form w-100">
        <div className="text-center mb-10">
          <h1 className="text-dark mb-3">Sign In to JYM</h1>

          <div className="text-gray-400 fw-bold fs-4">
            New Here?&nbsp;
            <Link href="/signup">
              <a className="link-primary fw-bolder">Create an Account</a>
            </Link>
          </div>
        </div>

        <div className="fv-row mb-10">
          <label className="form-label fs-6 fw-bolder text-dark">Email</label>

          <input
            className="form-control form-control-lg form-control-solid"
            type="email"
            autoComplete="off"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/,
                message: "The value is not a valid email address",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <div className="fv-plugins-message-container invalid-feedback">
                {message}
              </div>
            )}
          />
        </div>

        <div className="fv-row mb-10">
          <div className="d-flex flex-stack mb-2">
            <label className="form-label fw-bolder text-dark fs-6 mb-0">
              Password
            </label>

            <Link href="/forget-password">
              <a className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
            </Link>
          </div>

          <input
            className="form-control form-control-lg form-control-solid"
            type="password"
            autoComplete="off"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <div className="fv-plugins-message-container invalid-feedback">
                {message}
              </div>
            )}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            id="kt_sign_up_submit"
            className="btn btn-lg btn-primary w-100 mb-5"
          >
            {!isLoading ? (
              <span className="indicator-label">Continue</span>
            ) : (
              <span>
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            )}
          </button>
        </div>
        <div className="d-flex align-items-center mb-5">
          <div className="border-bottom border-gray-300 mw-50 w-100"></div>
          <span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
          <div className="border-bottom border-gray-300 mw-50 w-100"></div>
        </div>
        <a
          href="/"
          className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <Image
            alt="Logo"
            src={GoogleLogo}
            width={47}
            className="h-20px me-3"
          />
          Continue with Google
        </a>

        {/* <a
                  href="#"
                  className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
                >
                  <img alt="Logo" src={GoogleLogo} className="h-20px me-3" />
                  Continue with Facebook
                </a>

                <a
                  href="#"
                  className="btn btn-flex flex-center btn-light btn-lg w-100"
                >
                  <img alt="Logo" src={GoogleLogo} className="h-20px me-3" />
                  Continue with Apple
                </a> */}
      </form>
    </div>
  );
}
