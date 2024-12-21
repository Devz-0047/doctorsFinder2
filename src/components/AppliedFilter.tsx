import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
function AppliedFilter() {
  return (
    <div className="flex justify-end gap-4 mt-10 mr-28 item-center font-inter">
      <motion.div
        className="flex items-center justify-center px-5 py-2 rounded-full bg-secondary"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 20,
        }}
      >
        <p>Hair Care</p>{" "}
        <button>
          <RxCross2 className="text-xl" />
        </button>
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 20,
        }}
      >
        <p>Female</p>{" "}
        <div className="text-xl">
          <RxCross2 />
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 20,
        }}
      >
        <p>Rs.0-Rs.500</p>{" "}
        <div>
          <RxCross2 />
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 20,
        }}
      >
        <p>Hindi</p>{" "}
        <div className="text-xl">
          <RxCross2 />
        </div>
      </motion.div>
    </div>
  );
}

export default AppliedFilter;
