import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import sp3 from "../assets/sp3.jpg";
import sp4 from "../assets/sp4.jpg";

const packages = [
  {
    id: 1,
    slug: "relax-escape-package",
    title: "Relax Escape Package",
    badge: "Most Popular",
    description: "Enjoy a luxurious spa experience including a relaxing massage, herbal steam, and calming aroma oil massage session.",
    price: "৳2,999",
    duration: "90 Minutes",
    image: sp1,
    services: [
      "Hot Oil Massage (60 min)",
      "Aroma Oil Massage (30 min)",
      "Herbal Steam Bath",
      "Refreshing Welcome Drink"
    ],
    benefits: [
      "Relieves daily stress and anxiety",
      "Relaxes tight muscle groups",
      "Improves blood circulation"
    ],
    featured: false
  },
  {
    id: 2,
    slug: "couple-harmony-package",
    title: "Couple Harmony Package",
    badge: "Luxury Choice",
    description: "A romantic spa session for couples featuring full body massage, aroma oil massage, and premium refreshments in a private suite.",
    price: "৳5,999",
    duration: "120 Minutes",
    image: sp2,
    services: [
      "Couple Massage (90 min)",
      "Aroma Oil Massage Session",
      "Private VIP Couple Room",
      "Sparkling Drinks & Fruit Platter"
    ],
    benefits: [
      "Private VIP suite environment",
      "Relaxing couple bonding experience",
      "Full body muscular relief"
    ],
    featured: true
  },
  {
    id: 3,
    slug: "royal-wellness-package",
    title: "Royal Wellness Package",
    badge: "Premium Care",
    description: "Complete wellness treatment with hot oil massage, full body massage, and foot massage for total relaxation and skin wellness.",
    price: "৳4,499",
    duration: "150 Minutes",
    image: sp3,
    services: [
      "Hot Oil Massage (90 min)",
      "Full Body Massage (60 min)",
      "Foot Massage (30 min)",
      "Complimentary Relaxation Tea"
    ],
    benefits: [
      "Full body rejuvenation",
      "Nourishing full body muscle relief and wellness",
      "Deep stress and tension release"
    ],
    featured: false
  },
  {
    id: 4,
    slug: "ultimate-spa-retreat",
    title: "Ultimate Spa Retreat",
    badge: "Best Value",
    description: "The complete luxury spa journey including deep tissue massage, full body massage, steam bath, and foot massage treatment.",
    price: "৳6,999",
    duration: "180 Minutes",
    image: sp4,
    services: [
      "Deep Tissue Massage (90 min)",
      "Full Body Massage (60 min)",
      "Herbal Steam & Sauna Access",
      "Foot Massage Session (30 min)"
    ],
    benefits: [
      "Three hours of ultimate luxury and self-care",
      "Comprehensive head-to-toe wellness",
      "Boosts energy levels and immune support"
    ],
    featured: false
  }
];

export default packages;