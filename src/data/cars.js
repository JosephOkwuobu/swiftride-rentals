import elantra from "../assets/elantra.jpg";
import sonata from "../assets/sonata.jpg";
import jeep from "../assets/jeep.jpg";

const cars = [
  {
    id: 1,
    name: "2013 Hyundai Elantra",
    year: 2013,
    color: "White",
    price: "$350 / Week",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    image: elantra,
    description:
      "Reliable and fuel-efficient sedan perfect for commuting and rideshare use.",
  },
  {
    id: 2,
    name: "2014 Jeep Cherokee",
    year: 2014,
    color: "Silver",
    price: "$350 / Week",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    image: jeep,
    description:
      "Spacious SUV ideal for family trips and business travel.",
  },
  {
    id: 3,
    name: "2015 Hyundai Sonata",
    year: 2015,
    color: "Blue",
    price: "$350 / Week",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    image: sonata,
    description:
      "Comfortable midsize sedan with smooth ride and great fuel economy.",
  },
];

export default cars;