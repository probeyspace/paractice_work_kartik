"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";
import ImageMagnifier from "./ImageMagnifier";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

function ProductDetail() {
  const { id } = useParams();
  const products = [
    {
      id: 1,
      name: "Mother Diary Toned Milk",
      quantity: "500 ml",
      image: [
        "/images/dairy/amul.png",
        "/images/dairy/md2.png",
        "/images/dairy/md3.png",
        "/images/dairy/md4.png",
        "/images/dairy/md5.png",
        "/images/dairy/md6.png",
        "/images/dairy/md7.png",
      ],
      price: "31",
    },
    {
      id: 2,
      name: "Amul Gold Full Cream Milk",
      quantity: "500 ml",
      image: [
        "/images/dairy/amulCream.png",
        "/images/dairy/md2.png",
        "/images/dairy/md3.png",
        "/images/dairy/md4.png",
        "/images/dairy/md5.png",
        "/images/dairy/md6.png",
        "/images/dairy/md7.png",
      ],
      price: "31",
    },
    {
      id: 3,
      name: "Amul Taaza Toned Milk",
      quantity: "500 ml",
      image: [
        "/images/dairy/toned.png",
        "/images/dairy/md2.png",
        "/images/dairy/md3.png",
        "/images/dairy/md4.png",
        "/images/dairy/md5.png",
        "/images/dairy/md6.png",
        "/images/dairy/md7.png",
      ],
      price: "31",
    },
    {
      id: 4,
      name: "Mother Dairy Classic Pouch Curd",
      quantity: "390 ml",
      image: [
        "/images/dairy/curd.png",
        "/images/dairy/md2.png",
        "/images/dairy/md3.png",
        "/images/dairy/md4.png",
        "/images/dairy/md5.png",
        "/images/dairy/md6.png",
        "/images/dairy/md7.png",
      ],
      price: "31",
    },
    {
      id: 5,
      name: "Amul Salted Butter",
      quantity: "100 ml",
      image: [
        "/images/dairy/butter.png",
        "/images/dairy/md2.png",
        "/images/dairy/md3.png",
        "/images/dairy/md4.png",
        "/images/dairy/md5.png",
        "/images/dairy/md6.png",
        "/images/dairy/md7.png",
      ],
      price: "31",
    },
    {
      id: 6,
      name: "Mother Dairy Cow Milk",
      quantity: "500 ml",
      image: [
        "/images/dairy/motherDairy.png",
        "/images/dairy/md2.png",
        "/images/dairy/md3.png",
        "/images/dairy/md4.png",
        "/images/dairy/md5.png",
        "/images/dairy/md6.png",
        "/images/dairy/md7.png",
      ],
      price: "31",
    },
  ];

  const whyBlinkit = [
    {
      id: 1,
      image: "/images/details/one.png",
      title: "Round the Clock Delivery",
      description:
        "Get items delivered to your doorstep from dark stores near you, whenever you need them.",
    },
    {
      id: 2,
      image: "/images/details/two.png",
      title: "Best Prices & Offers",
      description:
        "Best price destination with offers directly from the manufacturers.",
    },
    {
      id: 3,
      image: "/images/details/three.png",
      title: "Wide Assortment",
      description:
        "Choose from 30,000+ products across food, personal care, household & other categories.",
    },
  ];

  const product = products.find((p) => p.id == id);
  const [selectedImage, setSelectedImage] = useState(product?.image?.[0] || "");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setSelectedImage(product?.image?.[0] || "");
  }, [id]);

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  return (
    <div className="px-8 py-16 flex font-poppins">
      {/* left */}
      <div className="w-1/2">
        <div className="my-16 mx-12">
          <ImageMagnifier src={selectedImage} />
        </div>
        <div className="relative w-[498px] ml-[40px] mt-6">
          <button
            className={`thumb-prev absolute -left-13 top-1/2 -translate-y-1/2 z-10 bg-white w-9 h-9 rounded-full shadow-black/30 shadow-lg flex items-center justify-center transition-all duration-300 ${
              isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <IoIosArrowBack size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".thumb-prev",
              nextEl: ".thumb-next",
            }}
            slidesPerView={5}
            spaceBetween={12}
            className="mx-14"
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {product.image.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setSelectedImage(img)}
                  className={`w-[72px] h-[72px] border rounded-xl cursor-pointer flex items-center justify-center transition
          ${
            selectedImage === img
              ? "border-2 border-[#0C831F]"
              : "border-gray-200"
          }`}
                >
                  <Image
                    src={img}
                    alt=""
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="thumb-next absolute -right-13 top-1/2 -translate-y-1/2 z-10 bg-white w-9 h-9 rounded-full shadow-black/30 shadow-lg flex items-center justify-center">
            <IoIosArrowForward size={20} />
          </button>
        </div>
        <div className="mt-[48px]">
          <p className="font-bold">Product Details</p>
          <p className="text-[#161616] mt-2  text-[13px]">Processing Type</p>
          <p className="text-[#666] text-[12px] mt-1">Homogenized</p>
          <div className="flex mt-2 text-[#34831a]">
            <p>View more details</p>
            <MdArrowDropDown className="text-[20px]" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col min-h-[420px] py-6 border-l-1 border-[#e7e6e6] pl-20 w-1/2 mt-16">
        <p className="text-gray-500 text-[12px]">
          Home / Milk /
          <span className="text-gray-700 font-medium ">{product.name}</span>
        </p>

        <h1 className="text-[17px] font-bold text-[#1f1f1f] mt-1">
          {product.name}
        </h1>

        <div>
          <p className="font-semibold text-[13px] text-lg mb-4 mt-2">
            Select Unit
          </p>

          <div className="flex gap-4">
            <div className="border-2 border-[#34831a] rounded-xl px-3 py-2 w-20.25 cursor-pointer">
              <p className="text-[13px] font-medium">500 ml</p>
              <p className="font-bold  text-[13px]">₹36</p>
            </div>

            <div className="border border-gray-300 rounded-xl px-3 py-2 cursor-pointer w-[81px] hover:border-[#0C831F] transition">
              <p className="text-[13px] font-medium">1 ltr</p>
              <p className="font-bold text-[13px]">₹72</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-[13px] text-gray-700 font-semibold my-2">
              500 ml
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-col">
            <p className="text-[13px] font-bold">₹36</p>
            <p className="text-[9px] text-gray-500 mt-1.5">
              (Inclusive of all taxes)
            </p>
          </div>
          <button className="bg-[#318616] hover:bg-[#2a7513] transition text-white font-semibold text-[14px] px-6 py-2.5 rounded-lg">
            Add to cart
          </button>
        </div>
        <div className="mt-14">
          <h2 className="text-[18px] font-semibold text-[#363636] mb-6">
            Why shop from Blinkit?
          </h2>

          <div className="flex flex-col gap-7">
            {whyBlinkit.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-[13px] font-medium text-[#363636]">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-[#666] leading-3.5  max-w-[430px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
