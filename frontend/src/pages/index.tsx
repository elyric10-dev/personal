import Head from "next/head";
import HeaderNavigation from "~/components/HeaderNavigation";
import SectionPages from "~/sections";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Welcome to my Portfolio</title>
        <meta name="description" content="Elyric Manatad Personal Web" />
        <link rel="icon" href="/eam.ico" />
      </Head>

      <HeaderNavigation />
      <SectionPages />
    </>
  );
};

export default Home;
