import Image from "next/image";

function Category() {
  const categories = [
    { name: "Atta", image: "/images/category/atta.png" },
    { name: "Baby", image: "/images/category/baby.png" },
    { name: "Bakery", image: "/images/category/bakery.png" },
    { name: "Breakfast", image: "/images/category/breakfast.png" },
    { name: "Chicken", image: "/images/category/chicken.png" },
    { name: "Cleaning", image: "/images/category/cleaning.png" },
    { name: "Dairy", image: "/images/category/dairy.png" },
    { name: "Drinks", image: "/images/category/drinks.png" },
    { name: "Fruits", image: "/images/category/fruits.png" },
    { name: "Home", image: "/images/category/home.png" },
    { name: "Masala", image: "/images/category/masala.png" },
    { name: "Organic", image: "/images/category/organic.png" },
    { name: "Paan", image: "/images/category/paan.png" },
    { name: "Personal", image: "/images/category/personal.png" },
    { name: "Pet", image: "/images/category/pet.png" },
    { name: "Pharma", image: "/images/category/pharma.png" },
    { name: "Sauces", image: "/images/category/sauces.png" },
    { name: "Snacks", image: "/images/category/snacks.png" },
    { name: "Sweet", image: "/images/category/sweet.png" },
    { name: "tea", image: "/images/category/tea.png" },
  ];

  return (
    <div className="grid grid-cols-10 px-9 mt-5">
      {categories.map((item, index) => {
        return <Image key={index} src={item.image} width={109} height={160} alt="name"/>;
      })}
    </div>
  );
}

export default Category;
