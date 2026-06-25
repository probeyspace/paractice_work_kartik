"use client"
import { object } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state)=>(state.cart.items))

  const cartCount= Object.keys(items).length //object to array properties number
  return (
    <div className="flex px-5 items-center fixed bg-white w-full max-w-[] font-poppins justify-between">
      <Image src="/images/logo.png" width={134} height={30} alt="name"/>
      <div>
        <p className="text-[18px] font-bold">Delivery in 12 minutes</p>
        <div className="flex gap-4 items-center">
          <p className="text-[13px]">5 Block H, Ansari Nagar West,...</p>
          <BiSolidDownArrow className="text-[10px]" />
        </div>
      </div>
      <div className="flex items-center h-12 bg-[#f3f1f1] rounded-xl">
        <IoSearchOutline className="w-8 h-6" />
        <input
          type="search"
          placeholder='Search "Butter"'
          className="min-w-150 h-12"
        />
      </div>
      <p className="text-[18px]">Login</p>
      {/* cart */}
      <div className={`flex items-center text-[18px] w-32 h-12 text-center font-semibold  rounded-xl text-white justify-around ${cartCount===0 ? " bg-[#e2dddd]" : "bg-green-700" } `}>
        <BsCart3 />
        <Link href="/cart" className="text=[12px]">My Cart : {cartCount}</Link>
      </div>
    </div>
  );
}

export default Navbar;
