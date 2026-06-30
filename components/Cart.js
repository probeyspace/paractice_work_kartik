"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { LiaRupeeSignSolid } from "react-icons/lia";

function Cart({ isCartOpen }) {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  const cartItems = Object.values(items);

  return (
    <div
      className={`fixed top-23 w-74 min-h-[100px] pt-3 bg-white border-l rounded-bl-xl border-b border-gray-400
  transition-transform transform duration-3000 ease-in-out
  ${isCartOpen ? "translate-x-0 right-0" : "translate-x-full -right-20"}`}
    >
      <p className="font-bold text-3xl text-[#646363] text-center ">My Cart</p>
      <div className="flex flex-col min-h-[300px] gap-1">
        {cartItems.length === 0 ? (
          <p className="text-center pt-12">Cart is Empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="mt-10 mx-auto max-w-[380px] min-h-[140px] border border-[#dfdbdb] rounded-xl shadow-xl p-4 flex flex-col gap-1 items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md object-contain"
              />

              <div>
                <p className="font-semibold text-sm max-w-[200px]">
                  {item.name}
                </p>

                <div>
                  <p className="text-gray-600 text-[12px]">₹{item.price}</p>

                  <p className="text-[12px]">Quantity: {item.quantity}</p>
                </div>

                <div className="font-medium font-semibold flex text-[12px] items-center">
                  <p>Total:</p>
                  <LiaRupeeSignSolid />
                  <p>{Number(item.price) * item.quantity}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
