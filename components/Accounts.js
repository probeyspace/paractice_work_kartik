"use client";
import Image from "next/image";
import { useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineShoppingBag,
  HiOutlineClipboardList,
  HiOutlineGift,
  HiOutlineLockClosed,
  HiOutlineLogout,
  HiOutlinePlus,
  HiOutlineDotsVertical,
  HiOutlineHome,
} from "react-icons/hi";
import AddressModal from "./AddressModal";

export default function Accounts() {
  const [activeTab, setActiveTab] = useState("addresses");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address:
        "Floor 1st, H No 75 Yadav House 102, Wazirabad, Sector 52, Gurugram",
    },
    {
      id: 2,
      type: "Home",
      address:
        "G Tower, GA-0006, Assotech Windsor Court, 1st Floor, Sector 78, Noida",
    },
    {
      id: 3,
      type: "Home",
      address:
        "Vishwas Khand, 3/408, Gomti Nagar, Lucknow, Vishwas Khand, Lucknow",
    },
  ]);

  const orders = [
    {
      id: 1,
      time: "11 minutes",
      amount: 125,
      date: "29 Jun 2024",
      products: ["/images/products/prod1.png", "/images/products/prod2.png"],
    },
    {
      id: 2,
      time: "11 minutes",
      amount: 236,
      date: "26 Mar 2024",
      products: [
        "/images/products/prod5.png",
        "/images/products/prod3.png",
        "/images/products/prod4.png",
      ],
    },
      {
    id: 3,
    time: "9 minutes",
    amount: 142,
    date: "17 Jul 2025",
    products: [
      "/images/products/prod6.png", 
    ],
  },
  {
    id: 4,
    time: "11 minutes",
    amount: 125,
    date: "29 Jun 2024",
    products: [
      "/images/products/prod8.png",
      "/images/products/prod7.png"
    ],
  },
  ];

  const menuItems = [
    {
      icon: <HiOutlineLocationMarker size={18} />,
      title: "My Addresses",
      active: true,
    },
    {
      icon: <HiOutlineShoppingBag size={18} />,
      title: "My Orders",
    },
    {
      icon: <HiOutlineClipboardList size={18} />,
      title: "My Prescriptions",
    },
    {
      icon: <HiOutlineGift size={18} />,
      title: "E-Gift Cards",
    },
    {
      icon: <HiOutlineLockClosed size={18} />,
      title: "Account privacy",
    },
    {
      icon: <HiOutlineLogout size={18} />,
      title: "Logout",
    },
  ];

  return (
    <div className="min-h-screen bg-white shadow-md shadow-black py-6 px-4 mt-20 font-poppins">
      <div className="max-w-5xl mx-auto bg-white border min-h-[600px] shadow-lg shadow-[#e9e9e9] border-gray-200 flex">
        {/* Sidebar */}

        {/* <div className="w-[260px] border-r border-gray-200">
          <div className="h-22 border-b border-gray-200 flex items-center justify-center">
            <p className="text-xs text-gray-500">+919682061221</p>
          </div>

          <div
            onClick={() => setActiveTab("addresses")}
            className={`h-14 flex items-center gap-4 px-6 border-b cursor-pointer ${
              activeTab === "addresses" ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <HiOutlineLocationMarker size={18} />
            <span>My Addresses</span>
          </div>
          <div
            onClick={() => setActiveTab("orders")}
            className={`h-14 flex items-center gap-4 px-6 border-b cursor-pointer
            ${activeTab === "orders" ? "bg-gray-100" : "hover:bg-gray-50"}`}
          >
            <HiOutlineShoppingBag size={18} />
            <span>My Orders</span>
          </div>
          <div className="h-14 flex items-center gap-4 px-6 border-b">
            <HiOutlineClipboardList size={18} />
            <span>My Prescriptions</span>
          </div>

          <div className="h-14 flex items-center gap-4 px-6 border-b">
            <HiOutlineGift size={18} />
            <span>E-Gift Cards</span>
          </div>

          <div className="h-14 flex items-center gap-4 px-6 border-b">
            <HiOutlineLockClosed size={18} />
            <span>Account Privacy</span>
          </div>

          <div className="h-14 flex items-center gap-4 px-6">
            <HiOutlineLogout size={18} />
            <span>Logout</span>
          </div>
        </div> */}
        <div className="w-[260px] border-r border-[#ececec] bg-white">
          {/* Phone */}

          <div className="h-[84px] flex items-center justify-center border-b border-[#ececec]">
            <p className="text-[14px] text-[#666]">+919682061221</p>
          </div>

          {/* Addresses */}

          <div
            onClick={() => setActiveTab("addresses")}
            className={`h-[54px] flex items-center gap-4 px-6 border-b border-[#ececec] cursor-pointer
    ${activeTab === "addresses" ? "bg-[#fafafa]" : "bg-white"}`}
          >
            <HiOutlineLocationMarker size={17} className="text-[#454545]" />

            <span className="text-[15px] text-[#4d4d4d] font-normal">
              My Addresses
            </span>
          </div>

          {/* Orders */}

          <div
            onClick={() => setActiveTab("orders")}
            className={`h-[54px] flex items-center gap-4 px-6 border-b border-[#ececec] cursor-pointer
    ${activeTab === "orders" ? "bg-[#fafafa]" : "bg-white"}`}
          >
            <HiOutlineShoppingBag size={17} className="text-[#454545]" />

            <span className="text-[15px] text-[#4d4d4d] font-normal">
              My Orders
            </span>
          </div>

          {/* Prescription */}

          <div className="h-[54px] flex items-center gap-4 px-6 border-b border-[#ececec]">
            <HiOutlineClipboardList size={17} className="text-[#454545]" />

            <span className="text-[15px] text-[#4d4d4d]">My Prescriptions</span>
          </div>

          {/* Gift */}

          <div className="h-[54px] flex items-center gap-4 px-6 border-b border-[#ececec]">
            <HiOutlineGift size={17} className="text-[#454545]" />

            <span className="text-[15px] text-[#4d4d4d]">E-Gift Cards</span>
          </div>

          {/* Privacy */}

          <div className="h-[54px] flex items-center gap-4 px-6 border-b border-[#ececec]">
            <HiOutlineLockClosed size={17} className="text-[#454545]" />

            <span className="text-[15px] text-[#4d4d4d]">Account privacy</span>
          </div>

          {/* Logout */}

          <div className="h-[54px] flex items-center gap-4 px-6">
            <HiOutlineLogout size={17} className="text-[#454545]" />

            <span className="text-[15px] text-[#4d4d4d]">Logout</span>
          </div>
        </div>

        {/* Right Section */}

        {activeTab === "addresses" && (
          <div className="flex-1 pt-[14px] px-5">
            <h1 className="text-[19px] font-medium text-gray-900">
              My addresses
            </h1>

            <button 
              onClick={() => setIsAddressModalOpen(true)}
              className="flex items-center gap-2 text-[#267e3e] mt-2 text-[15px] font-medium"
            >
              <HiOutlinePlus size={16} />
              Add new address
            </button>

            <div className="mt-6">
              {addresses.map((item) => (
                <div key={item.id} className="flex justify-between py-2.5">
                  <div className="flex gap-4">
                    <div className="rounded w-[45] h-[45]">
                      <Image
                        src="/images/contact/homeIcon.png"
                        width={45}
                        height={45}
                        alt="name"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] leading-5">
                        {item.type}
                      </h3>

                      <p className="text-gray-500 text-[12px] mt-1 max-w-3xl">
                        {item.address}
                      </p>
                    </div>
                  </div>

                  <button>
                    <HiOutlineDotsVertical
                      className="text-[#267e3e]"
                      size={18}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "orders" && (
          <div className="flex-1 bg-[#f5f5f7] p-4 overflow-y-auto">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-gray-200 mb-4 overflow-hidden"
              >
                {/* Header */}

                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                  <div className="flex items-start gap-3">
                    {/* Tick */}

                    <div className="w-10 h-10 rounded-xl bg-[#ebfaee] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#22a447]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[18px] text-[#1d1d1d]">
                        Arrived in {order.time}
                      </h3>

                      <p className="text-[14px] text-[#444] mt-1">
                        ₹{order.amount}
                        <span className="mx-2">•</span>
                        {order.date}
                      </p>
                    </div>
                  </div>

                  <button>
                    <span className="text-xl">→</span>
                  </button>
                </div>

                {/* Products */}

                <div className="flex gap-3 p-4">
                  {order.products.map((img, index) => (
                    <div
                      key={index}
                      className="w-[112px] h-[68px] border border-gray-200 rounded-xl flex items-center justify-center bg-white"
                    >
                      <img
                        src={img}
                        alt=""
                        className="max-h-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <AddressModal 
        isOpen={isAddressModalOpen} 
        onClose={() => setIsAddressModalOpen(false)}
        onSave={(newAddress) => {
          setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
          setIsAddressModalOpen(false);
        }}
      />
    </div>
  );
}
