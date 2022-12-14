import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Next App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          {exploreData.results.map((item) => {
            <SmallCard
              key={item.id}
              src={item.media[0]}
              title={item.title}
              abstract={item.abstract}
            />;
          })}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=3AzuoHqIA5CJixL6DxwrwQbgYNpVo1Su"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
    },
  };
}
