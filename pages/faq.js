import Head from "next/head";
import { BsDiscord } from "react-icons/bs";
import Hamburger from "../components/Hamburger";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fjordboard</title>
        <meta name="description" content="fjordboard.com home page" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
      </Head>

      <Hamburger urls={[{ url: "/", name: "Home" }]} />

      <header>
        <h1 className="bg-top md:bg-right-top bg-fill bg-no-repeat bg-[url('/K8.webp')] py-36 text-gray-200 text-center font-extrabold text-7xl w-screen">
          FAQ
        </h1>
      </header>

      <main className="flex flew-row">
        <div className="flex-grow"></div>
        <article className="prose p-8 m-8 bg-slate-50 shadow w-full md:max-w-none md:mx-44">
          <h2>Q: Why the name?</h2>
          <p>
            A: For as long as I can remember I have always wanted to visit a
            fjord. I also love the name and saying it correctly always freaks
            people out here in the states (said like Fyord). So when it was time
            to name the project I thought “well fjord and board rhyme…” and
            there you go.
          </p>
          <h2>Q: Why the odd layout?</h2>
          <p>
            A: TLDR: because of my needs. Since I got into this hobby about two
            years ago I have only had 75% boards. I can’t live with any smaller
            ones since I use F and arrow keys quite often and I like a lot of
            mouse space so TKL and larger is out. But I don’t use the prtSc,
            Pause, Ins, End, PgUp, and PgDn keys. They end up regularly getting
            in my way. I started this project thinking I could naively think I
            could save a buck by designing a custom case for a PCB I had just
            for myself. Learn CAD and 50 bucks of CNC later boom fancy new KB
            right? No. So you see that I really designed the core idea around
            (almost) exactly what I use and what I use only. When I realized it
            was stupid to do a one-off I was talking to my dad (an audio guy)
            and he suggested that I put a slide pot on the large blocker. I
            thought it would be funny and a bit of a gimmick but eventually I
            came back around and realized it was a great idea. There is a long
            but actually brief explanation of how this layout came to be.
          </p>
          <h2>Q: Why no knobs?</h2>
          <p>
            A: Personally I think knobs are cool but overused. I get that they
            are more space-efficient than a slider but a slider also gives you a
            very different user experience than a knob.
          </p>
          <h2>Q: Will there be more?</h2>
          <p>
            A: Yes! I don’t plan on stopping; this is just the first of many
            cool things to some!
          </p>
          <h2>Q: Will you release plate or other files?</h2>
          <p>
            A: Partial yes. I will release plate files Because I am only
            providing an Fr4 plate option. As for other files, I will release
            slider handle files so you can make custom handles.
          </p>
          <h2>Q: How do I contact you?</h2>
          <p>
            A: You can email me at{" "}
            <a href="mailto:frugivore@fjordboard.com">
              frugivore@fjordboard.com
            </a>
            , discord DM me Frugivore#5051, or join the{" "}
            <a href="https://discord.gg/ceeAvdfD">discord server</a>.
          </p>
        </article>
        <div className="flex-grow"></div>
      </main>

      <footer>
        <div className="text-center w-screen flex flex-row justify-center">
          <h3 className="text-slate-600 underline p-3">
            <a href="mailto:frugivore@fjordboard.com">Contact</a>
          </h3>
          <h3 className="text-slate-600 underline p-3">
            <a href="https://discord.gg/yk5Z3GW8" className="flex flex-row">
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
