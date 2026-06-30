"use client";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import AddressModal from "./AddressModal";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholders = [
  'Search "Butter"',
  'Search "Milk"',
  'Search "Vegetables"',
  'Search "Soap"',
  'Search "Cream"',
];

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isAddressOpen, setAddressOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");

  const cartCount = Object.keys(items).length; //object to array properties number

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex px-5 items-center fixed bg-white w-full z-10 h-23 border-[#e9e9e9] border-b font-poppins justify-between">
      <Image src="/images/logo.png" width={134} height={30} alt="name" />
      <button
        type="button"
        onClick={() => setAddressOpen(true)}
        className="cursor-pointer text-left"
      >
        <p className="text-[18px] font-bold">Delivery in 12 minutes</p>
        <div className="flex items-center gap-4">
          <p className="text-[13px]">5 Block H, Ansari Nagar West,...</p>
          <BiSolidDownArrow className="text-[10px]" />
        </div>
      </button>
      {/* <div className="flex items-center h-12 bg-[#f3f1f1] rounded-xl">
        <IoSearchOutline className="w-8 h-6" />
        <input
          type="search"
          placeholder='Search "Butter"'
          className="min-w-150 h-12"
        />
      </div> */}
      <div className="relative flex items-center w-[600px] h-12 bg-[#f3f1f1] rounded-xl px-4">
        <IoSearchOutline className="w-5 h-5 text-gray-500" />

        <div className="relative flex-1 h-full ml-2">
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="relative w-full h-full bg-transparent outline-none text-[#d4cfcf]"
          />

          <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
            <AnimatePresence mode="wait">
              {!value && (
                <motion.div
                  key={index}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center text-gray-500 whitespace-nowrap"
                >
                  {placeholders[index]}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <p className="text-[18px]">Login</p>
      {/* cart */}
      <div
        className={`flex items-center text-[18px] font-poppins w-32 h-12 text-center font-semibold  rounded-lg text-white justify-around ${cartCount === 0 ? " bg-[#e2dddd]" : "bg-green-700"} `}
      >
        <BsCart3 />
        <div
          className="text=[14px] cursor-pointer"
          onClick={() => setCartOpen(!isCartOpen)}
        >
          {cartCount !== 0 ? `My Cart : ${cartCount}` : "My Cart"}
        </div>
      </div>
      {isCartOpen && <Cart isCartOpen={isCartOpen} />}
      <AddressModal
        isOpen={isAddressOpen}
        onClose={() => setAddressOpen(false)}
      />
    </div>
  );
}

export default Navbar;
