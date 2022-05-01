import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JYM | Components Demo</title>
        <meta name="description" content="Jym Components Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-start align-start">
        <div className="p-8">
          <h1 className="text-3xl">Buttons</h1>
          <div>
            <Button variant="primary" className="mr-4" size="small">
              Primary Small
            </Button>
            <Button variant="primary" className="mr-4" size="regular">
              Primary Regular
            </Button>
            <Button variant="primary" className="mr-4" size="large">
              Primary Large
            </Button>
            <Button variant="outline" className="mr-4" size="small">
              Outline Small
            </Button>
            <Button variant="outline" className="mr-4" size="regular">
              Outline Regular
            </Button>
            <Button variant="outline" className="mr-4" size="large">
              Outline Large
            </Button>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-3xl">Inputs</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
