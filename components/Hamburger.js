import { motion } from "framer-motion";
import { useState } from "react";

export default function Hamburger(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute top-0 right-0 m-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <motion.div animate={{rotate: "10"}} className="rounded-full w-14 h-2 bg-white mb-2"></motion.div>
      <motion.div className="rounded-full w-14 h-2 bg-white"></motion.div>
      <motion.div className="rounded-full w-14 h-2 bg-white mt-2"></motion.div>
    </div>
  );
}
