import Head from "next/head";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import Hamburger from "../components/Hamburger";
import discord from "../config.json";

const contentful = require("contentful");

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Fjordboard</title>
        <meta name="description" content="fjordboard.com home page" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <style></style>
      </Head>

      <Hamburger
        urls={[
          { url: "/faq", name: "FAQ" },
          { url: "/", name: "Home" },
        ]}
      />

      <header>
        <h1 className="bg-top md:bg-right-top bg-fill bg-no-repeat bg-[url('/topdown.webp')] py-36 text-gray-100 text-center font-extrabold text-7xl w-screen">
          Gallery
        </h1>
      </header>

      <main className="flex flex-row flex-wrap w-screen p-2">
        {props.images.map((item) => (
          <div
            key={item.name}
            className="h-[300px] relative flex-shrink flex-grow m-2 shadow cursor-pointer"
            style={{ width: (300 / item.height) * item.width }}
          >
            <Image
              src={item.url}
              alt={item.name}
              layout="fill"
              placeholder="blur"
              blurDataURL={item.url}
            />
          </div>
        ))}
      </main>

      <footer>
        <div className="text-center w-screen flex flex-row justify-center bg-slate-700">
          <h3 className="text-slate-200 underline p-3">
            <a href="mailto:frugivore@fjordboard.com">Contact</a>
          </h3>
          <h3 className="text-slate-200 underline p-3">
            <a href={discord.discord} className="flex flex-row">
              <div className="underline p-1 h-[24px] flex flex-col justify-center content-center place-content-center">
                <BsDiscord />
              </div>
              <span>Discord</span>
            </a>
          </h3>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const client = contentful.createClient({
    space: "akrhtr0hzzw4",
    accessToken: process.env.API_KEY,
  });

  const response = await client.getAssets();

  return {
    props: {
      images: response.items.map((item) => ({
        url: "https:" + item.fields.file.url,
        width: item.fields.file.details.image.width,
        height: item.fields.file.details.image.height,
      })),
    },
    revalidate: 3000,
  };
}