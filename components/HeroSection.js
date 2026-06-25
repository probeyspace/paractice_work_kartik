import Image from "next/image";

function HeroSection() {
  return (
    <div className="mt-30">
      <div className=" w-full px-9">
        <Image
          src="/images/hero1.png"
          width={1280}
          height={272}
          className="cursor-pointer mx-auto"
          alt="name"
          loading="lazy"
        />
        <div className="flex w-full max-w-[1084px] mt-3">
          <Image
            src="/images/hero2.png"
            width={335}
            height={195}
            className="cursor-pointer mx-auto"
            alt="name"
            loading="lazy"
          />
          <Image
            src="/images/hero3.png"
            width={335}
            height={195}
            className="cursor-pointer mx-auto"
            loading="lazy"
            alt="name"
          />
          <Image
            src="/images/hero4.png"
            width={335}
            height={195}
            className="cursor-pointer mx-auto"
            loading="lazy"
            alt="name"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
