import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const y = 3.5;
const x = 13;

export default function Hamburger(props) {
  const [open, setOpen] = useState(true);

  return (
    <div
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
          className="bg-white shadow p-2 px-8 absolute right-0 mt-2"
        >
          <Link href="/faq" passHref>
            <span className="underline text-xl text-blue-700 hover:text-blue-600 focus:text-blue-500">
              FAQ
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
