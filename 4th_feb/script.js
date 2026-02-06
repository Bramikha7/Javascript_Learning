e_commerce = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://m.media-amazon.com/images/I/610ub5kytVL._AC_UF1000,1000_QL80_.jpg",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    category: "Wearables",
    rating: 4.3,
    image:
      "https://zebronics.com/cdn/shop/products/zeb-iconic-lite-pic3.jpg?v=1672482509&width=1000",
    description: "Track fitness, heart rate, and notifications on the go.",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 1499,
    category: "Accessories",
    rating: 4.2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NMHGbeEyb-0QUyQscNE5tU3ICAkfHL7wsw&s",
    description: "Water-resistant backpack with padded laptop compartment.",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1999,
    category: "Electronics",
    rating: 4.4,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/4/WQ/XP/UP/49331768/tg113-waterproof-portable-bluetooth-speaker-with-powerful-sound-enhanced-bass.jpg",
    description: "Portable speaker with deep bass and long battery life.",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 3499,
    category: "Footwear",
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIxGE9s8f65fL8tYB8-jZJ94eC7HXXtcOVg&s",
    description: "Lightweight shoes designed for comfort and performance.",
  },
];
const prod = document.getElementById("product");
console.log(prod);
product.style.display="flex"
product.style.gap="30px"
product.style.margin="40px"
product.style.flexWrap="wrap"
e_commerce.forEach(myProduct);
function myProduct(phone) {  
  const card = document.createElement("div");
  const img = document.createElement("img");
  img.src = phone.image;
  const phone_name = document.createElement("div");
  phone_name.innerText = phone.name;
  const phone_price = document.createElement("p");
  phone_price.innerText = phone.price;
  const items=document.createElement("p")
  items.innerText=phone.category
  const rate = document.createElement("p");
  rate.innerText = phone.rating;
  const description = document.createElement("p");
  description.innerText = phone.description;
  const nameLine = document.createElement("div");
  nameLine.appendChild(phone_price);
  nameLine.appendChild(rate);
  nameLine.classList.add("line");
  const btn=document.createElement("button")
  btn.innerText="View"
  btn.style.border="1px solid black"
  btn.style.backgroundColor="blue"
  btn.style.color="white"
  btn.style.height="40px"
  btn.style.borderRadius="8px"
  card.style.display="flex"
  card.style.flexDirection="column"
  card.style.gap="30px"
  card.style.width="400px"
  card.style.justifyContent="space-between"
  card.style.border="1px solid black"
  card.style.padding="10px"
  nameLine.style.display="flex"
  nameLine.style.justifyContent="space-between"
  nameLine.style.alignItems="center"
  card.appendChild(img);
  card.appendChild(nameLine);
  card.appendChild(phone_name);
  card.appendChild(description);
  card.classList.add("card");
  card.appendChild(btn)
  prod.appendChild(card);
}
