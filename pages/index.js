import Head from 'next/head'
import { BsDiscord } from "react-icons/bs";
import Hamburger from "../components/Hamburger"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fjordboard</title>
        <meta name="description" content="fjordboard.com home page" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <style></style>
      </Head>

      <Hamburger urls={[{ url: "/faq", name: "FAQ" }, { url: "/gallery", name: "Gallery" }]} />

      <main className="absolute w-screen z-0 bg-[#F0BA36] h-[var(--vh)] bg-center bg-contain bg-no-repeat bg-[url('/bg.webp')]">
        <h1 className="text-gray-200 text-center font-extrabold text-5xl absolute bottom-[55%] w-screen transform translate-y-[50%] py-1">
          fjordboard.com is currently a WIP
        </h1>
        <div className="text-center absolute bottom-[27%] left-[50%] transform translate-x-[-50%] translate-y-[50%]">
          <a
            className="cursor-pointer text-white rounded-md shadow-md hover:shadow focus:shadow-sm bg-sky-600 hover:bg-[#0A9ADE] focus:bg-sky-500 text-center font-bold text-3xl p-3 w-80 transition-all duration-300 mb-16 mx-auto flex flex-row"
            href="https://geekhack.org/index.php?topic=116532.0"
          >
            <h2 className="flex-grow text-center">Interest Check</h2>
          </a>
          <a
            className="cursor-pointer text-white rounded-md shadow-md hover:shadow focus:shadow-sm bg-sky-600 hover:bg-[#0A9ADE] focus:bg-sky-500 text-center font-bold text-2xl p-1 w-48 transition-all duration-300 mt-16 mx-auto flex flex-row"
            href="https://drive.google.com/drive/folders/1uJiZu0eMZ4Eqs5un8XuQTqbfWQAKhytT?usp=sharing"
          >
            <h3 className="flex-grow text-center">Renders</h3>
          </a>
        </div>
      </main>

      <footer>
        <div className="text-center w-screen flex flex-row justify-center bottom-0 absolute">
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
