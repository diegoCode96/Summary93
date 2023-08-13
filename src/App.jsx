import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="bg-PaleBlue min-h-screen grid place-content-center">
      <img className="absolute max-[375px]:hidden" src="images/pattern-background-desktop.svg" alt="" />
      <article className="bg-VeryPaleBlue w-[20rem] rounded-3xl overflow-hidden celu:w-[25rem] z-10 ">
        <div>
          <img src="images/illustration-hero.svg" alt="" />
        </div>
        <section className=" flex flex-col justify-center items-center gap-6">
          <h1 className="mt-8 font-black text-Darkblue text-[1.4rem]">
            Order Summary
          </h1>
          <p className=" text-center px-10 text-Desaturatedblue">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <section className="bg-VeryPaleBlue2 px-4 py-4 flex justify-center items-center gap-8 rounded-xl">
            <div className="flex">
              <img src="images/icon-music.svg" alt="" />
              <div className="ml-4">
                <h2 className="font-black text-[1rem] ">Annual Plan</h2>
                <h3 className="text-Desaturatedblue">$59.99/year</h3>
              </div>
            </div>

            <h2 className="text-BrightBlue font-bold text-[0.9rem] underline cursor-pointer">
              Change
            </h2>
          </section>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-BrightBlue px-16 py-3 rounded-xl text-gray-100 text-[1rem] shadow-2xl"
          >
            Proceed to Payment
          </motion.button>

          <h3 className="text-Desaturatedblue mb-10 font-bold">Cancel Order</h3>
        </section>
      </article>
    </main>
  );
}

export default App;
