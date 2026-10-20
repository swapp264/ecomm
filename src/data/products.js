// ============================================================
//  THE GENUINE STORE — Mock Product Data
//  Generated for development / demo purposes
// ============================================================

// ---------------------------------------------------------------------------
// CATEGORIES
// ---------------------------------------------------------------------------
export const categories = [
  {
    id: "cat-001",
    name: "Whey Protein",
    slug: "whey-protein",
    icon: "🥛",
    productCount: 8,
  },
  {
    id: "cat-002",
    name: "Mass Gainer",
    slug: "mass-gainer",
    icon: "💪",
    productCount: 5,
  },
  {
    id: "cat-003",
    name: "Creatine",
    slug: "creatine",
    icon: "⚡",
    productCount: 4,
  },
  {
    id: "cat-004",
    name: "Pre-Workout",
    slug: "pre-workout",
    icon: "🔥",
    productCount: 5,
  },
  {
    id: "cat-005",
    name: "BCAA",
    slug: "bcaa",
    icon: "🧬",
    productCount: 4,
  },
  {
    id: "cat-006",
    name: "Multivitamin",
    slug: "multivitamin",
    icon: "💊",
    productCount: 4,
  },
  {
    id: "cat-007",
    name: "Protein Bars",
    slug: "protein-bars",
    icon: "🍫",
    productCount: 4,
  },
];

// ---------------------------------------------------------------------------
// BRANDS
// ---------------------------------------------------------------------------
export const brands = [
  {
    id: "brand-001",
    name: "Optimum Nutrition",
    logo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&h=200&fit=crop",
    productCount: 5,
  },
  {
    id: "brand-002",
    name: "MuscleBlaze",
    logo: "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=200&h=200&fit=crop",
    productCount: 5,
  },
  {
    id: "brand-003",
    name: "MyProtein",
    logo: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop",
    productCount: 4,
  },
  {
    id: "brand-004",
    name: "Dymatize",
    logo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop",
    productCount: 3,
  },
  {
    id: "brand-005",
    name: "BSN",
    logo: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=200&h=200&fit=crop",
    productCount: 3,
  },
  {
    id: "brand-006",
    name: "MuscleTech",
    logo: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200&h=200&fit=crop",
    productCount: 3,
  },
  {
    id: "brand-007",
    name: "Now Foods",
    logo: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=200&h=200&fit=crop",
    productCount: 3,
  },
  {
    id: "brand-008",
    name: "Health Veda Organics",
    logo: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=200&h=200&fit=crop",
    productCount: 2,
  },
  {
    id: "brand-009",
    name: "AS-IT-IS",
    logo: "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=200&h=200&fit=crop",
    productCount: 3,
  },
  {
    id: "brand-010",
    name: "Nakpro",
    logo: "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=200&h=200&fit=crop",
    productCount: 2,
  },
];

// ---------------------------------------------------------------------------
// PRODUCTS
// ---------------------------------------------------------------------------
const products = [
  // ── WHEY PROTEIN ─────────────────────────────────────────────────────────

  {
    id: "prod-001",
    name: "Gold Standard 100% Whey Protein",
    brand: "Optimum Nutrition",
    category: "Whey Protein",
    slug: "on-gold-standard-whey-protein",
    images: [
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Double Rich Chocolate", size: "1 kg", price: 2799, originalPrice: 3499, stock: 45 },
      { flavor: "Double Rich Chocolate", size: "2 kg", price: 5199, originalPrice: 6499, stock: 30 },
      { flavor: "Vanilla Ice Cream", size: "1 kg", price: 2799, originalPrice: 3499, stock: 38 },
      { flavor: "Vanilla Ice Cream", size: "5 lb", price: 7499, originalPrice: 9199, stock: 20 },
      { flavor: "Cookies & Cream", size: "1 kg", price: 2799, originalPrice: 3499, stock: 22 },
    ],
    description:
      "Optimum Nutrition's Gold Standard 100% Whey is the world's best-selling whey protein, delivering 24g of high-quality protein per serving. Packed with BCAAs and glutamine for superior muscle recovery, it mixes instantly and tastes incredible. Ideal for post-workout recovery or any time you need a protein boost.",
    nutritionFacts: {
      serving_size: "33g (1 scoop)",
      servings_per_container: "30",
      calories: 120,
      calories_from_fat: 15,
      protein: "24g",
      carbohydrates: "3g",
      sugars: "1g",
      fat: "1.5g",
      saturated_fat: "0.5g",
      cholesterol: "40mg",
      sodium: "130mg",
      bcaa: "5.5g",
      glutamine: "4g",
    },
    directions:
      "Mix 1 scoop with 170–230 ml of cold water or milk. Consume 1–3 servings per day. Best consumed immediately after workout.",
    tags: ["whey", "protein", "post-workout", "muscle-building", "recovery", "gold-standard"],
    rating: 4.8,
    numReviews: 482,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 20,
  },

  {
    id: "prod-002",
    name: "Biozyme Performance Whey Protein",
    brand: "MuscleBlaze",
    category: "Whey Protein",
    slug: "muscleblaze-biozyme-performance-whey",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Rich Chocolate", size: "1 kg", price: 1899, originalPrice: 2699, stock: 60 },
      { flavor: "Rich Chocolate", size: "2 kg", price: 3499, originalPrice: 4999, stock: 35 },
      { flavor: "Rocky Road", size: "1 kg", price: 1899, originalPrice: 2699, stock: 42 },
      { flavor: "Cafe Mocha", size: "2 kg", price: 3499, originalPrice: 4999, stock: 18 },
    ],
    description:
      "MuscleBlaze Biozyme Performance Whey features patented Enzyme Blend for 50% better protein absorption. Each serving delivers 25g protein with enhanced digestibility compared to standard whey. Formulated to support muscle repair and growth with superior bioavailability.",
    nutritionFacts: {
      serving_size: "33g (1 scoop)",
      servings_per_container: "30",
      calories: 118,
      calories_from_fat: 12,
      protein: "25g",
      carbohydrates: "2.8g",
      sugars: "1.2g",
      fat: "1.2g",
      saturated_fat: "0.4g",
      cholesterol: "35mg",
      sodium: "120mg",
      bcaa: "5.8g",
    },
    directions:
      "Add 1 scoop (33g) to 200 ml of water or milk. Shake well. Take 1–2 servings daily, preferably after workout.",
    tags: ["whey", "protein", "enzyme-blend", "high-absorption", "muscleblaze"],
    rating: 4.6,
    numReviews: 318,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 30,
  },

  {
    id: "prod-003",
    name: "Impact Whey Protein",
    brand: "MyProtein",
    category: "Whey Protein",
    slug: "myprotein-impact-whey-protein",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Brownie", size: "1 kg", price: 1699, originalPrice: 2399, stock: 55 },
      { flavor: "Chocolate Brownie", size: "2.5 kg", price: 3799, originalPrice: 5199, stock: 28 },
      { flavor: "Strawberry Cream", size: "1 kg", price: 1699, originalPrice: 2399, stock: 40 },
      { flavor: "Unflavoured", size: "1 kg", price: 1599, originalPrice: 2299, stock: 33 },
      { flavor: "Salted Caramel", size: "2.5 kg", price: 3799, originalPrice: 5199, stock: 15 },
    ],
    description:
      "MyProtein's Impact Whey Protein is a high-quality, affordable whey concentrate delivering 21g protein per serving. With over 80 flavors and trusted by athletes worldwide, it's the perfect everyday protein supplement. Low in fat and sugar, it supports lean muscle growth effectively.",
    nutritionFacts: {
      serving_size: "25g (1 scoop)",
      servings_per_container: "40",
      calories: 103,
      calories_from_fat: 20,
      protein: "21g",
      carbohydrates: "1g",
      sugars: "0.5g",
      fat: "2.2g",
      saturated_fat: "0.9g",
      cholesterol: "30mg",
      sodium: "95mg",
      bcaa: "4.5g",
    },
    directions:
      "Mix 1 scoop (25g) with 200 ml water or milk. Take 1–2 servings daily. For best results use post-workout.",
    tags: ["whey", "protein", "lean", "affordable", "myprotein"],
    rating: 4.5,
    numReviews: 276,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 29,
  },

  {
    id: "prod-004",
    name: "ISO100 Hydrolyzed Whey Protein Isolate",
    brand: "Dymatize",
    category: "Whey Protein",
    slug: "dymatize-iso100-hydrolyzed-whey-isolate",
    images: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Gourmet Chocolate", size: "1.6 lb", price: 3299, originalPrice: 4199, stock: 25 },
      { flavor: "Gourmet Chocolate", size: "5 lb", price: 7999, originalPrice: 9999, stock: 18 },
      { flavor: "Fudge Brownie", size: "5 lb", price: 7999, originalPrice: 9999, stock: 12 },
      { flavor: "Strawberry", size: "1.6 lb", price: 3299, originalPrice: 4199, stock: 20 },
    ],
    description:
      "Dymatize ISO100 is a hydrolyzed whey protein isolate — the fastest-absorbing protein form available. Each serving packs 25g protein with zero fat and minimal carbs for ultimate lean muscle support. Gluten-free and lactose-minimized, it's perfect for sensitive stomachs.",
    nutritionFacts: {
      serving_size: "30g (1 scoop)",
      servings_per_container: "76",
      calories: 110,
      calories_from_fat: 5,
      protein: "25g",
      carbohydrates: "2g",
      sugars: "1g",
      fat: "0.5g",
      saturated_fat: "0g",
      cholesterol: "50mg",
      sodium: "160mg",
      bcaa: "5.8g",
      leucine: "2.7g",
    },
    directions:
      "Mix 1 scoop with 200–250 ml cold water. Consume within 30 minutes post-workout for optimal muscle protein synthesis.",
    tags: ["isolate", "hydrolyzed", "whey", "lean", "gluten-free", "fast-absorbing"],
    rating: 4.7,
    numReviews: 205,
    isFeatured: true,
    isNew: false,
    isBestSeller: false,
    discountPercent: 21,
  },

  {
    id: "prod-005",
    name: "Nitro-Tech 100% Whey Gold",
    brand: "MuscleTech",
    category: "Whey Protein",
    slug: "muscletech-nitro-tech-whey-gold",
    images: [
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Double Rich Chocolate", size: "5.5 lb", price: 6499, originalPrice: 8299, stock: 22 },
      { flavor: "Vanilla Bean", size: "5.5 lb", price: 6499, originalPrice: 8299, stock: 17 },
      { flavor: "Double Rich Chocolate", size: "3.5 lb", price: 4499, originalPrice: 5799, stock: 28 },
    ],
    description:
      "MuscleTech Nitro-Tech 100% Whey Gold delivers 24g of ultra-pure protein per serving, featuring whey isolate as the primary source. Scientifically engineered with creatine for strength gains beyond protein alone. Keto-friendly and low in carbs, it supports both muscle building and fat management.",
    nutritionFacts: {
      serving_size: "32g (1 scoop)",
      servings_per_container: "78",
      calories: 130,
      calories_from_fat: 20,
      protein: "24g",
      carbohydrates: "3g",
      sugars: "1g",
      fat: "2g",
      saturated_fat: "1g",
      cholesterol: "55mg",
      sodium: "135mg",
      bcaa: "5.4g",
      creatine: "3g",
    },
    directions:
      "Mix 1 scoop with 170–230 ml of cold water or skim milk. Take 1–3 servings per day. On training days, use 1 serving immediately after workout.",
    tags: ["whey", "isolate", "creatine", "muscle-building", "muscletech"],
    rating: 4.5,
    numReviews: 189,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 22,
  },

  {
    id: "prod-006",
    name: "Atom Whey Protein",
    brand: "AS-IT-IS",
    category: "Whey Protein",
    slug: "as-it-is-atom-whey-protein",
    images: [
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate", size: "1 kg", price: 1549, originalPrice: 1999, stock: 70 },
      { flavor: "Chocolate", size: "2 kg", price: 2999, originalPrice: 3799, stock: 48 },
      { flavor: "Unflavoured", size: "1 kg", price: 1499, originalPrice: 1899, stock: 55 },
      { flavor: "Coffee Caramel", size: "1 kg", price: 1549, originalPrice: 1999, stock: 30 },
    ],
    description:
      "AS-IT-IS ATOM Whey Protein is a no-nonsense, filler-free whey concentrate with 25g protein per serving. Transparent labeling means you get exactly what's on the label — no amino spiking, no proprietary blends. Perfect for fitness enthusiasts who value clean supplementation at an unbeatable price.",
    nutritionFacts: {
      serving_size: "35g (1 scoop)",
      servings_per_container: "28",
      calories: 125,
      calories_from_fat: 18,
      protein: "25g",
      carbohydrates: "3.5g",
      sugars: "2g",
      fat: "2g",
      saturated_fat: "0.8g",
      cholesterol: "40mg",
      sodium: "110mg",
      bcaa: "5.5g",
    },
    directions:
      "Blend 1 scoop with 200 ml water or milk. Consume after workout or between meals for daily protein intake. Store in a cool, dry place.",
    tags: ["whey", "clean", "no-fillers", "budget", "as-it-is", "transparent-label"],
    rating: 4.4,
    numReviews: 143,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    discountPercent: 23,
  },

  {
    id: "prod-007",
    name: "Perform Whey Protein",
    brand: "Nakpro",
    category: "Whey Protein",
    slug: "nakpro-perform-whey-protein",
    images: [
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Fantasy", size: "1 kg", price: 1699, originalPrice: 2199, stock: 50 },
      { flavor: "Vanilla Milkshake", size: "1 kg", price: 1699, originalPrice: 2199, stock: 35 },
      { flavor: "Chocolate Fantasy", size: "4 kg", price: 5999, originalPrice: 7799, stock: 15 },
    ],
    description:
      "Nakpro Perform Whey Protein delivers a powerful 24g protein blend with added digestive enzymes for smooth absorption. It's an ideal everyday protein supplement for amateur and professional athletes alike. Fortified with essential vitamins and minerals to support overall health alongside muscle growth.",
    nutritionFacts: {
      serving_size: "34g (1 scoop)",
      servings_per_container: "29",
      calories: 122,
      calories_from_fat: 15,
      protein: "24g",
      carbohydrates: "3g",
      sugars: "1.5g",
      fat: "1.5g",
      saturated_fat: "0.5g",
      cholesterol: "35mg",
      sodium: "100mg",
      bcaa: "5.2g",
    },
    directions:
      "Mix 1 scoop in 200 ml water or milk. Use 1–2 servings daily. Best taken after training or as a meal supplement.",
    tags: ["whey", "protein", "digestive-enzymes", "nakpro", "everyday"],
    rating: 4.3,
    numReviews: 87,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    discountPercent: 23,
  },

  {
    id: "prod-008",
    name: "Syntha-6 Whey Protein Powder",
    brand: "BSN",
    category: "Whey Protein",
    slug: "bsn-syntha-6-whey-protein",
    images: [
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Milkshake", size: "5 lb", price: 5999, originalPrice: 7499, stock: 20 },
      { flavor: "Vanilla Ice Cream", size: "5 lb", price: 5999, originalPrice: 7499, stock: 18 },
      { flavor: "Strawberry Milkshake", size: "2.27 kg", price: 4299, originalPrice: 5499, stock: 14 },
    ],
    description:
      "BSN SYNTHA-6 is a premium multi-functional whey protein powder featuring a blend of fast, medium, and slow-digesting proteins. Its sustained-release protein matrix ensures continuous amino acid delivery for up to 8 hours. Renowned for exceptional taste and milkshake-like texture in every sip.",
    nutritionFacts: {
      serving_size: "47g (2 scoops)",
      servings_per_container: "48",
      calories: 200,
      calories_from_fat: 60,
      protein: "22g",
      carbohydrates: "14g",
      sugars: "7g",
      fat: "7g",
      saturated_fat: "2g",
      cholesterol: "90mg",
      sodium: "230mg",
      bcaa: "10g",
      eaa: "14g",
    },
    directions:
      "Mix 2 scoops with 10–12 oz of water or milk. Consume between meals or post-workout. Can also be used as a pre-bedtime shake for overnight recovery.",
    tags: ["whey", "sustained-release", "protein-blend", "great-taste", "bsn"],
    rating: 4.6,
    numReviews: 231,
    isFeatured: true,
    isNew: false,
    isBestSeller: false,
    discountPercent: 20,
  },

  // ── MASS GAINER ───────────────────────────────────────────────────────────

  {
    id: "prod-009",
    name: "Super Mass Gainer",
    brand: "Dymatize",
    category: "Mass Gainer",
    slug: "dymatize-super-mass-gainer",
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Cake Batter", size: "6 lb", price: 4299, originalPrice: 5499, stock: 25 },
      { flavor: "Gourmet Vanilla", size: "6 lb", price: 4299, originalPrice: 5499, stock: 18 },
      { flavor: "Chocolate Cake Batter", size: "12 lb", price: 7999, originalPrice: 9999, stock: 10 },
    ],
    description:
      "Dymatize Super Mass Gainer provides 1,280 calories and 52g of protein per serving to fuel serious muscle growth. Loaded with complex carbohydrates and high-quality protein, it helps hard gainers pack on size fast. Fortified with vitamins, minerals, and Zytrix enzyme complex for efficient digestion.",
    nutritionFacts: {
      serving_size: "334g (4 scoops)",
      servings_per_container: "8",
      calories: 1280,
      calories_from_fat: 63,
      protein: "52g",
      carbohydrates: "246g",
      sugars: "18g",
      fat: "7g",
      saturated_fat: "2g",
      cholesterol: "90mg",
      sodium: "590mg",
      bcaa: "11g",
      creatine: "2g",
    },
    directions:
      "Mix 4 scoops with 24 oz of water or milk. Take 1–2 servings daily. Best consumed after workout or between meals to maintain high caloric intake.",
    tags: ["mass-gainer", "bulking", "calories", "hard-gainer", "dymatize"],
    rating: 4.4,
    numReviews: 162,
    isFeatured: false,
    isNew: false,
    isBestSeller: true,
    discountPercent: 22,
  },

  {
    id: "prod-010",
    name: "Real Mass Gainer",
    brand: "MuscleBlaze",
    category: "Mass Gainer",
    slug: "muscleblaze-real-mass-gainer",
    images: [
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate", size: "3 kg", price: 2299, originalPrice: 2999, stock: 42 },
      { flavor: "Chocolate", size: "6 kg", price: 4199, originalPrice: 5499, stock: 25 },
      { flavor: "Vanilla", size: "3 kg", price: 2299, originalPrice: 2999, stock: 30 },
    ],
    description:
      "MuscleBlaze Real Mass Gainer delivers 717 calories and 31.6g protein per serving with a 4:1 carb-to-protein ratio. Enhanced with Digezyme multi-enzyme complex for better nutrient absorption, it's designed for clean bulking without excessive fat gain. Backed by India's most trusted sports nutrition brand.",
    nutritionFacts: {
      serving_size: "75g (3 scoops)",
      servings_per_container: "40",
      calories: 717,
      calories_from_fat: 45,
      protein: "31.6g",
      carbohydrates: "121g",
      sugars: "8g",
      fat: "5g",
      saturated_fat: "1.5g",
      cholesterol: "65mg",
      sodium: "280mg",
      digezyme: "31.25mg",
    },
    directions:
      "Mix 3 scoops (75g) with 300 ml milk or water. Consume 2 servings per day. Take one serving post-workout and another between meals.",
    tags: ["mass-gainer", "bulking", "digezyme", "clean-bulk", "muscleblaze"],
    rating: 4.3,
    numReviews: 198,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 23,
  },

  {
    id: "prod-011",
    name: "True-Mass 1200",
    brand: "BSN",
    category: "Mass Gainer",
    slug: "bsn-true-mass-1200",
    images: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Milkshake", size: "10 lb", price: 7499, originalPrice: 9499, stock: 14 },
      { flavor: "Strawberry Milkshake", size: "10 lb", price: 7499, originalPrice: 9499, stock: 10 },
      { flavor: "Vanilla Ice Cream", size: "4.56 kg", price: 5499, originalPrice: 6999, stock: 20 },
    ],
    description:
      "BSN TRUE-MASS 1200 is an elite super-mass gainer delivering 1,200 calories and 50g protein per serving. Its multi-protein matrix provides immediate and sustained amino acid delivery for maximum muscle recovery and growth. Perfect for athletes who need significant caloric surplus to support intense training regimens.",
    nutritionFacts: {
      serving_size: "333g (4 scoops)",
      servings_per_container: "14",
      calories: 1220,
      calories_from_fat: 117,
      protein: "50g",
      carbohydrates: "215g",
      sugars: "14g",
      fat: "13g",
      saturated_fat: "3.5g",
      cholesterol: "115mg",
      sodium: "400mg",
      bcaa: "22g",
    },
    directions:
      "Mix 4 scoops with 24 oz of cold water or milk. Take 1–2 servings daily, preferably post-workout or as a high-calorie meal replacement.",
    tags: ["mass-gainer", "1200-calories", "super-gainer", "bsn", "bulking"],
    rating: 4.5,
    numReviews: 134,
    isFeatured: true,
    isNew: false,
    isBestSeller: false,
    discountPercent: 21,
  },

  {
    id: "prod-012",
    name: "Bulk Mass Gainer",
    brand: "MyProtein",
    category: "Mass Gainer",
    slug: "myprotein-bulk-mass-gainer",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Smooth", size: "2.5 kg", price: 2899, originalPrice: 3699, stock: 38 },
      { flavor: "Strawberry", size: "2.5 kg", price: 2899, originalPrice: 3699, stock: 22 },
      { flavor: "Vanilla", size: "5 kg", price: 5499, originalPrice: 6999, stock: 16 },
    ],
    description:
      "MyProtein Bulk Mass Gainer provides the calories and nutrients needed for serious mass building with 388 calories and 31g protein per 100g serving. Enriched with creatine, glutamine, and a carbohydrate blend for energy replenishment and recovery. Budget-friendly mass gainer without compromising on quality.",
    nutritionFacts: {
      serving_size: "100g (approx 4 scoops)",
      servings_per_container: "25",
      calories: 388,
      calories_from_fat: 36,
      protein: "31g",
      carbohydrates: "55g",
      sugars: "5g",
      fat: "4g",
      saturated_fat: "1.2g",
      cholesterol: "50mg",
      sodium: "140mg",
      creatine: "1g",
      glutamine: "1g",
    },
    directions:
      "Mix 4 scoops (100g) with 300 ml of milk or water. Consume 2–3 servings daily depending on caloric needs. Ideal post-workout or between meals.",
    tags: ["mass-gainer", "creatine", "glutamine", "myprotein", "bulking"],
    rating: 4.2,
    numReviews: 109,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 22,
  },

  {
    id: "prod-013",
    name: "Massive Gainer",
    brand: "Nakpro",
    category: "Mass Gainer",
    slug: "nakpro-massive-gainer",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate", size: "3 kg", price: 1799, originalPrice: 2499, stock: 45 },
      { flavor: "Vanilla", size: "3 kg", price: 1799, originalPrice: 2499, stock: 28 },
      { flavor: "Chocolate", size: "6 kg", price: 3399, originalPrice: 4599, stock: 18 },
    ],
    description:
      "Nakpro Massive Gainer is engineered for rapid weight gain and muscle mass increase, delivering 960 calories per 3-scoop serving. Formulated with a blend of complex carbohydrates, quality protein, and 27 vitamins & minerals for complete nutritional support. An ideal choice for underweight individuals and hardgainers.",
    nutritionFacts: {
      serving_size: "150g (3 scoops)",
      servings_per_container: "20",
      calories: 960,
      calories_from_fat: 72,
      protein: "30g",
      carbohydrates: "185g",
      sugars: "10g",
      fat: "8g",
      saturated_fat: "2g",
      cholesterol: "50mg",
      sodium: "320mg",
      vitamins_minerals: "27 types",
    },
    directions:
      "Mix 3 scoops (150g) with 350 ml of cold milk. Consume 1–2 times daily. Best taken post-workout or in the morning for calorie loading.",
    tags: ["mass-gainer", "hardgainer", "weight-gain", "nakpro", "calories"],
    rating: 4.1,
    numReviews: 76,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    discountPercent: 28,
  },

  // ── CREATINE ──────────────────────────────────────────────────────────────

  {
    id: "prod-014",
    name: "Micronized Creatine Monohydrate",
    brand: "Optimum Nutrition",
    category: "Creatine",
    slug: "on-micronized-creatine-monohydrate",
    images: [
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Unflavoured", size: "300g", price: 899, originalPrice: 1199, stock: 80 },
      { flavor: "Unflavoured", size: "600g", price: 1699, originalPrice: 2199, stock: 55 },
      { flavor: "Unflavoured", size: "1.2 kg", price: 2999, originalPrice: 3799, stock: 30 },
    ],
    description:
      "Optimum Nutrition Micronized Creatine Monohydrate is a pure, ultra-fine creatine powder for superior mixability. Each 5g serving supports increased strength, power output, and lean muscle mass. Pharmaceutical-grade creatine with no fillers, flavors, or additives — completely unflavored to mix with any shake.",
    nutritionFacts: {
      serving_size: "5g (1 scoop)",
      servings_per_container: "60",
      calories: 0,
      protein: "0g",
      carbohydrates: "0g",
      fat: "0g",
      creatine_monohydrate: "5g",
    },
    directions:
      "Mix 1 scoop (5g) with your protein shake or any beverage. Take 1 serving daily. Loading phase optional: 4 servings daily for 5 days.",
    tags: ["creatine", "monohydrate", "strength", "power", "unflavoured", "on"],
    rating: 4.7,
    numReviews: 312,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 25,
  },

  {
    id: "prod-015",
    name: "Creatine Monohydrate Raw",
    brand: "AS-IT-IS",
    category: "Creatine",
    slug: "as-it-is-creatine-monohydrate-raw",
    images: [
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Unflavoured", size: "250g", price: 549, originalPrice: 749, stock: 100 },
      { flavor: "Unflavoured", size: "500g", price: 999, originalPrice: 1349, stock: 75 },
      { flavor: "Unflavoured", size: "1 kg", price: 1799, originalPrice: 2399, stock: 50 },
    ],
    description:
      "AS-IT-IS Creatine Monohydrate Raw is 100% pure creatine with no additives, no coatings, and no fillers — just clean creatine. FSSAI certified and lab-tested for purity, it delivers exactly what the label claims. An excellent value-for-money creatine for athletes seeking strength and performance gains.",
    nutritionFacts: {
      serving_size: "5g (1 scoop)",
      servings_per_container: "50",
      calories: 0,
      protein: "0g",
      carbohydrates: "0g",
      fat: "0g",
      creatine_monohydrate: "5g",
    },
    directions:
      "Dissolve 1 scoop in 200 ml of warm water or juice. Consume once daily, preferably before or after workout. Stay well hydrated throughout the day.",
    tags: ["creatine", "raw", "pure", "no-additives", "as-it-is", "value"],
    rating: 4.5,
    numReviews: 224,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 27,
  },

  {
    id: "prod-016",
    name: "Creactor Creatine HCl",
    brand: "MuscleTech",
    category: "Creatine",
    slug: "muscletech-creactor-creatine-hcl",
    images: [
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Unflavoured", size: "120 Caps", price: 1799, originalPrice: 2299, stock: 40 },
      { flavor: "Lemon Lime", size: "210g", price: 1999, originalPrice: 2599, stock: 28 },
      { flavor: "Fruit Punch", size: "210g", price: 1999, originalPrice: 2599, stock: 22 },
    ],
    description:
      "MuscleTech Creactor features a unique creatine HCl formula that requires no loading phase and no cycling. 750mg of creatine HCl plus free-acid creatine for enhanced solubility and absorption compared to standard monohydrate. Scientifically proven to boost strength, performance, and lean muscle in as little as 8 weeks.",
    nutritionFacts: {
      serving_size: "2 capsules / 3.5g powder",
      servings_per_container: "60",
      calories: 5,
      protein: "0g",
      carbohydrates: "0g",
      fat: "0g",
      creatine_hcl: "750mg",
      free_acid_creatine: "750mg",
    },
    directions:
      "Capsules: Take 2 capsules twice daily. Powder: Mix 1 serving with 200 ml water. No loading phase required. Take consistently for best results.",
    tags: ["creatine", "hcl", "no-loading", "strength", "muscletech"],
    rating: 4.3,
    numReviews: 95,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 22,
  },

  {
    id: "prod-017",
    name: "Creatine Monohydrate (Creapure)",
    brand: "MyProtein",
    category: "Creatine",
    slug: "myprotein-creatine-monohydrate",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Unflavoured", size: "500g", price: 999, originalPrice: 1399, stock: 60 },
      { flavor: "Unflavoured", size: "1 kg", price: 1799, originalPrice: 2399, stock: 40 },
      { flavor: "Berry Blast", size: "500g", price: 1099, originalPrice: 1499, stock: 32 },
    ],
    description:
      "MyProtein Creatine Monohydrate is a quality micronized creatine with Creapure certification for highest-grade purity. Trusted by elite athletes worldwide, it supports explosive strength, power output, and muscle endurance. Mix it easily into any shake or beverage for convenient daily supplementation.",
    nutritionFacts: {
      serving_size: "5g (1 scoop)",
      servings_per_container: "100",
      calories: 0,
      protein: "0g",
      carbohydrates: "0g",
      fat: "0g",
      creatine_monohydrate: "5g",
    },
    directions:
      "Mix 1 scoop (5g) with 250 ml water or any beverage. Take 1 serving daily. Can be combined with protein shakes.",
    tags: ["creatine", "creapure", "certified", "myprotein", "strength"],
    rating: 4.6,
    numReviews: 177,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 29,
  },

  // ── PRE-WORKOUT ───────────────────────────────────────────────────────────

  {
    id: "prod-018",
    name: "N.O.-Xplode Pre-Workout",
    brand: "BSN",
    category: "Pre-Workout",
    slug: "bsn-no-xplode-pre-workout",
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Blue Raz", size: "60 Servings", price: 2999, originalPrice: 3799, stock: 35 },
      { flavor: "Fruit Punch", size: "60 Servings", price: 2999, originalPrice: 3799, stock: 28 },
      { flavor: "Watermelon", size: "30 Servings", price: 1799, originalPrice: 2299, stock: 40 },
    ],
    description:
      "BSN N.O.-Xplode is one of the most iconic pre-workouts ever made, delivering unrivaled energy, focus, and muscle performance. Its proprietary endura shot blend provides 275mg caffeine, beta-alanine, and nitric oxide boosters for skin-splitting pumps. The ultimate formula to take your training intensity to the next level.",
    nutritionFacts: {
      serving_size: "21.5g (1 scoop)",
      servings_per_container: "60",
      calories: 30,
      protein: "0g",
      carbohydrates: "7g",
      sugars: "0g",
      fat: "0g",
      caffeine: "275mg",
      beta_alanine: "3.2g",
      creatine: "3g",
      nitric_oxide_matrix: "5g",
    },
    directions:
      "Mix 1 scoop with 150–180 ml of cold water. Consume 30 minutes before training. Do not exceed 2 scoops per day. Not for use by persons under 18.",
    tags: ["pre-workout", "energy", "focus", "pump", "bsn", "caffeine"],
    rating: 4.6,
    numReviews: 248,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 21,
  },

  {
    id: "prod-019",
    name: "Charge Pre-Workout",
    brand: "MuscleBlaze",
    category: "Pre-Workout",
    slug: "muscleblaze-charge-pre-workout",
    images: [
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Blue Raspberry", size: "250g (25 Servings)", price: 999, originalPrice: 1399, stock: 55 },
      { flavor: "Green Apple", size: "250g (25 Servings)", price: 999, originalPrice: 1399, stock: 42 },
      { flavor: "Watermelon", size: "500g (50 Servings)", price: 1799, originalPrice: 2499, stock: 25 },
    ],
    description:
      "MuscleBlaze Charge Pre-Workout is a concentrated formula with 200mg caffeine, 3g citrulline malate, and 1.6g beta-alanine per serving. Designed to provide explosive energy, enhanced focus, and intense muscle pumps during your workout. Made for Indian athletes who need clean, effective pre-workout stimulation.",
    nutritionFacts: {
      serving_size: "10g (1 scoop)",
      servings_per_container: "25",
      calories: 20,
      protein: "0g",
      carbohydrates: "5g",
      sugars: "0g",
      fat: "0g",
      caffeine: "200mg",
      citrulline_malate: "3g",
      beta_alanine: "1.6g",
      taurine: "1g",
    },
    directions:
      "Mix 1 scoop with 200 ml of cold water. Consume 20–30 minutes before workout. Start with half a scoop to assess tolerance.",
    tags: ["pre-workout", "energy", "citrulline", "beta-alanine", "muscleblaze", "focus"],
    rating: 4.4,
    numReviews: 186,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 29,
  },

  {
    id: "prod-020",
    name: "THE Pre-Workout",
    brand: "MyProtein",
    category: "Pre-Workout",
    slug: "myprotein-the-pre-workout",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Cola Lime", size: "30 Servings", price: 1699, originalPrice: 2199, stock: 45 },
      { flavor: "Raspberry Lemonade", size: "30 Servings", price: 1699, originalPrice: 2199, stock: 35 },
      { flavor: "Watermelon", size: "30 Servings", price: 1699, originalPrice: 2199, stock: 28 },
    ],
    description:
      "MyProtein THE Pre-Workout combines 4g citrulline, 3.2g beta-alanine, and 200mg caffeine for a comprehensive performance boost. Scientifically dosed ingredients without the fluff, delivering real results in energy, endurance, and focus. A clean pre-workout experience with great taste and smooth, tingle-free formula options.",
    nutritionFacts: {
      serving_size: "15g (1 scoop)",
      servings_per_container: "30",
      calories: 25,
      protein: "0g",
      carbohydrates: "6g",
      sugars: "0g",
      fat: "0g",
      caffeine: "200mg",
      citrulline: "4g",
      beta_alanine: "3.2g",
      vitamin_b6: "1.4mg",
    },
    directions:
      "Mix 1 scoop (15g) with 300 ml water. Consume 30 minutes before training. Not recommended within 5 hours of sleep.",
    tags: ["pre-workout", "citrulline", "caffeine", "myprotein", "endurance"],
    rating: 4.3,
    numReviews: 112,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    discountPercent: 23,
  },

  {
    id: "prod-021",
    name: "Nitrosurge Pre-Workout",
    brand: "Dymatize",
    category: "Pre-Workout",
    slug: "dymatize-nitrosurge-pre-workout",
    images: [
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Arctic White", size: "30 Servings", price: 1999, originalPrice: 2699, stock: 32 },
      { flavor: "Swoleberry", size: "30 Servings", price: 1999, originalPrice: 2699, stock: 25 },
      { flavor: "Cherry Limeade", size: "30 Servings", price: 1999, originalPrice: 2699, stock: 18 },
    ],
    description:
      "Dymatize Nitrosurge delivers a science-backed pre-workout formula with 8g citrulline malate, 3.2g beta-alanine, and 325mg caffeine for maximum performance. Its nitric oxide boosting matrix creates massive muscle pumps while the nootropic focus complex keeps your mind sharp. Zero banned substances, third-party tested.",
    nutritionFacts: {
      serving_size: "14g (1 scoop)",
      servings_per_container: "30",
      calories: 20,
      protein: "0g",
      carbohydrates: "5g",
      sugars: "0g",
      fat: "0g",
      caffeine: "325mg",
      citrulline_malate: "8g",
      beta_alanine: "3.2g",
      betaine_anhydrous: "2.5g",
    },
    directions:
      "Mix 1 scoop with 240 ml of cold water. Take 15–30 minutes before exercise. Beginners should start with half a scoop.",
    tags: ["pre-workout", "high-stimulant", "pump", "dymatize", "no-booster"],
    rating: 4.5,
    numReviews: 143,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 26,
  },

  {
    id: "prod-022",
    name: "Cell-Tech Pre-Workout Elite",
    brand: "MuscleTech",
    category: "Pre-Workout",
    slug: "muscletech-cell-tech-pre-workout-elite",
    images: [
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Blue Slushie", size: "20 Servings", price: 2299, originalPrice: 2999, stock: 28 },
      { flavor: "Tropical Sunrise", size: "20 Servings", price: 2299, originalPrice: 2999, stock: 20 },
    ],
    description:
      "MuscleTech Cell-Tech Pre-Workout Elite is a next-generation formula combining creatine, beta-alanine, and a thermogenic energy matrix. Delivers powerful pre-workout stimulation with muscle-building creatine benefits in a single product. Clinically dosed ingredients for superior performance enhancement and accelerated recovery.",
    nutritionFacts: {
      serving_size: "16g (1 scoop)",
      servings_per_container: "20",
      calories: 35,
      protein: "0g",
      carbohydrates: "8g",
      sugars: "1g",
      fat: "0g",
      caffeine: "250mg",
      creatine: "3g",
      beta_alanine: "2.5g",
      betaine: "1.5g",
    },
    directions:
      "Mix 1 scoop with 200 ml of cold water. Take 30 minutes before training. Do not stack with other stimulant products.",
    tags: ["pre-workout", "creatine", "thermogenic", "muscletech", "performance"],
    rating: 4.2,
    numReviews: 78,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    discountPercent: 23,
  },

  // ── BCAA ──────────────────────────────────────────────────────────────────

  {
    id: "prod-023",
    name: "Amino Energy BCAA",
    brand: "Optimum Nutrition",
    category: "BCAA",
    slug: "on-amino-energy-bcaa",
    images: [
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Watermelon", size: "65 Servings", price: 2499, originalPrice: 3199, stock: 42 },
      { flavor: "Green Apple", size: "65 Servings", price: 2499, originalPrice: 3199, stock: 35 },
      { flavor: "Blue Raspberry", size: "30 Servings", price: 1399, originalPrice: 1799, stock: 55 },
    ],
    description:
      "Optimum Nutrition Amino Energy is a versatile amino acid supplement with 5g of amino acids including BCAAs plus 100mg caffeine per serving. Perfect as a pre-workout, intra-workout, or anytime energy drink without the sugar crash. Supports muscle recovery, endurance, and mental focus throughout the day.",
    nutritionFacts: {
      serving_size: "9g (2 scoops)",
      servings_per_container: "65",
      calories: 10,
      protein: "0g",
      carbohydrates: "1g",
      sugars: "0g",
      fat: "0g",
      caffeine: "100mg",
      amino_acid_blend: "5g",
      bcaa: "1g",
      leucine: "250mg",
    },
    directions:
      "Mix 2 scoops with 240 ml of cold water. Adjust servings based on energy needs (2–4 scoops). Can be used before, during, or after workout.",
    tags: ["bcaa", "amino-energy", "caffeine", "recovery", "on", "intra-workout"],
    rating: 4.7,
    numReviews: 298,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 22,
  },

  {
    id: "prod-024",
    name: "BCAA Pro 6000",
    brand: "MuscleBlaze",
    category: "BCAA",
    slug: "muscleblaze-bcaa-pro-6000",
    images: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Cola", size: "450g (50 Servings)", price: 1499, originalPrice: 1999, stock: 48 },
      { flavor: "Mango", size: "450g (50 Servings)", price: 1499, originalPrice: 1999, stock: 38 },
      { flavor: "Watermelon", size: "900g", price: 2699, originalPrice: 3599, stock: 22 },
    ],
    description:
      "MuscleBlaze BCAA Pro 6000 delivers 6g of BCAAs in a 2:1:1 ratio with added Vitamin B6 for enhanced nitrogen retention and muscle protein synthesis. Formulated to reduce muscle soreness and promote faster recovery after intense training sessions. Electrolytes included for hydration support during workouts.",
    nutritionFacts: {
      serving_size: "9g (1 scoop)",
      servings_per_container: "50",
      calories: 20,
      protein: "6g",
      carbohydrates: "1g",
      sugars: "0g",
      fat: "0g",
      leucine: "3g",
      isoleucine: "1.5g",
      valine: "1.5g",
      vitamin_b6: "1.4mg",
    },
    directions:
      "Mix 1 scoop with 250 ml of cold water. Take during or after workout. Can be used on non-training days to maintain amino acid levels.",
    tags: ["bcaa", "2:1:1-ratio", "recovery", "electrolytes", "muscleblaze"],
    rating: 4.5,
    numReviews: 167,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 25,
  },

  {
    id: "prod-025",
    name: "BCAA 4:1:1",
    brand: "MyProtein",
    category: "BCAA",
    slug: "myprotein-bcaa-4-1-1",
    images: [
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Watermelon", size: "500g", price: 1199, originalPrice: 1599, stock: 55 },
      { flavor: "Unflavoured", size: "500g", price: 1099, originalPrice: 1499, stock: 40 },
      { flavor: "Tropical", size: "1 kg", price: 2099, originalPrice: 2799, stock: 28 },
    ],
    description:
      "MyProtein BCAA 4:1:1 features a leucine-heavy ratio for maximum muscle protein synthesis signaling. Higher leucine content means better anabolic response per serving compared to standard 2:1:1 formulas. Ideal for endurance athletes and bodybuilders looking to protect muscle during intense training or caloric deficits.",
    nutritionFacts: {
      serving_size: "8g (1 scoop)",
      servings_per_container: "62",
      calories: 30,
      protein: "7g",
      carbohydrates: "0g",
      sugars: "0g",
      fat: "0g",
      leucine: "4g",
      isoleucine: "1g",
      valine: "1g",
    },
    directions:
      "Mix 1 scoop with 200–300 ml water. Consume during or after training. For best results use consistently alongside your protein intake.",
    tags: ["bcaa", "4:1:1", "leucine", "myprotein", "muscle-protection"],
    rating: 4.3,
    numReviews: 94,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 25,
  },

  {
    id: "prod-026",
    name: "BCAA 12000 Powder",
    brand: "Dymatize",
    category: "BCAA",
    slug: "dymatize-bcaa-12000",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Fruit Fusion", size: "30 Servings", price: 1799, originalPrice: 2399, stock: 36 },
      { flavor: "Watermelon", size: "30 Servings", price: 1799, originalPrice: 2399, stock: 27 },
      { flavor: "Unflavoured", size: "30 Servings", price: 1699, originalPrice: 2199, stock: 20 },
    ],
    description:
      "Dymatize BCAA 12000 provides a massive 12g of BCAAs per serving in a 2:1:1 ratio for elite-level muscle recovery and anti-catabolism. Micronized for maximum solubility and faster absorption, it can be stacked with any protein supplement. Supports both endurance and strength athletes in maintaining peak performance.",
    nutritionFacts: {
      serving_size: "14g (1 scoop)",
      servings_per_container: "30",
      calories: 55,
      protein: "12g",
      carbohydrates: "0g",
      sugars: "0g",
      fat: "0g",
      leucine: "6g",
      isoleucine: "3g",
      valine: "3g",
    },
    directions:
      "Mix 1 scoop in 300 ml of cold water. Take 1 serving before, during, or after workout. May be used multiple times daily on training days.",
    tags: ["bcaa", "12g", "high-dose", "anti-catabolic", "dymatize", "recovery"],
    rating: 4.4,
    numReviews: 115,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    discountPercent: 25,
  },

  // ── MULTIVITAMIN ──────────────────────────────────────────────────────────

  {
    id: "prod-027",
    name: "Opti-Men Multivitamin",
    brand: "Optimum Nutrition",
    category: "Multivitamin",
    slug: "on-opti-men-multivitamin",
    images: [
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "N/A", size: "90 Tablets", price: 1499, originalPrice: 1999, stock: 65 },
      { flavor: "N/A", size: "150 Tablets", price: 2299, originalPrice: 2999, stock: 40 },
      { flavor: "N/A", size: "240 Tablets", price: 3399, originalPrice: 4499, stock: 25 },
    ],
    description:
      "Optimum Nutrition Opti-Men is a comprehensive multivitamin specifically formulated for active men and athletes. Packed with over 75 active ingredients including vitamins, minerals, amino acids, and botanical blends. Supports immune health, energy production, and overall wellbeing to help you perform at your peak every day.",
    nutritionFacts: {
      serving_size: "3 tablets",
      servings_per_container: "80",
      calories: 10,
      vitamin_a: "900mcg (100% DV)",
      vitamin_c: "300mg (333% DV)",
      vitamin_d3: "25mcg (125% DV)",
      vitamin_e: "134mg (893% DV)",
      vitamin_b12: "120mcg (5000% DV)",
      zinc: "15mg (136% DV)",
      magnesium: "80mg",
      amino_acid_blend: "1g",
    },
    directions:
      "Take 3 tablets daily with food. Divide into 3 doses throughout the day for best absorption. Not recommended on an empty stomach.",
    tags: ["multivitamin", "men", "immunity", "energy", "on", "comprehensive"],
    rating: 4.6,
    numReviews: 253,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 25,
  },

  {
    id: "prod-028",
    name: "Whole Food Multivitamin",
    brand: "Now Foods",
    category: "Multivitamin",
    slug: "now-foods-whole-food-multivitamin",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "N/A", size: "120 Capsules", price: 1299, originalPrice: 1699, stock: 55 },
      { flavor: "N/A", size: "240 Capsules", price: 2299, originalPrice: 2999, stock: 35 },
    ],
    description:
      "Now Foods Whole Food Multivitamin is made from real food concentrates for superior bioavailability compared to synthetic vitamins. Contains fruits, vegetables, herbal extracts, and essential probiotics for complete nutritional support. GMP certified and free from artificial colors, flavors, and preservatives.",
    nutritionFacts: {
      serving_size: "4 capsules",
      servings_per_container: "30",
      calories: 20,
      vitamin_a: "750mcg (83% DV)",
      vitamin_c: "180mg (200% DV)",
      vitamin_d: "20mcg (100% DV)",
      iron: "18mg (100% DV)",
      calcium: "200mg (15% DV)",
      whole_food_blend: "800mg",
      probiotic_blend: "2 billion CFU",
    },
    directions:
      "Take 4 capsules daily with a meal. For best results, split into 2 morning and 2 evening doses.",
    tags: ["multivitamin", "whole-food", "natural", "probiotic", "now-foods", "gmp"],
    rating: 4.5,
    numReviews: 134,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 24,
  },

  {
    id: "prod-029",
    name: "Daily Multivitamin for Men",
    brand: "Health Veda Organics",
    category: "Multivitamin",
    slug: "health-veda-daily-multivitamin-men",
    images: [
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "N/A", size: "60 Tablets", price: 599, originalPrice: 849, stock: 80 },
      { flavor: "N/A", size: "120 Tablets", price: 1099, originalPrice: 1549, stock: 55 },
    ],
    description:
      "Health Veda Organics Daily Multivitamin for Men is an organic-certified blend of 23 essential vitamins and minerals tailored for men's health. Formulated with Ayurvedic herbs including Ashwagandha and Shilajit to support testosterone levels, energy, and vitality. 100% vegetarian and free from gluten, soy, and artificial additives.",
    nutritionFacts: {
      serving_size: "1 tablet",
      servings_per_container: "60",
      calories: 5,
      vitamin_a: "600mcg (67% DV)",
      vitamin_c: "80mg (89% DV)",
      vitamin_d3: "10mcg (50% DV)",
      zinc: "10mg (91% DV)",
      ashwagandha: "100mg",
      shilajit: "50mg",
      lycopene: "1mg",
    },
    directions:
      "Take 1 tablet daily after breakfast. Consistent daily use recommended for optimal benefits.",
    tags: ["multivitamin", "organic", "ayurvedic", "ashwagandha", "men", "health-veda"],
    rating: 4.3,
    numReviews: 98,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    discountPercent: 29,
  },

  {
    id: "prod-030",
    name: "ADAM Superior Men's Multi",
    brand: "Now Foods",
    category: "Multivitamin",
    slug: "now-foods-adam-mens-multi",
    images: [
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "N/A", size: "60 Softgels", price: 1399, originalPrice: 1799, stock: 48 },
      { flavor: "N/A", size: "90 Softgels", price: 1899, originalPrice: 2499, stock: 32 },
    ],
    description:
      "Now Foods ADAM Superior Men's Multiple Vitamin is a potency-packed formula with high-potency vitamins and clinically studied herbal extracts. Features saw palmetto, lycopene, plant sterols, and CoQ10 for prostate support, cardiovascular health, and energy metabolism. Trusted by millions of men worldwide for over 50 years.",
    nutritionFacts: {
      serving_size: "2 softgels",
      servings_per_container: "30",
      calories: 15,
      vitamin_d3: "50mcg (250% DV)",
      vitamin_b12: "100mcg (4167% DV)",
      selenium: "200mcg (364% DV)",
      zinc: "15mg (136% DV)",
      saw_palmetto: "160mg",
      lycopene: "3mg",
      coq10: "30mg",
    },
    directions:
      "Take 2 softgels daily with meals. Take with food for optimal absorption of fat-soluble vitamins.",
    tags: ["multivitamin", "mens-health", "prostate", "coq10", "now-foods", "premium"],
    rating: 4.6,
    numReviews: 156,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 24,
  },

  // ── PROTEIN BARS ─────────────────────────────────────────────────────────

  {
    id: "prod-031",
    name: "Protein One Bar",
    brand: "Optimum Nutrition",
    category: "Protein Bars",
    slug: "on-protein-one-bar",
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Brownie", size: "12 Bars", price: 1999, originalPrice: 2699, stock: 50 },
      { flavor: "Peanut Butter", size: "12 Bars", price: 1999, originalPrice: 2699, stock: 40 },
      { flavor: "Mixed Pack", size: "12 Bars", price: 2099, originalPrice: 2799, stock: 30 },
    ],
    description:
      "Optimum Nutrition Protein One Bars deliver 20g of protein in a satisfying bar with just 1g of sugar and 180 calories. Made with real chocolate coating and chewy caramel-like center, they taste like an indulgent treat while supporting your muscle-building goals. Perfect on-the-go protein solution for busy athletes.",
    nutritionFacts: {
      serving_size: "45g (1 bar)",
      servings_per_container: "12",
      calories: 180,
      calories_from_fat: 54,
      protein: "20g",
      carbohydrates: "22g",
      sugars: "1g",
      sugar_alcohols: "8g",
      fiber: "6g",
      fat: "6g",
      saturated_fat: "4g",
      sodium: "200mg",
    },
    directions:
      "Enjoy 1 bar as a snack between meals or post-workout. Store in a cool, dry place. Not a meal replacement.",
    tags: ["protein-bar", "low-sugar", "snack", "on-the-go", "on", "chocolate"],
    rating: 4.5,
    numReviews: 187,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 26,
  },

  {
    id: "prod-032",
    name: "Protein Bar High Protein",
    brand: "MuscleBlaze",
    category: "Protein Bars",
    slug: "muscleblaze-protein-bar-high-protein",
    images: [
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Choco Almond", size: "6 Bars", price: 799, originalPrice: 999, stock: 70 },
      { flavor: "Fruit & Nut", size: "6 Bars", price: 799, originalPrice: 999, stock: 55 },
      { flavor: "Choco Almond", size: "12 Bars", price: 1499, originalPrice: 1899, stock: 45 },
    ],
    description:
      "MuscleBlaze Protein Bars pack 20g of protein per 64g bar with a deliciously chewy texture and decadent chocolate coating. No gelatin, egg, or added sucrose — made with healthier ingredients and real almonds for crunch. An honest, affordable protein bar crafted specifically for the Indian market and palate.",
    nutritionFacts: {
      serving_size: "64g (1 bar)",
      servings_per_container: "6",
      calories: 220,
      calories_from_fat: 70,
      protein: "20g",
      carbohydrates: "24g",
      sugars: "3g",
      fiber: "4g",
      fat: "8g",
      saturated_fat: "3g",
      sodium: "180mg",
    },
    directions:
      "Enjoy 1–2 bars daily as a high-protein snack. Ideal between meals or as a post-workout treat. Best consumed at room temperature.",
    tags: ["protein-bar", "vegetarian", "no-gelatin", "muscleblaze", "affordable"],
    rating: 4.3,
    numReviews: 142,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 20,
  },

  {
    id: "prod-033",
    name: "Layered Protein Bar",
    brand: "MyProtein",
    category: "Protein Bars",
    slug: "myprotein-layered-protein-bar",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546483875-ad9185490de0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Birthday Cake", size: "12 Bars", price: 2499, originalPrice: 3199, stock: 35 },
      { flavor: "Rocky Road", size: "12 Bars", price: 2499, originalPrice: 3199, stock: 28 },
      { flavor: "Caramel Pretzel", size: "6 Bars", price: 1299, originalPrice: 1699, stock: 42 },
    ],
    description:
      "MyProtein Layered Protein Bar features three distinct layers — a protein-packed nougat center, caramel middle, and crunchy wafer base — all enrobed in smooth milk chocolate. 38g protein per bar makes it one of the highest-protein bars on the market. A genuine indulgence without the guilt.",
    nutritionFacts: {
      serving_size: "75g (1 bar)",
      servings_per_container: "12",
      calories: 295,
      calories_from_fat: 80,
      protein: "38g",
      carbohydrates: "18g",
      sugars: "2.5g",
      fiber: "3g",
      fat: "9g",
      saturated_fat: "4.5g",
      sodium: "230mg",
    },
    directions:
      "Consume 1 bar daily as a protein-rich snack. Best enjoyed at room temperature. Refrigerate after opening in warm climates.",
    tags: ["protein-bar", "high-protein", "layered", "myprotein", "premium", "snack"],
    rating: 4.7,
    numReviews: 209,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    discountPercent: 22,
  },

  {
    id: "prod-034",
    name: "Elite Protein Bar",
    brand: "Dymatize",
    category: "Protein Bars",
    slug: "dymatize-elite-protein-bar",
    images: [
      "https://images.unsplash.com/photo-1608138404239-d2f0ccdd4897?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1637430821420-0c6e30d5e1c8?w=600&h=600&fit=crop",
    ],
    variants: [
      { flavor: "Chocolate Fudge", size: "12 Bars", price: 2199, originalPrice: 2799, stock: 38 },
      { flavor: "Peanut Butter Crunch", size: "12 Bars", price: 2199, originalPrice: 2799, stock: 30 },
      { flavor: "Chocolate Fudge", size: "6 Bars", price: 1199, originalPrice: 1499, stock: 48 },
    ],
    description:
      "Dymatize Elite Protein Bar delivers 25g of high-quality whey protein in a tasty, low-sugar format with only 200 calories per bar. Crafted for athletes who want clean nutrition without sacrificing taste, it's packed with complete amino acid profile for optimal recovery. A perfect bridge between your meals and training sessions.",
    nutritionFacts: {
      serving_size: "55g (1 bar)",
      servings_per_container: "12",
      calories: 200,
      calories_from_fat: 45,
      protein: "25g",
      carbohydrates: "20g",
      sugars: "2g",
      fiber: "7g",
      fat: "5g",
      saturated_fat: "2.5g",
      sodium: "220mg",
    },
    directions:
      "Eat 1 bar as a snack, pre-workout, or post-workout. Can be enjoyed chilled or at room temperature.",
    tags: ["protein-bar", "low-calorie", "whey-protein", "dymatize", "clean", "snack"],
    rating: 4.4,
    numReviews: 118,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    discountPercent: 21,
  },
];

// ---------------------------------------------------------------------------
// DERIVED EXPORT ARRAYS
// ---------------------------------------------------------------------------

/** Products with isFeatured === true */
export const featuredProducts = products.filter((p) => p.isFeatured);

/** Products with isBestSeller === true */
export const bestSellers = products.filter((p) => p.isBestSeller);

/** Products with isNew === true */
export const newArrivals = products.filter((p) => p.isNew);

// ---------------------------------------------------------------------------
// FITNESS GOALS
// ---------------------------------------------------------------------------
export const fitnessGoals = [
  {
    id: "goal-001",
    title: "Build Muscle",
    description:
      "Maximize muscle hypertrophy with high-protein supplements, creatine, and mass gainers designed to support intense training and recovery.",
    icon: "💪",
    products: [
      "on-gold-standard-whey-protein",
      "muscleblaze-biozyme-performance-whey",
      "dymatize-iso100-hydrolyzed-whey-isolate",
      "dymatize-super-mass-gainer",
      "on-micronized-creatine-monohydrate",
      "muscletech-nitro-tech-whey-gold",
    ],
  },
  {
    id: "goal-002",
    title: "Lose Weight & Get Lean",
    description:
      "Preserve lean muscle during a caloric deficit with whey isolates, BCAAs, and low-calorie protein options to keep you fueled without the extra calories.",
    icon: "🔥",
    products: [
      "dymatize-iso100-hydrolyzed-whey-isolate",
      "myprotein-impact-whey-protein",
      "on-amino-energy-bcaa",
      "muscleblaze-bcaa-pro-6000",
      "as-it-is-atom-whey-protein",
      "on-protein-one-bar",
    ],
  },
  {
    id: "goal-003",
    title: "Bulk Up Fast",
    description:
      "Gain size and mass quickly with high-calorie mass gainers, protein supplements, and performance enhancers engineered for hard gainers.",
    icon: "📈",
    products: [
      "dymatize-super-mass-gainer",
      "bsn-true-mass-1200",
      "muscleblaze-real-mass-gainer",
      "myprotein-bulk-mass-gainer",
      "nakpro-massive-gainer",
      "on-gold-standard-whey-protein",
    ],
  },
  {
    id: "goal-004",
    title: "Boost Performance & Endurance",
    description:
      "Push past your limits with pre-workouts, creatine, and BCAAs that enhance energy output, delay fatigue, and sharpen focus during training.",
    icon: "⚡",
    products: [
      "bsn-no-xplode-pre-workout",
      "muscleblaze-charge-pre-workout",
      "myprotein-the-pre-workout",
      "on-micronized-creatine-monohydrate",
      "as-it-is-creatine-monohydrate-raw",
      "dymatize-bcaa-12000",
    ],
  },
  {
    id: "goal-005",
    title: "Support Overall Health",
    description:
      "Fill nutritional gaps and maintain immune health, energy, and vitality with comprehensive multivitamins and whole-food-based supplements.",
    icon: "🌿",
    products: [
      "on-opti-men-multivitamin",
      "now-foods-whole-food-multivitamin",
      "health-veda-daily-multivitamin-men",
      "now-foods-adam-mens-multi",
      "myprotein-layered-protein-bar",
      "nakpro-perform-whey-protein",
    ],
  },
  {
    id: "goal-006",
    title: "Recover Faster",
    description:
      "Reduce muscle soreness and speed up recovery with BCAAs, whey proteins, and amino acid formulas that rebuild muscle fibers after intense sessions.",
    icon: "🔄",
    products: [
      "on-amino-energy-bcaa",
      "muscleblaze-bcaa-pro-6000",
      "dymatize-bcaa-12000",
      "myprotein-bcaa-4-1-1",
      "bsn-syntha-6-whey-protein",
      "on-gold-standard-whey-protein",
    ],
  },
];

// Add color to fitnessGoals (mutate in place for goal section hover effects)
const GOAL_COLORS = ['#FFC107', '#EF4444', '#6366F1', '#22C55E', '#8B5CF6', '#F97316'];
fitnessGoals.forEach((g, i) => { g.color = GOAL_COLORS[i % GOAL_COLORS.length]; });

// ---------------------------------------------------------------------------
// MOCK REVIEWS
// ---------------------------------------------------------------------------
export const mockReviews = [
  { id: 'r1', user: 'Arjun S.', avatar: 'A', rating: 5, title: 'Best whey protein I have tried!', body: 'The chocolate flavor is incredible and it mixes perfectly with water. Noticed significant muscle gains within 4 weeks. Highly recommend!', verified: true, date: '15 Nov 2024', product: 'on-gold-standard-whey-protein' },
  { id: 'r2', user: 'Priya M.', avatar: 'P', rating: 5, title: 'Authentic product, fast delivery', body: 'Was skeptical at first but the product is 100% genuine. Batch code verified. Will definitely order again from The Genuine Store.', verified: true, date: '12 Nov 2024', product: 'muscleblaze-biozyme-performance-whey' },
  { id: 'r3', user: 'Rahul V.', avatar: 'R', rating: 4, title: 'Great creatine, excellent results', body: 'Been using creatine for 6 weeks and my strength has gone up noticeably. No bloating, mixes clean. Packaging was intact.', verified: true, date: '10 Nov 2024', product: 'on-micronized-creatine-monohydrate' },
  { id: 'r4', user: 'Sneha K.', avatar: 'S', rating: 5, title: 'My go-to pre-workout now', body: 'Amazing energy boost without the crash. The pump is incredible and focus is razor sharp. Customer support was also very helpful.', verified: true, date: '8 Nov 2024', product: 'bsn-no-xplode-pre-workout' },
  { id: 'r5', user: 'Vikram P.', avatar: 'V', rating: 4, title: 'Good mass gainer, taste could be better', body: 'Effective product, gained 3kg in 2 months with proper training. The vanilla flavor is a bit sweet for my taste but it works great.', verified: true, date: '5 Nov 2024', product: 'dymatize-super-mass-gainer' },
  { id: 'r6', user: 'Ananya R.', avatar: 'A', rating: 5, title: 'Superb BCAA, no compromise on quality', body: 'Tried many brands before but MuscleBlaze BCAA is something else. Recovery is noticeably faster after intense sessions. Great value!', verified: true, date: '2 Nov 2024', product: 'muscleblaze-bcaa-pro-6000' },
];

// ---------------------------------------------------------------------------
// DEFAULT EXPORT
// ---------------------------------------------------------------------------
export default products;
