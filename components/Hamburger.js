import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const y = 3.5;
const x = 13;

export default function Hamburger(props) {
  const [open, setOpen] = useState(true);

  return (
    <button
      className="absolute top-0 right-0 m-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="relative">
        <motion.div
          animate={{
            rotate: open ? 0 : 45,
            y: open ? 0 : -1 * y,
            x: open ? 0 : x,
          }}
          className="origin-left rounded-full w-14 h-2 bg-white mb-2"
        ></motion.div>
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          className="rounded-full w-14 h-2 bg-white"
        ></motion.div>
        <motion.div
          animate={{
            rotate: open ? 0 : -45,
            y: open ? 0 : y,
            x: open ? 0 : x,
          }}
          className="origin-left rounded-full w-14 h-2 bg-white mt-2"
        ></motion.div>
        <motion.div
          animate={{
            opacity: open ? 0 : 1,
            x: open ? 100 : 0,
          }}
          transition={{ type: "ease-in" }}
          className="bg-white shadow py-2 absolute right-0 mt-2 opacity-0 rounded flex flex-col"
        >
          {props.urls.map((item) => (
            <Link key={item.name} href={item.url} passHref>
              <a className="bg-white hover:bg-slate-100 focus:bg-slate-200 py-1 px-10 text-xl text-stone-700">
                {item.name}
              </a>
            </Link>
          ))}
        </motion.div>
      </div>
    </button>
  );
}
