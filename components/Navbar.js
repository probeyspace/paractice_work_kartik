import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex px-12 items-center font-poppins justify-between">
      <Image src="/images/logo.png" width={134} height={30} />
      <div>
        <p className="text-[18px] font-bold">Delivery in 12 minutes</p>
        <div className="flex">
          <p>5 Block H, Ansari Nagar West,...</p>
          <BiSolidDownArrow />
        </div>
      </div>
      <div className="flex items-center h-12 bg-[#f3f1f1] rounded-xl">
        <IoSearchOutline className="w-8 h-6" />
        <input
          type="search"
          placeholder='Search "Butter"'
          className="w-[300px] h-12"
        />
      </div>
      <p className="text-[18px]">Login</p>
      {/* cart */}
      <div className="flex items-center text-[18px] w-32 h-12 text-center font-semibold  rounded-xl text-white justify-around bg-[#e2dddd]">
        <BsCart3 />
        <p className="text=[12px]">My Cart</p>
      </div>
    </div>
  );
}

export default Navbar;
