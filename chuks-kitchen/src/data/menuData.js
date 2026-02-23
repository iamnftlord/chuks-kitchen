import cat1 from '../assets/Property 1=Default.jpg';
import cat2 from '../assets/Property 1=Variant8.jpg';
import cat3 from '../assets/Property 1=Variant3.jpg';
import cat4 from '../assets/Sweet Treat.jpg';
import cat5 from '../assets/Variant2.jpg';
import cat6 from '../assets/Property 1=Variant3.jpg';

import sp1 from '../assets/image 7.jpg';
import sp2 from '../assets/image 8.jpg';
import sp3 from '../assets/image 9.jpg';
import sp4 from '../assets/image 12.jpg';
import sp5 from '../assets/Variant4.jpg';
import sp6 from '../assets/Variant5.jpg';

export const categories = [
  { id: 'jollof-delights',    title: 'Jollof Delights',    image: cat1 },
  { id: 'swallow-soups',      title: 'Swallow & Soups',    image: cat2 },
  { id: 'grills-bbq',         title: 'Grills & BBQ',       image: cat3 },
  { id: 'sweet-treats',       title: 'Sweet Treats',       image: cat4 },
  { id: 'local-drinks',       title: 'Local Drinks',       image: cat5 },
  { id: 'breakfast-special',  title: 'Breakfast Special',  image: cat6 },
];

export const chefSpecials = [
  {
    id: 'tilapia-pepper-soup',
    name: 'Spicy Tilapia Pepper Soup',
    description: 'Authentic spicy tilapia fish soup made with traditional herbs.',
    price: '₦5,500',
    image: sp1,
  },
  {
    id: 'jollof-fried-chicken',
    name: 'Jollof Rice & Fried Chicken',
    description: 'Signature smoky jollof rice paired with crispy fried chicken.',
    price: '₦4,800',
    image: sp2,
  },
  {
    id: 'egusi-pounded-yam',
    name: 'Egusi Soup & Pounded Yam',
    description: 'Rich Egusi soup served with fluffy pounded yam (Swallow).',
    price: '₦6,200',
    image: sp3,
  },
  {
    id: 'jollof-gizzard',
    name: 'Jollof Rice & Gizzard',
    description: 'Party style jollof rice served with peppered gizzards.',
    price: '₦4,500',
    image: sp4,
  },
  {
    id: 'suya-skewers',
    name: 'Suya Skewers Platter',
    description: 'Flame-grilled suya skewers seasoned with traditional yaji spice mix.',
    price: '₦3,800',
    image: sp5,
  },
  {
    id: 'ofe-onugbu',
    name: 'Ofe Onugbu & Fufu',
    description: 'Bitterleaf soup slow-cooked with assorted meat, served with fufu.',
    price: '₦5,900',
    image: sp6,
  },
];
