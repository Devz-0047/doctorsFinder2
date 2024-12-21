import { motion } from "framer-motion";
function Navbar(): JSX.Element {
  return (
    <div className="bg-primary h-[94px] font-roboto font-medium flex items-center justify-around fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between gap-16">
        <motion.img
          src="/logo.png"
          className="w-[259px] h-[49px]"
          initial={{ y: "-100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
        />
        <ul className="text-xl text-[#474747] flex items-center justify-around gap-10 ">
          <motion.li
            initial={{ y: "-100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
          >
            <a>Home</a>
          </motion.li>
          <motion.li
            className="font-semibold cursor-pointer text-highlight"
            initial={{ y: "-100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
          >
            <a>Find Doctors</a>
          </motion.li>
          <motion.li
            initial={{ y: "-100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
          >
            <a>About us</a>
          </motion.li>
        </ul>
      </div>
      <motion.div
        className="flex items-center gap-4"
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
      >
        <button className="px-[37px] border-2 border-highlight py-[10px] text-xl rounded-lg text-highlight font-medium">
          Login
        </button>
        <button className="px-[37px] border-2 py-[12px] text-xl bg-highlight text-white rounded-lg font-medium">
          Sign-up
        </button>
      </motion.div>
    </div>
  );
}

export default Navbar;
