import Image from "next/image";

function HeroSection() {
  return (
    <div>
      <div className=" w-full px-9">
        <Image
          src="/images/hero1.png"
          width={1280}
          height={272}
          className="cursor-pointer mx-auto"
          loading="lazy"
        />
        <div className="flex w-full max-w-[1084px] mt-3">
          <Image
            src="/images/hero2.png"
            width={335}
            height={195}
            className="cursor-pointer mx-auto"
            loading="lazy"
          />
          <Image
            src="/images/hero3.png"
            width={335}
            height={195}
            className="cursor-pointer mx-auto"
            loading="lazy"
          />
          <Image
            src="/images/hero4.png"
            width={335}
            height={195}
            className="cursor-pointer mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
