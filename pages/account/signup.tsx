import type { NextPage } from "next";
import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";

import Progress from "components/Signup/progress";

import Button from "components/Button";
import Input from "components/Input";

type Inputs = {
  email: string;
  password: string;
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <Head>
        <title>JYM | Signup</title>
        <meta name="description" content="Jym Signup Widget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen flex flex-row">
        <div className="w-3/12">
          <Progress />
        </div>
        <div className="w-9/12 flex flex-row justify-center items-center">
          <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl mb-3 text-center">Email Verification</h1>
            <Input
              name="email"
              placeholder="Enter your email"
              register={register}
              error={errors["email"]}
              autoComplete="username"
              options={{
                validate: (value) => {
                  if (value.length <= 0) return "Required";
                  if (
                    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
                  )
                    return "Please enter a valid email!";
                  return undefined;
                },
              }}
            />
            <Button type="submit" variant="primary" className="mt-2 w-full">
              Send OTP
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
