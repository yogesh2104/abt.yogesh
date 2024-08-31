"use client"
import { motion,AnimatePresence } from "framer-motion";

const CardHeader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="px-3 lg:px-5 py-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row space-x-2">
          <motion.div
            className="h-3 w-3 rounded-full bg-red-500"
            whileHover={{ scale: 1.2 }}
          ></motion.div>
          <motion.div
            className="h-3 w-3 rounded-full bg-yellow-500"
            whileHover={{ scale: 1.2 }}
          ></motion.div>
          <motion.div
            className="h-3 w-3 rounded-full bg-green-700"
            whileHover={{ scale: 1.2 }}
          ></motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CardHeader;