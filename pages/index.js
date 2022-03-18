import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fjordboard</title>
        <meta name="description" content="fjordboard.com home page" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className="bg-[#F0BA36] h-[var(--vh)] bg-center bg-contain bg-no-repeat bg-[url('/bg.png')]">
        <h1 className="text-gray-200 text-center font-extrabold text-5xl absolute bottom-[50%] w-screen transform translate-y-[50%]">
          fjordboard.com is currently a WIP
        </h1>
      </main>

      <footer>
        <h3 className="text-slate-200 text-center absolute w-screen bottom-0 underline p-6">
          <a href="mailto:frugivore@fjordboard.com">Contact</a>
        </h3>
      </footer>
    </div>
  );
}
