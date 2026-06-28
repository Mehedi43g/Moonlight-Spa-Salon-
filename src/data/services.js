import { MdOutlineSpa } from "react-icons/md";

import {
  FaHandSparkles,
  FaPersonWalking,
} from "react-icons/fa6";

import {
  GiLotusFlower,
  GiHealing,
} from "react-icons/gi";

const services = [
  {
    id: 1,

    slug: "hot-oil-massage",

    title: "Hot Oil Massage",

    category: "Massage",

    badge: "Most Booked",

    featured: true,

    featuredOrder: 1,

    premium: false,

    vip: false,

    icon: MdOutlineSpa,

    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",

    shortDescription:
      "A soothing warm oil therapy designed to relieve stress, improve circulation and deliver deep muscle relaxation.",

    startingPrice: 6500,

    duration: [60, 90, 120],

    pricing: {
      60: 6500,
      90: 9000,
      120: 11500,
    },

    seoTitle: "Hot Oil Massage | Moonlight Spa",

    seoDescription:
      "Professional Hot Oil Massage with luxurious spa therapy for complete relaxation and stress relief.",
  },

  {
    id: 2,

    slug: "b2b-massage",

    title: "B2B Massage",

    category: "Massage",

    badge: "Premium Choice",

    featured: true,

    featuredOrder: 2,

    premium: true,

    vip: false,

    icon: FaHandSparkles,

    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",

    shortDescription:
      "Luxury full body massage performed using advanced techniques for exceptional comfort and complete relaxation.",

    startingPrice: 7500,

    duration: [60, 90, 120],

    pricing: {
      60: 7500,
      90: 10000,
      120: 12500,
    },

    seoTitle: "B2B Massage | Moonlight Spa",

    seoDescription:
      "Premium B2B Massage therapy performed by experienced therapists for maximum relaxation.",
  },

  {
    id: 3,

    slug: "four-hand-massage",

    title: "Four Hand Massage",

    category: "Massage",

    badge: "Elite Luxury",

    featured: true,

    featuredOrder: 3,

    premium: true,

    vip: true,

    icon: GiHealing,

    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",

    shortDescription:
      "Two expert therapists perform synchronized massage techniques to create an unforgettable luxury wellness experience.",

    startingPrice: 10500,

    duration: [60, 90, 120],

    pricing: {
      60: 10500,
      90: 14500,
      120: 20500,
    },

    seoTitle: "Four Hand Massage | Moonlight Spa",

    seoDescription:
      "Elite Four Hand Massage for guests seeking a premium synchronized luxury spa experience.",
  },

  {
    id: 4,

    slug: "six-hand-massage",

    title: "Six Hand Massage",

    category: "Massage",

    badge: "Royal Signature",

    featured: true,

    featuredOrder: 4,

    premium: true,

    vip: true,

    icon: GiLotusFlower,

    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",

    shortDescription:
      "Our most exclusive VIP treatment where three professional therapists work together to deliver a truly royal spa journey.",

    startingPrice: 13000,

    duration: [60, 90, 120],

    pricing: {
      60: 13000,
      90: 18000,
      120: 24000,
    },

    seoTitle: "Six Hand Massage | Moonlight Spa",

    seoDescription:
      "Experience our Royal Signature Six Hand Massage with three synchronized therapists for the ultimate VIP relaxation.",
  },

  {
    id: 5,

    slug: "dry-massage",

    title: "Dry Massage",

    category: "Massage",

    badge: "Best Value",

    featured: false,

    featuredOrder: 5,

    premium: false,

    vip: false,

    icon: FaPersonWalking,

    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",

    shortDescription:
      "Traditional dry massage therapy that eases muscle stiffness, improves flexibility and restores natural body balance.",

    startingPrice: 5500,

    duration: [60, 90, 120],

    pricing: {
      60: 5500,
      90: 8500,
      120: 10500,
    },

    seoTitle: "Dry Massage | Moonlight Spa",

    seoDescription:
      "Affordable professional Dry Massage designed to improve flexibility and reduce muscle tension.",
  },
];

export default services;