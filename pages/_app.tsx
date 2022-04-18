import "../styles/globals.css";
// import "../styles/bundle.css";
import type { AppProps } from "next/app";
import DefaultLayout from "@layout/default-layout/default-layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <DefaultLayout>
    //   <Head>
    //     <link
    //       rel="stylesheet"
    //       href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
    //     />
    //   </Head>
    //   <Component {...pageProps} />
    // </DefaultLayout>
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        />
      </Head>
      <Component />
    </>
  );
}

export default MyApp;
