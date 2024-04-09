let products = [
  {
    id: 1,
    badge: {
      title: "",
      bg: "",
    },
    image: "../assets/products/balancing-tone-laneige.jpg",
    name: "Balancing tone of Laneige",
    price: 98,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 3,
    category: 4,
  },
  {
    id: 2,
    badge: {
      title: "Sold",
      bg: "sold",
    },
    image: "../assets/products/body-lotion-necessaire.jpg",
    name: "Body lotion of Necessaire",
    price: 130,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 5,
    category: 7,
  },
  {
    id: 3,
    badge: {
      title: "New",
      bg: "new",
    },
    image: "../assets/products/body-oil-im-fabulous.jpg",
    name: "Body oil of I'm Fabulous",
    price: 105,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 4,
    category: 1,
  },
  {
    id: 4,
    badge: {
      title: "",
      bg: "",
    },
    image: "../assets/products/condition-mask-the-how-shop.jpg",
    name: "Condition mask of The how shop",
    price: 91,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 1,
    category: 3,
  },
  {
    id: 5,
    badge: {
      title: "Sale",
      bg: "sale",
    },
    image: "../assets/products/hydrating-toner-botanical-republic.jpg",
    name: "Hydrating toner of Botanical republic",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 0,
    category: 4,
  },

  {
    id: 6,
    badge: {
      title: "",
      bg: "",
    },
    image: "../assets/products/perfume-chanel-gabrielle.jpg",
    name: "Perfume of Chanel Gabrielle",
    price: 159,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 5,
    category: 5,
  },
  {
    id: 7,
    badge: {
      title: "Sale",
      bg: "sale",
    },
    image: "../assets/products/perfume-chanel-number-5.jpg",
    name: "Perfume of Chanel Number 5",
    price: 169,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 4,
    category: 5,
  },

  {
    id: 8,
    badge: {
      title: "",
      bg: "",
    },
    image: "../assets/products/perfume-ginger-white.jpg",
    name: "Perfume of Ginger White",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 3,
    category: 5,
  },

  {
    id: 9,
    badge: {
      title: "Sold",
      bg: "sold",
    },
    image: "../assets/products/perfume-leau-laurissi.jpg",
    name: "Perfume of L'eau Laurissi",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 5,
    category: 5,
  },

  {
    id: 10,
    badge: {
      title: "New",
      bg: "new",
    },
    image: "../assets/products/perfume-miss-dior.jpg",
    name: "Perfume of Miss Dior",
    price: 88,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 5,
    category: 5,
  },
  {
    id: 11,
    badge: {
      title: "Sale",
      bg: "sale",
    },
    image: "../assets/products/perfume-narciso-rodriguez.jpg",
    name: "Perfume of Narciso Rodriguez",
    price: 75,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 0,
    category: 5,
  },

  {
    id: 12,
    badge: {
      title: "New",
      bg: "new",
    },
    image: "../assets/products/pet-cbd-oil-not-pot.jpg",
    name: "Pet CBD oil of NOT POT",
    price: 200,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 2,
    category: 2,
  },
  {
    id: 13,
    badge: {
      title: "Sale",
      bg: "sale",
    },
    image: "../assets/products/tone-up-2ndesign.jpg",
    name: "Tone up of 2ndesign",
    price: 210,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 5,
    category: 4,
  },
  {
    id: 14,
    badge: {
      title: "Sale",
      bg: "sale",
    },
    image: "../assets/products/treatment-cbd-nora.jpg",
    name: "Treatment CBD of Nora",
    price: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 4,
    category: 2,
  },
  {
    id: 15,
    badge: {
      title: "Sale",
      bg: "sale",
    },
    image: "../assets/products/vitamin-sanitizer-marshol.jpg",
    name: "Vitamin Sanitizer of Marshol",
    price: 77,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 5,
    category: 6,
  },
];

let categories = [
  {
    id: 1,
    image: "../assets/category/body-oil-im-fabulous.jpg",
    section: "Body & Face Oils",
    name: "Body oils",
  },
  {
    id: 2,
    image: "../assets/category/pet-cbd-oil-not-pot.jpg",
    name: "Pet CBD oils",
    section: "Body & Face Oils",
  },
  {
    id: 3,
    name: "Condition masks",
    image: "../assets/category/condition-mask-the-how-shop.jpg",
    section: "Hair & Deep Clean",
  },
  {
    id: 4,
    image: "../assets/category/hydrating-toner-botanical-republic.jpg",
    name: "Toners",
    section: "Body & Face Toners",
  },
  {
    id: 5,
    image: "../assets/category/perfume-chanel-gabrielle.jpg",
    name: "Perfumes",
    section: "Perfumes & Girls",
  },
  {
    id: 6,
    image: "../assets/category/vitamin-sanitizer-marshol.jpg",
    name: "Vitamin sanitizers",
    section: "Body & Deep Clean",
  },
  {
    id: 7,
    image: "../assets/category/shower-gel-because-its-you.jpg",
    name: "Shower gels",
    section: "Body & Deep Clean",
  },
];
