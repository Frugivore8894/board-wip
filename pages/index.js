import Head from 'next/head'
import Image from 'next/image'
import bg from "../public/background.PNG";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fjordboard</title>
        <meta name="description" content="fjordboard.com home page" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className="bg-[#F0BA36] h-screen flex flex-col bg-center bg-contain bg-no-repeat bg-[url('/background.png')]">
        <div className="flex-grow"></div>
        <h1 className="text-gray-200 text-center font-extrabold text-5xl">
          fjordboard.com is currently a WIP
        </h1>
        <div className="flex-grow"></div>
      </main>

      <footer>
        <h3 className="text-slate-200 text-center absolute w-screen bottom-0 underline p-6">
          <a href="mailto:frugivore@fjordboard.com">Contact</a>
        </h3>
      </footer>
    </div>
  );
}