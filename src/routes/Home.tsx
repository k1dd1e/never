import { motion, } from "framer-motion"
import Header from "../components/Header"
import Search from "../components/Search"

export default function Home() {


  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="px-3 mb-4">
          <Search />
        </div>
        <div className="mb-4 px-3">
          <img className="rounded-3xl h-40 object-cover w-full" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZ5bDRzeG9kYWtiOXFpeWRoOHA0bWtrMzZjendjZ2xwbHJvNnphZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TrVla4Z2PYEkU/giphy.gif" alt="" />
        </div>
      </div>
      <motion.div className="bg-[#000000] border-[#2c2c2c] rounded-t-3xl border-2 grid grid-cols-1 p-3 gap-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-around border-[#2c2c2c] border text-white rounded-full text-lg font-medium text-center gap-1 p-1">
          <div className="w-full bg-[#2c2c2c] py-1 rounded-full shadow-lg">
            <h1 className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              VALORANT
            </h1>
          </div>
          <div className="w-full rounded-full shadow-lg py-1">
            <h1>
              PUBG
            </h1>
          </div>
        </div>
        <motion.div className="flex flex-col bg-[#242424] border border-[#232323] rounded-xl text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 0, y: 1 }} transition={{ duration: 0.5, delay: 0.4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img className="rounded-t-xl h-56 object-cover" src="https://i.pinimg.com/736x/da/ac/de/daacde957999e2869480796333d567b7.jpg" alt="" />
          <div className="p-3 py-2 pb-4 w-full">
            <h1 className="mb-2 text-2xl font-light">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-[#b9b9b9]">
              Russia and Europe
            </p>
            <h2 className="mb-3 text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent font-bold">
              8990 RUR
            </h2>
            <button className="shadow-xl bg-gradient-to-r from-[#3b3b3b] to-[#4b4b4b] text-white font-semibold text-lg py-2 px-4 rounded-full w-full">
              Add to cart
            </button>
          </div>
        </motion.div>
        <motion.div className="flex flex-col bg-[#242424] border border-[#232323] rounded-xl text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 0, y: 1 }} transition={{ duration: 0.5, delay: 0.4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img className="rounded-t-xl h-56 object-cover" src="https://i.pinimg.com/736x/da/ac/de/daacde957999e2869480796333d567b7.jpg" alt="" />
          <div className="p-3 py-2 pb-4 w-full">
            <h1 className="mb-2 text-2xl font-light">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-[#b9b9b9]">
              Russia and Europe
            </p>
            <h2 className="mb-3 text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent font-bold">
              8990 RUR
            </h2>
            <button className="shadow-xl bg-gradient-to-r from-[#3b3b3b] to-[#4b4b4b] text-white font-semibold text-lg py-2 px-4 rounded-full w-full">
              Add to cart
            </button>
          </div>
        </motion.div>
        <motion.div className="flex flex-col bg-[#242424] border border-[#232323] rounded-xl text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 0, y: 1 }} transition={{ duration: 0.5, delay: 0.4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img className="rounded-t-xl h-56 object-cover" src="https://i.pinimg.com/736x/da/ac/de/daacde957999e2869480796333d567b7.jpg" alt="" />
          <div className="p-3 py-2 pb-4 w-full">
            <h1 className="mb-2 text-2xl font-light">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-[#b9b9b9]">
              Russia and Europe
            </p>
            <h2 className="mb-3 text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent font-bold">
              8990 RUR
            </h2>
            <button className="shadow-xl bg-gradient-to-r from-[#3b3b3b] to-[#4b4b4b] text-white font-semibold text-lg py-2 px-4 rounded-full w-full">
              Add to cart
            </button>
          </div>
        </motion.div>
        <motion.div className="flex flex-col bg-[#242424] border border-[#232323] rounded-xl text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 0, y: 1 }} transition={{ duration: 0.5, delay: 0.4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img className="rounded-t-xl h-56 object-cover" src="https://i.pinimg.com/736x/da/ac/de/daacde957999e2869480796333d567b7.jpg" alt="" />
          <div className="p-3 py-2 pb-4 w-full">
            <h1 className="mb-2 text-2xl font-light">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-[#b9b9b9]">
              Russia and Europe
            </p>
            <h2 className="mb-3 text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent font-bold">
              8990 RUR
            </h2>
            <button className="shadow-xl bg-gradient-to-r from-[#3b3b3b] to-[#4b4b4b] text-white font-semibold text-lg py-2 px-4 rounded-full w-full">
              Add to cart
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}