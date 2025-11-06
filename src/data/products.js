// src/data/products.js
const products = [
  {
    id: 1,
    seriesName: "Luxury Faucets",
    seriesImage: "/images/faucet-series.jpg",
    items: [
      {
        id: "LXF-101",
        name: "Classic Faucet",
        seriesNo: "101",
        description: "Elegant chrome finish faucet for bathrooms",
        image: "/images/faucet1.jpg",
      },
      {
        id: "LXF-102",
        name: "Modern Faucet",
        seriesNo: "102",
        description: "Stylish design with water saving feature",
        image: "/images/faucet2.jpg",
      },
    ],
  },
  {
    id: 2,
    seriesName: "Shower Collection",
    seriesImage: "/images/shower-series.jpg",
    items: [
      {
        id: "SH-201",
        name: "Rain Shower",
        seriesNo: "201",
        description: "Luxury rain shower experience",
        image: "/images/shower1.jpg",
      },
    ],
  },
];

export default products;
