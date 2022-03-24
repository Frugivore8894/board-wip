import Head from 'next/head'
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fjordboard</title>
        <meta name="description" content="fjordboard.com home page" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className="bg-[#F0BA36] h-[var(--vh)] bg-center bg-contain bg-no-repeat bg-[url('/bg.png')]">
        <h1 className="text-gray-200 text-center font-extrabold text-5xl absolute bottom-[55%] w-screen transform translate-y-[50%]">
          fjordboard.com is currently a WIP
        </h1>
        <h2>
          <a
            className="cursor-pointer text-white rounded-md shadow-md hover:shadow focus:shadow-sm bg-sky-600 hover:bg-[#0A9ADE] focus:bg-sky-500 text-center font-bold text-3xl absolute bottom-[33%] left-[50%] transform translate-x-[-50%] translate-y-[50%] p-3 px-12 transition-all duration-300"
            href="https://geekhack.org/index.php?topic=116532.0"
          >
            Interest Check
          </a>
        </h2>
      </main>

      <footer>
        <div className="text-center w-screen flex flex-row justify-center bottom-0 absolute">
          <h3 className="text-slate-200 underline p-3">
            <a href="mailto:frugivore@fjordboard.com">Contact</a>
          </h3>
          <h3 className="text-slate-200 underline p-3">
            <a href="https://discord.gg/yk5Z3GW8" className="flex flex-row">
              <div className="underline p-1 h-[24px] flex flex-col justify-center content-center place-content-center">
                <BsDiscord />
              </div>
              <span>Discord</span>
            </a>
          </h3>
          <h3 className="text-slate-200 underline p-3">
            <a href="https://drive.google.com/drive/folders/1EVfQUzCv__ifSMwsICYxO5nGqKgJMd4c?usp=sharing">Renders</a>
          </h3>
        </div>
      </footer>
    </div>
  );
}
