import toteBag from "../assets/tote-bag.jpg";
import bucketHat from "../assets/bucket-hat.jpg";
import cropTop from "../assets/crop-top.jpg";
import babySet from "../assets/baby-set.jpg";
import beanie from "../assets/beanie.jpg";
import shoulderBag from "../assets/shoulder-bag.jpg";
import cardigan from "../assets/cardigan.jpg";
import babyBooties from "../assets/baby-booties.jpg";

/**
 * Product catalogue for Kellyposh Crochet.
 * Edit this file to add, remove or update items shown in the Shop section.
 */
export const products = [
  {
    id: 1,
    name: "Cream Crochet Tote Bag",
    price: 18000,
    rating: 5,
    category: "Bags",
    image: toteBag,
  },
  {
    id: 2,
    name: "Soft Bucket Hat",
    price: 7500,
    rating: 4.5,
    category: "Beanies",
    image: bucketHat,
  },
  {
    id: 3,
    name: "Peach Flower Crop Top",
    price: 15000,
    rating: 5,
    category: "Tops",
    image: cropTop,
  },
  {
    id: 4,
    name: "Newborn Baby Set",
    price: 22000,
    rating: 5,
    category: "Baby Sets",
    image: babySet,
  },
  {
    id: 5,
    name: "Chunky Winter Beanie",
    price: 6000,
    rating: 4.5,
    category: "Beanies",
    image: beanie,
  },
  {
    id: 6,
    name: "Wooden Handle Shoulder Bag",
    price: 12500,
    rating: 4.5,
    category: "Bags",
    image: shoulderBag,
  },
  {
    id: 7,
    name: "Oversized Lace Cardigan",
    price: 28000,
    rating: 5,
    category: "Tops",
    image: cardigan,
  },
  {
    id: 8,
    name: "Tiny Baby Booties",
    price: 5500,
    rating: 5,
    category: "Baby Sets",
    image: babyBooties,
  },
];

export const categories = [
  { name: "Bags", image: toteBag },
  { name: "Tops", image: cropTop },
  { name: "Beanies", image: beanie },
  { name: "Baby Sets", image: babySet },
];

export const formatNaira = (value) => `\u20A6${value.toLocaleString("en-NG")}`;
