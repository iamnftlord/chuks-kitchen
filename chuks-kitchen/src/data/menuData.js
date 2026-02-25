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
  { id: 'popular',            title: 'Popular' },
  { id: 'jollof-entrees',    title: 'Jollof Rice & Entrees' },
  { id: 'swallow-soups',      title: 'Swallow & Soups' },
  { id: 'grills-sides',       title: 'Grills & sides' },
  { id: 'beverages',          title: 'Beverages' },
  { id: 'desserts',           title: 'Desserts' },
];

export const chefSpecials = [
  // Popular
  {
    id: 'p-1',
    name: 'Jollof Rice with Fried Chicken',
    description: 'Our signature jollof rice, served with crispy fried chicken and plantain.',
    price: '₦2,800',
    image: sp2,
    category: 'popular'
  },
  {
    id: 'p-2',
    name: 'Eba & Egusi Soup (Goat Meat)',
    description: 'Hearty Egusi soup with tender goat meat, served with soft Eba.',
    price: '₦3,500',
    image: sp3,
    category: 'popular'
  },
  {
    id: 'p-3',
    name: 'Pounded Yam & Edikaikong',
    description: 'Traditional pounded yam with rich, leafy Edikaikong soup.',
    price: '₦3,500',
    image: cat2,
    category: 'popular'
  },
  {
    id: 'p-4',
    name: 'Peppered Snail',
    description: 'Spicy and savory peppered snail, perfect as a starter.',
    price: '₦3,500',
    image: sp1,
    category: 'popular'
  },
  {
    id: 'p-5',
    name: 'Grilled Tilapia Fish',
    description: 'Whole grilled tilapia seasoned with our special spices.',
    price: '₦4,500',
    image: sp5,
    category: 'popular'
  },
  {
    id: 'p-6',
    name: 'Jollof Rice with Fried Chicken',
    description: 'Our signature jollof rice, served with crispy fried chicken and plantain.',
    price: '₦2,800',
    image: sp2,
    category: 'popular'
  },

  // Jollof Rice & Entrees
  {
    id: 'j-1',
    name: 'Jollof Rice & Smoked Fish',
    description: 'Flavorful jollof rice served with perfectly smoked fish.',
    price: '₦3,500',
    image: sp4,
    category: 'jollof-entrees'
  },
  {
    id: 'j-2',
    name: 'Party Jollof Rice (Veg)',
    description: 'Vegetarian party jollof, full of rich flavors.',
    price: '₦3,000',
    image: sp2,
    category: 'jollof-entrees'
  },
  {
    id: 'j-3',
    name: 'Party Jollof Rice (Veg)',
    description: 'Vegetarian party jollof, full of rich flavors.',
    price: '₦3,000',
    image: sp2,
    category: 'jollof-entrees'
  },

  // Swallow & Soups
  {
    id: 's-1',
    name: 'Banga Soup & Starch',
    description: 'Classic meals served with banga (palm) and starch (puff-puff) soup.',
    price: '₦3,500',
    image: sp3,
    category: 'swallow-soups'
  },
  {
    id: 's-2',
    name: 'Fufu & Okra Soup (Fish)',
    description: 'Light fufu served with fresh okra soup and tilapia fish.',
    price: '₦3,500',
    image: sp6,
    category: 'swallow-soups'
  },
  {
    id: 's-3',
    name: 'Fufu & Okra Soup (Fish)',
    description: 'Light fufu served with fresh okra soup and tilapia fish.',
    price: '₦3,500',
    image: sp6,
    category: 'swallow-soups'
  },
];

