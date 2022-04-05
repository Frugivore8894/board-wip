import Head from "next/head";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import Hamburger from "../components/Hamburger";
import jsonData from "../list.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fjordboard</title>
        <meta name="description" content="fjordboard.com home page" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <style></style>
      </Head>

      <Hamburger urls={[{ url: "/faq", name: "FAQ" }]} />

      <main className="flex flex-row flex-wrap w-screen p-2">
        {jsonData.map((item) => (
          <div
            key={item.name}
            className="h-[300px] relative flex-shrink flex-grow m-2 shadow"
            style={{ width: (300 / item.height) * item.width }}
          >
            <Image src={item.url} alt={item.name} layout="fill" />
          </div>
        ))}
      </main>

      <footer>
        <div className="text-center w-screen flex flex-row justify-center bg-slate-700">
          <h3 className="text-slate-200 underline p-3">
            <a href="mailto:frugivore@fjordboard.com">Contact</a>
          </h3>
          <h3 className="text-slate-200 underline p-3">
            <a href="https://discord.gg/ceeAvdfD" className="flex flex-row">
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