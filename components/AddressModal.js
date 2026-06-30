"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const addressTypes = [
  { id: "home", label: "Home", icon: "/images/address/home.png" },
  { id: "work", label: "Work", icon: "/images/address/work.png" },
  { id: "hotel", label: "Hotel", icon: "/images/address/hotel.png" },
  { id: "other", label: "Other", icon: "/images/address/location.png" },
];

function AddressModal({ isOpen, onClose, onSave }) {
  const [addressType, setAddressType] = useState("home");
  const [form, setForm] = useState({
    flat: "",
    floor: "",
    landmark: "",
    name: "",
    phone: "9682061221",
  });

  if (!isOpen) return null;

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSave = () => {
    const newAddress = {
      type: addressType.charAt(0).toUpperCase() + addressType.slice(1),
      address: `${form.floor ? form.floor + ', ' : ''}${form.flat}, Block-H, Sector 63, Noida${form.landmark ? ', ' + form.landmark : ''}`,
    };
    onSave(newAddress);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black/55 p-4 font-poppins">
      <div className="relative flex max-h-[94vh] w-full max-w-[890px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-1 text-gray-500 hover:bg-gray-100"
          aria-label="Close"
        >
          <IoClose className="text-2xl" />
        </button>

        <div className="flex w-full flex-col md:flex-row">
          {/* Left panel */}
          <div className="w-full shrink-0 border-r border-[#eee] md:w-[46%] ">
            <Image src="/images/address/map.png" width={420} height={170}/>
            <div className="px-5 py-4">
              <p className="mb-3 text-[15px] font-bold text-[#1c1c1c]">
                Delivering your order to
              </p>
              <div className="flex items-start gap-3 rounded-xl bg-[#f7f7f7] px-4 py-3">
                <MdLocationOn className="mt-0.5 shrink-0 text-xl text-[#333]" />
                <div className="text-black">
                  <p className="font-bold text-[13px]">Block H</p>
                  <p className="text-[12px] text-black">Sector 63, Noida</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="no-scrollbar relative flex w-full flex-col overflow-y-auto md:w-[54%] px-1">
            <div className="flex-1 px-6 pb-4 pt-4">
              <h2 className="mb-5 text-[17px] font-bold text-[#1c1c1c]">
                Enter complete address
              </h2>

              <p className="mb-2 text-[12px] text-[#666]">
                Save address as *
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {addressTypes.map(({ id, label, icon }) => {
                  const selected = addressType === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setAddressType(id)}
                      className={`flex items-center gap-1.5 rounded-lg border px-2 py-1.5 text-sm font-medium transition-colors ${
                        selected
                          ? "border-[#148326] bg-[#e8f5ea] text-[#666]"
                          : "border-[#ddd] bg-white text-[#333] hover:border-gray-400"
                      }`}
                    >
                      <Image src={icon} width={18} height={18} />
                     <p className="text-xs">{label}</p>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Flat / House no / Building name *"
                  value={form.flat}
                  onChange={updateField("flat")}
                  className="w-full rounded-lg border border-[#ddd] px-4 py-3 text-sm outline-none placeholder:text-[#999] placeholder:text-[13px] focus:border-[#148326]"
                />
                <input
                  type="text"
                  placeholder="Floor (optional)"
                  value={form.floor}
                  onChange={updateField("floor")}
                  className="w-full rounded-lg border border-[#ddd] px-4 py-3 text-sm outline-none placeholder:text-[#999] placeholder:text-[13px] focus:border-[#148326]"
                />
                <input
                  type="text"
                  readOnly
                  value="Block-H, Sector 63, Noida"
                  className="w-full rounded-lg border border-[#eee] bg-[#f5f5f5] px-4 py-3 text-sm text-[#302a2a] placeholder:text-[13px] outline-none"
                />
                <input
                  type="text"
                  placeholder="Nearby landmark (optional)"
                  value={form.landmark}
                  onChange={updateField("landmark")}
                  className="w-full rounded-lg border border-[#ddd] px-4 py-3 text-sm outline-none placeholder:text-[#999] placeholder:text-[13px] focus:border-[#148326]"
                />
              </div>

              <p className="mb-3 mt-5 text-sm text-[#b1acac]">
                Enter your details for seamless delivery experience
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name *"
                  value={form.name}
                  onChange={updateField("name")}
                  className="w-full rounded-lg border border-[#ddd] px-4 py-3 text-sm outline-none placeholder:text-[#999] focus:border-[#148326]"
                />
                <input
                  type="tel"
                  placeholder="Your phone number (optional)"
                  value={form.phone}
                  onChange={updateField("phone")}
                  className="w-full rounded-lg border border-[#ddd] px-4 py-3 text-sm outline-none placeholder:text-[#999] mb-25 focus:border-[#148326]"
                />
              </div>
            </div>

            <div className="border-t bottom-8 bg-white max-w-[474px] w-full fixed border-[#eee] px-6 py-4">
              <button
                type="button"
                onClick={handleSave}
                className="w-full rounded-xl bg-[#148326] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#106b1e]"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
