function Footer() {
  const links = [
    "blogs",
    "Partner",
    "Recipes",
    "Privacy",
    "Franchise",
    "Bistro",
    "Terms",
    "Seller",
    "District",
    "FAQs",
    "Warehouse",
    "Blinkit Ambulance",
    "Security",
    "Deliver",
    "Contact",
    "Resources",
  ];
  return (
    <div>
        <p className="text-[18px] font-semibold">Useful Links</p>
      <div className="w-1/3 grid grid-cols-3 text-[#666]">

        {links.map((item, index) => {
          return <p>{item}</p>;
        })}
      </div>
      <div>
        <div className="flex">
            <p>Categories</p>
            <p className="text-[#0c831f]">see all</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
