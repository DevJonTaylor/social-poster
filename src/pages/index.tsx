import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Nuketown Social</title>
        <meta
          name="description"
          content="Nuketown Social Poster"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
