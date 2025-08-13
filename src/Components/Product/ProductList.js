import TShirt from '../../assets/tshirt.webp'
import BabyShirt from '../../assets/baby-shirt.webp'
import Dress from '../../assets/dress.webp'
import Hoodie from '../../assets/hoodie.webp'
import Jeans from '../../assets/jeans.webp'
import LeatherJacket from '../../assets/leather-jacket.webp'
import Shirtdress from '../../assets/shirt-dress.webp'
import Shirt from '../../assets/shirt.webp'
import Skater from '../../assets/skater.webp'
import Skirt from '../../assets/skirt.webp'

import Sleepsuit from '../../assets/sleepsuit.webp'
import Sweater from '../../assets/sweater.webp'


const Product = [
  {
    id: 1,
    name: "Sports TShirt",
    image: TShirt,
    price: 25.99,
    oldPrice: 35.99,
    onSale: true,
    NewArrival: false,
    category: 'Men',
  },
  {
    id: 2,
    name: "Baby Shirt",
    image: BabyShirt,
    price: 18.49,
    oldPrice: 24.99,
    onSale: false,
    NewArrival: false,
    category: 'Kids',
  },
  {
    id: 3,
    name: "Casual Dress",
    image: Dress,
    price: 42.99,
    oldPrice: 59.99,
    onSale: true,
    NewArrival: false,
    category: 'Women',
  },
  {
    id: 4,
    name: "Winter Hoodie",
    image: Hoodie,
    price: 39.99,
    oldPrice: 49.99,
    onSale: false,
    NewArrival: true,
    category: 'Men',
  },
  {
    id: 5,
    name: "Classic Jeans",
    image: Jeans,
    price: 34.99,
    oldPrice: 44.99,
    onSale: false,
    NewArrival: true,
    category: 'Men',
  },
  {
    id: 6,
    name: "Leather Jacket",
    image: LeatherJacket,
    price: 79.99,
    oldPrice: 99.99,
    onSale: false,
    NewArrival: false,
    category: 'Men',
  },
  {
    id: 7,
    name: "Shirt Dress",
    image: Shirtdress,
    price: 45.99,
    oldPrice: 60.99,
    onSale: false,
    NewArrival: true,
    category: 'Women',
  },
  {
    id: 8,
    name: "Formal Shirt",
    image: Shirt,
    price: 29.99,
    oldPrice: 39.99,
    onSale: true,
    NewArrival: false,
    category: 'Men',
  },
  {
    id: 9,
    name: "Skater Dress",
    image: Skater,
    price: 37.99,
    oldPrice: 49.99,
    onSale: true,
    NewArrival: false,
    category: 'Women',
  },
  {
    id: 10,
    name: "Baby Sleepsuit",
    image: Sleepsuit,
    price: 15.99,
    oldPrice: 19.99,
    onSale: true,
    NewArrival: false,
    category: 'Kids',
  },
  {
    id: 11,
    name: "Wool Sweater",
    image: Sweater,
    price: 32.99,
    oldPrice: 44.99,
    onSale: false,
    NewArrival: true,
    category: 'Men',
  },
  {
    id: 12,
    name: "Casual Skirt",
    image: Skirt,
    price: 28.99,
    oldPrice: 38.99,
    onSale: false,
    NewArrival: false,
    category: 'Women',
  },
];

export default Product