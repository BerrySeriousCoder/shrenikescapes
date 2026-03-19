export type Tour = {
  id: string;
  title: string;
  region: "domestic" | "international";
  image: string;
  duration: string;
  description: string;
  tags: string[];
};

export const tours: Tour[] = [
  // Domestic
  {
    id: "jaipur",
    title: "Jaipur",
    region: "domestic",
    image: "/images/itineraries/tour/Jaipur/jaipur.jpg",
    duration: "3 Days",
    description: "Experience the royal heritage, majestic forts, and vibrant culture of the Pink City.",
    tags: ["Heritage", "Culture"]
  },
  {
    id: "kerala",
    title: "Kerala",
    region: "domestic",
    image: "/images/itineraries/tour/Kerala/kerala.jpg",
    duration: "7 Days",
    description: "Relax in the serene backwaters, beautiful beaches, and lush tea gardens of God's Own Country.",
    tags: ["Nature", "Relaxation"]
  },
  {
    id: "ladakh",
    title: "Ladakh",
    region: "domestic",
    image: "/images/itineraries/tour/Ladakh/ladakh.jpg",
    duration: "8 Days",
    description: "Embark on a thrilling adventure through high-altitude passes, ancient monasteries, and stunning lakes.",
    tags: ["Adventure", "Mountains"]
  },
  {
    id: "meghalaya",
    title: "Meghalaya",
    region: "domestic",
    image: "/images/itineraries/tour/Meghalaya/meghalaya.jpg",
    duration: "6 Days",
    description: "Discover the abode of clouds, living root bridges, and mesmerizing waterfalls.",
    tags: ["Nature", "Adventure"]
  },
  {
    id: "rann-of-kutch",
    title: "Rann of Kutch",
    region: "domestic",
    image: "/images/itineraries/tour/Rann/rann-of-kutch.jpg",
    duration: "5 Days",
    description: "Witness the surreal white salt desert and vibrant local culture of Gujarat.",
    tags: ["Culture", "Landscape"]
  },
  // International
  {
    id: "azerbaijan",
    title: "Azerbaijan",
    region: "international",
    image: "/images/itineraries/tour/Azerbaijan/azerbaijan.jpg",
    duration: "6 Days",
    description: "Explore the land of fire, blending ancient history with futuristic architecture.",
    tags: ["Culture", "Cityscape"]
  },
  {
    id: "egypt",
    title: "Egypt",
    region: "international",
    image: "/images/itineraries/tour/Egypt/Egypt.jpg",
    duration: "8 Days",
    description: "Unravel the mysteries of the pharaohs, the Great Pyramids, and the mighty Nile.",
    tags: ["History", "Wonder"]
  },
  {
    id: "fiji",
    title: "Fiji",
    region: "international",
    image: "/images/itineraries/tour/Fiji/fiji.jpg",
    duration: "7 Days",
    description: "A tropical paradise featuring pristine beaches, vibrant coral reefs, and warm hospitality.",
    tags: ["Beach", "Relaxation"]
  },
  {
    id: "greece",
    title: "Greece",
    region: "international",
    image: "/images/itineraries/tour/Greece/greece.jpg",
    duration: "10 Days",
    description: "Sail through the iconic whitewashed islands and deep blue waters of the Aegean.",
    tags: ["Romance", "History"]
  },
  {
    id: "japan",
    title: "Japan",
    region: "international",
    image: "/images/itineraries/tour/Japan/japan.jpg",
    duration: "10 Days",
    description: "A fascinating blend of ultra-modern cityscapes, timeless traditions, and serene nature.",
    tags: ["Culture", "Tech"]
  },
  {
    id: "norway",
    title: "Norway",
    region: "international",
    image: "/images/itineraries/tour/Norway/norway.jpg",
    duration: "10 Days",
    description: "Chase the Northern Lights and sail through awe-inspiring glacial fjords.",
    tags: ["Arctic", "Nature"]
  },
  {
    id: "peru",
    title: "Peru",
    region: "international",
    image: "/images/itineraries/tour/Peru/peru.jpg",
    duration: "10 Days",
    description: "Trek the Andes and uncover the ancient secrets of Machu Picchu and the Incas.",
    tags: ["Adventure", "History"]
  },
  {
    id: "phuket",
    title: "Phuket",
    region: "international",
    image: "/images/itineraries/tour/Phuket/phuket.jpg",
    duration: "5 Days",
    description: "Enjoy vibrant nightlife, stunning islands, and beautiful beaches in Thailand.",
    tags: ["Beach", "Nightlife"]
  },
  {
    id: "turkey",
    title: "Turkey",
    region: "international",
    image: "/images/itineraries/tour/Turkey/turkey.jpg",
    duration: "10 Days",
    description: "Discover the crossroads of East and West, from Istanbul's bazaars to Cappadocia's balloons.",
    tags: ["Culture", "Landscape"]
  }
];
