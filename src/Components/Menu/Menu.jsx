import React, { useState } from "react";

function Menu() {
  const [searchedItems, setSearchedItems] = useState("");
  const [filter,setFilter]=useState('all')
  const dishes = [
    {
      id: 1,
      name: "Paneer Tikka 🧀",
      img: "/Images/PaneerTikka.jpg",
      price: 260,
      food: "veg",
    },
    {
      id: 2,
      name: "Haka Noodles 🍜",
      img: "Images/Noodels.jpg",
      price: 150,
      food: "veg",
    },
    {
      id: 3,
      name: "Italian Pizza 🍕",
      img: "Images/Pizza.jpg",
      price: 150,
      food: "veg",
    },
    {
      id: 4,
      name: "Chinese Momo 🥟",
      img: "Images/Momo.jpg",
      price: 100,
      food: "veg",
    },
    {
      id: 5,
      name: "Kolkata Biryani",
      img: "Images/Biryani.jpg",
      price: 300,
      food: "non-veg",
    },
    {
      id: 6,
      name: "Burger",
      img: "Images/Burger.jpg",
      price: 50,
      food: "non-veg",
    },
    {
      id: 7,
      name: "Dosa",
      img: "Images/Dosa.jpg",
      price: 80,
      food: "veg",
    },
  ];

  //Filter dishes as per user search and filter type
  // const filterDishes =
  //   searchedItems === ""
  //     ? dishes
  //     : dishes.filter((dish) => {
  //         const dishName = dish.name.toLowerCase();
  //         const searhedDish = searchedItems.toLowerCase();

  //         if (dishName.indexOf(searchedItems) !== -1) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       });
  const filterDishes=dishes.filter((dish)=>{
    const searchMatches=dish.name.toLowerCase().includes(searchedItems.toLowerCase());
    const filterMatches=filter==="all"|| dish.food===filter;
    return searchMatches && filterMatches;
  })

  const handleSearch = () => {
    searchedItems;
  };
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/Images/menu_bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-4 rounded-md text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Our items</h1>
        </div>
      </header>

      <section className="mx-auto px-4 sm:px-8 py-8">
        {/* Search Box */}
        <div className="mb-4 flex items-center border border-orange-500 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for a dish.."
            value={searchedItems}
            onChange={(e) => setSearchedItems(e.target.value)}
            className="w-full p-3  outline-none"
          />
          {/* search icon */}
          <button
            onClick={handleSearch}
            className=" p-1 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </button>
        </div>
        {/* Filter selection */}
        <div className="mb-4 flex justify-between md:justify-center items-center">
          <span className="font-medium text-gray-700">
            Filter By:
          </span>
          <select 
          className="border border-gray-300 rounded-md p-2" 
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-veg</option>
          </select>
        </div>
        {/* Menu's Section */}
        <div className="space-y-4 md:grid  md:grid-cols-2 lg:grid-cols-3 gap-6 md:space-y-0">
          {filterDishes.map((dish) => (
            <div
              key={dish.id}
              className=" flex flex-row md:flex-col  bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className=" w-32 md:w-full md:h-60 h-45 object-cover"
              />

              {/* Content of dish card */}

              <div className="p-4 flex  w-40 flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{dish.food}</p>
                  <p className="text-sm md:text-lg font-semibold text-orange-500">
                    {"\u20B9"}
                    {dish.price}.00
                  </p>
                </div>
                <button className="mt-4 w-full bg-orange-500 text-white py-1 text-xs md:text-[1rem] rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
