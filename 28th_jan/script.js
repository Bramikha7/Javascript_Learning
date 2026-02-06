var coordinates = [34.0522, -118.2437, 89];
let [lat, lon, alt] = coordinates;
console.log(lat, lon, alt);

var user = {
  id: 101,
  profile: {
    username: "coder_99",
    avatar: "image.png",
  },
};
let { id, profile } = user;
let { username, avatar } = profile;
console.log(username, avatar);

const library = [
  { title: "The Hobbit", author: "J.R.R.Tolkien" },
  { title: "1984", author: "George Orwell" },
];
for (let book of library) {
  let { title, author } = book;
  console.log(title, author);
}

const account={
    ID:"USR-9921",
    username:"shutter_bug",
    email:"bug@example.com",
    joined:"2023-01-01"
}
let {ID,...public_info}=account
console.log(id,public_info)