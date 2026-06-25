"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { LiaRupeeSignSolid } from "react-icons/lia"

function Cart() {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  const cartItems = Object.values(items);

  return (
    <div>
      <p>My Cart</p>
      <div className="grid grid-cols-3 gap-1">
        {cartItems.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="mt-25 mx-auto max-w-[400px] min-h-[140px] border border-[#dfdbdb] rounded-xl shadow-xl p-4 flex gap-4 items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md object-contain"
              />

              <div>
                <p className="font-semibold text-lg max-w-[200px]">
                  {item.name}
                </p>

                <p className="text-gray-600">₹{item.price}</p>

                <p>Quantity: {item.quantity}</p>

                <p className="font-medium font-semibold">
                <p>Total: <LiaRupeeSignSolid/></p>
                  <p>{Number(item.price) * item.quantity}</p>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
