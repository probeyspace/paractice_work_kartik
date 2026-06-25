"use client";
import Image from "next/image";
import { LuTimerReset } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/redux/features/cart/CartSlice";

function Dairy() {
  // const [cart, setCart] = useState({}); //empty is undefined, it should be prev || 0, undefined* 1= Nan
  const dispatch = useDispatch()
  const items = useSelector((state)=>(state.cart.items))

  // const increaseCount = (id) => {
  //   setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  // };

  // const decreaseCount = (id) => {
  //   setCart((prev) => ({
  //     ...prev,
  //     [id]: Math.max((prev[id] || 0)-1, 0),
  //   }));
  // };

  const products = [
    {
      id: 1,
      name: "Mother Diary Toned Milk",
      quantity: "500 ml",
      image: "/images/dairy/amul.png",
      price: "31",
    },
    {
      id: 2,
      name: "Amul Gold Full Cream Milk",
      quantity: "500 ml",
      image: "/images/dairy/amulCream.png",
      price: "31",
    },
    {
      id: 3,
      name: "Amul Taaza Toned Milk",
      quantity: "500 ml",
      image: "/images/dairy/toned.png",
      price: "31",
    },
    {
      id: 4,
      name: "Mother Dairy Classic Pouch Curd",
      quantity: "390 ml",
      image: "/images/dairy/curd.png",
      price: "31",
    },
    {
      id: 5,
      name: "Amul Salted Butter",
      quantity: "100 ml",
      image: "/images/dairy/butter.png",
      price: "31",
    },
    {
      id: 6,
      name: "Mother Dairy Cow Milk",
      quantity: "500 ml",
      image: "/images/dairy/motherDairy.png",
      price: "31",
    },
  ];
  return (
    <div className="px-12">
      <div className="flex  mt-4 justify-between font-poppins">
        <p className="font-semibold text-2xl">Dairy, Breads & Eggs</p>
        <p className="text-[#0C831F] text-[20px] font-poppins font-medium">
          see all
        </p>
      </div>
      <div className="grid grid-cols-6 mt-6">
        {products.map((item, index) => {
          const count = items[item.id]?.quantity || 0;
          // console.log(count);

          return (
            <div
              key={index}
              className="border min-h-[260px] pb-2 flex flex-col justify-between shadow-xl px-3 border-[#dfdbdb] rounded-xl  mx-auto w-[179px]"
            >
              <Image
                key={index}
                src={item.image}
                width={140}
                height={140}
                alt="name"
              />
              <div className=" flex flex-col justify-between">
                <div className="text-[9px] mt-1 flex text-[#444444] font-bold">
                  <LuTimerReset />
                  <p>12min</p>
                </div>
                <p className="text-[#1F1F1F] mt-2 text-[13px] font-poppins leading-4 font-semibold">
                  {item.name}
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex text-[13px] items-center ">
                  <FaRupeeSign />
                  <p className="font-semibold">{item.price}</p>
                </div>
                {count === 0 ? (
                  <p
                    onClick={()=>dispatch(addItem(item))}
                    className="text-[#0C831F] pt-1 h-[32px] cursor-pointer border-[#0C831F] bg-[#F7FFF9] rounded-sm text-[13px] text-center border w-15"
                  >
                    ADD
                  </p>
                ) : (
                  <div className="text-white font-semibold pt-1 h-[32px] border-[#0C831F] bg-[#0C831F] flex gap-2 justify-center items-center rounded-sm text-[15px] text-center border w-15">
                    <button
                      onClick={()=>dispatch(removeItem(item.id))}
                      className="text-[10px] cursor-pointer"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-[12px]">{count}</span>
                    <button onClick={() => dispatch(addItem(item))} className="cursor-pointer">+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dairy;
