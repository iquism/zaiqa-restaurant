export type MenuCategory =
  | "BBQ & Grill"
  | "Karahi & Curries"
  | "Breads & Rice"
  | "Desserts"
  | "Drinks";

export interface Dish {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  spicyLevel: 0 | 1 | 2 | 3;
  veg: boolean;
  badge?: "Chef's Special" | "Most Loved";
}

export const CATEGORIES: ("All" | MenuCategory)[] = [
  "All",
  "BBQ & Grill",
  "Karahi & Curries",
  "Breads & Rice",
  "Desserts",
  "Drinks",
];

export const DISHES: Dish[] = [
  {
    id: "chicken-karahi",
    name: "Chicken Karahi",
    category: "Karahi & Curries",
    price: 950,
    description:
      "Our legend — free-range chicken wok-tossed in fresh tomato, ginger and green chillies, finished with desi ghee.",
    image: "/dishes/chicken-karahi.webp",
    spicyLevel: 3,
    veg: false,
    badge: "Chef's Special",
  },
  {
    id: "mutton-karahi",
    name: "Mutton Karahi",
    category: "Karahi & Curries",
    price: 1650,
    description:
      "Slow-cooked tender mutton in a smoky tomato masala, black pepper and a generous knob of white butter.",
    image: "/dishes/chicken-karahi.webp",
    spicyLevel: 3,
    veg: false,
  },
  {
    id: "seekh-kebab",
    name: "Seekh Kebab (4 pc)",
    category: "BBQ & Grill",
    price: 450,
    description:
      "Hand-minced beef kebabs with green chillies and coriander, grilled over real charcoal until the edges char.",
    image: "/dishes/seekh-kebab.webp",
    spicyLevel: 2,
    veg: false,
    badge: "Most Loved",
  },
  {
    id: "chicken-tikka",
    name: "Chicken Tikka",
    category: "BBQ & Grill",
    price: 380,
    description:
      "Overnight-marinated leg quarter in hung curd, Kashmiri chilli and ajwain — smoky, juicy, unmissable.",
    image: "/dishes/seekh-kebab.webp",
    spicyLevel: 2,
    veg: false,
  },
  {
    id: "bbq-platter",
    name: "Zaiqa BBQ Platter",
    category: "BBQ & Grill",
    price: 1899,
    description:
      "A feast for four — malai boti, tikka, seekh kebabs and wings on a brass tray with naan and three chutneys.",
    image: "/dishes/bbq-platter.webp",
    spicyLevel: 2,
    veg: false,
    badge: "Chef's Special",
  },
  {
    id: "malai-boti",
    name: "Chicken Malai Boti",
    category: "BBQ & Grill",
    price: 520,
    description:
      "Cream-and-cheese marinated cubes, mild and melting — the gentle one of the grill family.",
    image: "/dishes/bbq-platter.webp",
    spicyLevel: 1,
    veg: false,
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    category: "Breads & Rice",
    price: 350,
    description:
      "Saffron-layered basmati over masala chicken, served with raita and salad. Friday's soul in a handi.",
    image: "/dishes/chicken-biryani.webp",
    spicyLevel: 3,
    veg: false,
    badge: "Most Loved",
  },
  {
    id: "beef-biryani",
    name: "Beef Biryani",
    category: "Breads & Rice",
    price: 420,
    description:
      "Slow-braised beef folded through fragrant rice with crispy brown onions and fresh mint.",
    image: "/dishes/chicken-biryani.webp",
    spicyLevel: 3,
    veg: false,
  },
  {
    id: "garlic-naan",
    name: "Garlic Naan",
    category: "Breads & Rice",
    price: 120,
    description:
      "Blistered in our clay tandoor and brushed with garlic butter — made to scoop up every last drop.",
    image: "/dishes/garlic-naan.webp",
    spicyLevel: 0,
    veg: true,
  },
  {
    id: "roghni-naan",
    name: "Roghni Naan (2 pc)",
    category: "Breads & Rice",
    price: 100,
    description:
      "Soft sesame-topped classic, baked fresh to order in the tandoor.",
    image: "/dishes/garlic-naan.webp",
    spicyLevel: 0,
    veg: true,
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun (4 pc)",
    category: "Desserts",
    price: 250,
    description:
      "Warm khoya dumplings soaked in rose-cardamom syrup, finished with pistachio and silver leaf.",
    image: "/dishes/gulab-jamun.webp",
    spicyLevel: 0,
    veg: true,
  },
  {
    id: "shahi-kheer",
    name: "Shahi Kheer",
    category: "Desserts",
    price: 220,
    description:
      "Slow-stirred rice pudding with condensed milk, cardamom and a crown of crushed nuts.",
    image: "/dishes/gulab-jamun.webp",
    spicyLevel: 0,
    veg: true,
  },
  {
    id: "mango-kulfi",
    name: "Mango Kulfi",
    category: "Desserts",
    price: 280,
    description:
      "Dense traditional kulfi with Alphonso mango, pistachio dust and dried rose petals.",
    image: "/dishes/mango-kulfi.webp",
    spicyLevel: 0,
    veg: true,
  },
  {
    id: "doodh-patti",
    name: "Doodh Patti",
    category: "Drinks",
    price: 150,
    description:
      "Milk-only chai brewed strong with crushed cardamom, served piping hot in a clay kulhad.",
    image: "/dishes/doodh-patti.webp",
    spicyLevel: 0,
    veg: true,
  },
  {
    id: "kashmiri-chai",
    name: "Kashmiri Chai",
    category: "Drinks",
    price: 200,
    description:
      "Pink tea whisked with salt and crushed pistachios — the perfect end to a heavy meal.",
    image: "/dishes/doodh-patti.webp",
    spicyLevel: 0,
    veg: true,
  },
];

export function formatPKR(n: number): string {
  return "Rs " + n.toLocaleString("en-PK");
}
