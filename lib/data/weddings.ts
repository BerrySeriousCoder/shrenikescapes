export type Wedding = {
  id: string;
  title: string;
  region: "domestic" | "international";
  image: string;
  duration: string;
  description: string;
  tags: string[];
};

export const weddings: Wedding[] = [
  // Domestic Weddings
  {
    id: "corbett-wedding",
    title: "Corbett",
    region: "domestic",
    image: "/images/itineraries/wedding/Corbett/corbett.jpg",
    duration: "4 Days",
    description: "A wild and adventurous wedding experience nestled in the beauty of nature.",
    tags: ["Nature", "Wild"]
  },
  {
    id: "goa-wedding",
    title: "Goa",
    region: "domestic",
    image: "/images/itineraries/wedding/Goa/goa.jpg",
    duration: "4 Days",
    description: "A vibrant blend of sun, sand, and Portuguese heritage for a truly unforgettable tropical wedding.",
    tags: ["Tropical", "Party"]
  },
  {
    id: "jaipur-wedding",
    title: "Jaipur",
    region: "domestic",
    image: "/images/itineraries/wedding/Jaipur/jaipur.jpg",
    duration: "4 Days",
    description: "Exchange vows like royalty amidst the majestic palaces and historic forts of the Pink City.",
    tags: ["Royal", "Heritage"]
  },
  {
    id: "kerala-wedding",
    title: "Kerala",
    region: "domestic",
    image: "/images/itineraries/wedding/Kerala/kerala.jpg",
    duration: "4 Days",
    description: "A tranquil backwater celebration surrounded by lush greenery and traditional luxury.",
    tags: ["Serene", "Backwaters"]
  },
  {
    id: "manali-wedding",
    title: "Manali",
    region: "domestic",
    image: "/images/itineraries/wedding/Manali/manali.jpg",
    duration: "4 Days",
    description: "A breathtaking mountain wedding wrapped in the serenity of the Himalayas.",
    tags: ["Mountains", "Serene"]
  },
  {
    id: "rishikesh-wedding",
    title: "Rishikesh",
    region: "domestic",
    image: "/images/itineraries/wedding/Rishikesh/rishikesh.jpg",
    duration: "4 Days",
    description: "A spiritual and riverside celebration with stunning views of the Ganges.",
    tags: ["Spiritual", "Riverside"]
  },
  {
    id: "triyuginarayan-wedding",
    title: "Triyuginarayan",
    region: "domestic",
    image: "/images/itineraries/wedding/Triyuginarayan/triyuginarayan.jpg",
    duration: "4 Days",
    description: "A divine and purely spiritual union at a legendary Himalayan temple.",
    tags: ["Divine", "Himalayas"]
  },
  {
    id: "udaipur-wedding",
    title: "Udaipur",
    region: "domestic",
    image: "/images/itineraries/wedding/Udaipur/udaipur.jpg",
    duration: "4 Days",
    description: "The City of Lakes provides a deeply romantic, floating-palace setting for your vows.",
    tags: ["Romantic", "Lakeside"]
  },

  // International Weddings
  {
    id: "bali-wedding",
    title: "Bali",
    region: "international",
    image: "/images/itineraries/wedding/Bali/bali.jpg",
    duration: "5 Days",
    description: "A mystical island paradise offering cliffside sunsets, spiritual ambiance, and tropical luxury.",
    tags: ["Exotic", "Cliffside"]
  },
  {
    id: "dubai-wedding",
    title: "Dubai",
    region: "international",
    image: "/images/itineraries/wedding/Dubai/dubai.jpg",
    duration: "4 Days",
    description: "Ultra-modern luxury and desert romance combine in this spectacular global hub.",
    tags: ["Luxury", "Modern"]
  },
  {
    id: "italy-wedding",
    title: "Italy",
    region: "international",
    image: "/images/itineraries/wedding/Italy/italy.jpg",
    duration: "6 Days",
    description: "Classic romance, vineyards, and historic villas overlooking the breathtaking Amalfi Coast or Lake Como.",
    tags: ["Classic", "Vineyard"]
  },
  {
    id: "mauritius-wedding",
    title: "Mauritius",
    region: "international",
    image: "/images/itineraries/wedding/Mauritius/mauritius.jpg",
    duration: "6 Days",
    description: "Crystal clear waters and white sandy beaches host your spectacular tropical celebration.",
    tags: ["Island", "Paradise"]
  },
  {
    id: "phuket-wedding",
    title: "Phuket",
    region: "international",
    image: "/images/itineraries/wedding/Phuket/phuket.jpg",
    duration: "4 Days",
    description: "A tropical paradise featuring beachfront luxury and stunning island excursions.",
    tags: ["Beach", "Tropical"]
  },
  {
    id: "srilanka-wedding",
    title: "Sri Lanka",
    region: "international",
    image: "/images/itineraries/wedding/SriLanka/sri-lanka.jpg",
    duration: "4 Days",
    description: "A cultural and scenic island experience blending tradition and tropical luxury.",
    tags: ["Culture", "Island"]
  },
  {
    id: "vietnam-wedding",
    title: "Vietnam",
    region: "international",
    image: "/images/itineraries/wedding/Vietnam/vietnam.jpg",
    duration: "4 Days",
    description: "Exotic coastal charm mixed with rich heritage for a unique wedding adventure.",
    tags: ["Exotic", "Heritage"]
  },
  {
    id: "georgia-wedding",
    title: "Georgia",
    region: "international",
    image: "/images/itineraries/wedding/Georgia/day-1.jpg",
    duration: "4 Days",
    description: "A scenic celebration blending historic charm, vineyards, and unforgettable landscapes.",
    tags: ["Historic", "Vineyard"]
  }
];
