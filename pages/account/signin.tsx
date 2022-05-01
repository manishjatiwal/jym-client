import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "components/Button";
import Input from "components/Input";
import Checkbox from "components/Checkbox";

type Inputs = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-row justify-start items-start h-screen">
      <Head>
        <title>JYM | Signin</title>
        <meta name="description" content="Jym Signin Widget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-1/2">
        <div className="circle" />
      </div>

      <div className="w-1/2 h-full flex flex-row justify-center items-center">
        <form className="w-3/5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl mb-3">Welcome</h1>
          <h5 className="text-grey text-sm mb-4">
            Welcome! Please enter your details.
          </h5>
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            register={register}
            error={errors["email"]}
            autoComplete="username"
            options={{
              validate: {
                required: (value) =>
                  value.length <= 0 ? "Required" : undefined,
              },
            }}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            register={register}
            error={errors["password"]}
            autoComplete="current-password"
            options={{
              validate: (value) => {
                if (value.length <= 0) return "Required";
                if (value.length < 6)
                  return "Should contain atleast 6 characters";
                return undefined;
              },
            }}
          />
          <div className="flex flex-direction justify-between items-center my-3">
            <Checkbox
              name="remember"
              label="Remember for 30 days"
              register={register}
            />
            <Link href="/account/forgot-password">
              <a className="text-sm text-primary">Forgot Password</a>
            </Link>
          </div>
          <Button type="submit" variant="primary" className="mt-2 w-full">
            Submit
          </Button>
          <div className="text-center mt-4 text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link href="/account/signup">
              <a className="text-sm text-primary">Sign Up</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
