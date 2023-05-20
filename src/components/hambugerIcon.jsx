import { motion } from "framer-motion";

const HamburgerIcon = ({ toggle }) => {
  return (
    <motion.button
      className=" flex flex-col justify-center align-middle w-[30px] h-[30px] bg-transparent cursor-pointer"
      onClick={toggle}
      whileTap={{ scale: 0.8 }}
    >
      <span className=" block w-[20px] h-[2px] m-[3px] bg-slate-800"></span>
      <span className=" block w-[20px] h-[2px] m-[3px] bg-slate-800"></span>
      <span className=" block w-[20px] h-[2px] m-[3px] bg-slate-800"></span>
    </motion.button>
  );
};

export default HamburgerIcon;
