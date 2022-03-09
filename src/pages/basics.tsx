import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Nuketown Social</title>
        <meta
          name="description"
          content="Basic Features"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
