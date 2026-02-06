const Products = [
    {
        id: 'S01',
        name: 'ErgoChair Pro',
        category: 'Furniture',
        price: 299,
        stock: 12,
        rating: 4.8,
        tags: ['office', 'ergonomic']
    },
    {
        id: 'E05',
        name: 'UltraWide Monitor',
        category: 'Electronics',
        price: 450,
        stock: 5,
        rating: 4.5,
        tags: ['tech', 'gaming', 'work']
    },
    {
        id: 'K12',
        name: 'AirFryer 3000',
        category: 'Kitchen',
        price: 120,
        stock: 0,
        rating: 4.2,
        tags: ['home', 'cooking']
    },
    {
        id: 'E09',
        name: 'Noise-Canceling Buds',
        category: 'Electronics',
        price: 199,
        stock: 25,
        rating: 4.7,
        tags: ['tech', 'music', 'travel']
    },
    {
        id: 'S15',
        name: 'Standing Desk',
        category: 'Furniture',
        price: 550,
        stock: 8,
        rating: 4.9,
        tags: ['office', 'work']
    },
    {
        id: 'K02',
        name: 'Espresso Machine',
        category: 'Kitchen',
        price: 850,
        stock: 3,
        rating: 4.6,
        tags: ['home', 'coffee']
    },
    {
        id: 'E11',
        name: 'USB-C Hub',
        category: 'Electronics',
        price: 45,
        stock: 50,
        rating: 4.0,
        tags: ['tech', 'accessory']
    }
];
// - Create an array of products that have a stock of 0 (for the warehouse team).

console.log(Products.filter((new_stock)=>{
    return new_stock.stock===0;
}))
// - Find all products in the "Furniture" category that are priced above $300.

console.log(Products.filter((new_stock)=>{
    return new_stock.category=="Furniture" && new_stock.price>300
}))
// - Create an array of strings that only contains the product names and their prices formatted as: `ErgoChair Pro` - `$299`.
 let productNamePrice=Products.map((product_name)=>{
    return `${product_name.name} -${product_name.price}`
})
console.log(productNamePrice)
// - Create an array containing only the tags array for each product, but convert all tags to UPPERCASE.
let each_product=Products.map((product_name => product_name.tags.map(tag => tag.toUpperCase())))
console.log(each_product)
// - Calculate the total dollar value of the entire warehouse `(sum of price * stock for all items)`
let each_products=Products.reduce((product_n,p)=>product_n=p.price*p.stock
    )
console.log(each_products)
// - Filter for products that include the tag "work"

// - Reduce the result to find the Average Price of these specific "work" items.

