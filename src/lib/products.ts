import { Product, FragranceFamily, Review } from './types';

export const fragranceFamilies: FragranceFamily[] = [
  {
    id: 'floral',
    name: 'Floral',
    description: 'Romantic and feminine with flower-based scents'
  },
  {
    id: 'oriental',
    name: 'Oriental',
    description: 'Warm and sensual with exotic spices and resins'
  },
  {
    id: 'woody',
    name: 'Woody',
    description: 'Sophisticated and grounding with wood notes'
  },
  {
    id: 'fresh',
    name: 'Fresh',
    description: 'Clean and energizing with citrus and aquatic notes'
  },
  {
    id: 'fruity',
    name: 'Fruity',
    description: 'Sweet and playful with fruit essences'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Rose',
    brand: 'Luxe Parfums',
    price: 120,
    originalPrice: 150,
    description: 'A captivating blend of deep rose petals and mysterious midnight blooms, creating an alluring and sophisticated fragrance perfect for evening wear.',
    fragrance_family: 'floral',
    fragrance_notes: {
      top: ['Black Rose', 'Pink Pepper', 'Bergamot'],
      middle: ['Rose Petals', 'Jasmine', 'Peony'],
      base: ['Sandalwood', 'Vanilla', 'Musk']
    },
    image: 'https://placehold.co/400x500?text=Elegant+dark+rose+perfume+bottle+with+gold+accents+on+marble',
    gallery: [
      'https://placehold.co/600x700?text=Midnight+Rose+perfume+bottle+elegant+studio+lighting',
      'https://placehold.co/600x700?text=Rose+petals+around+luxury+perfume+bottle+close+up',
      'https://placehold.co/600x700?text=Perfume+bottle+with+dark+roses+and+candles+mood+shot'
    ],
    slug: 'midnight-rose',
    rating: 4.8,
    reviews_count: 127,
    in_stock: true,
    size: '100ml',
    featured: true
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    brand: 'Azure Collection',
    price: 95,
    description: 'Fresh and invigorating marine fragrance that captures the essence of coastal winds and crystal-clear waters.',
    fragrance_family: 'fresh',
    fragrance_notes: {
      top: ['Sea Salt', 'Lemon', 'Marine Accord'],
      middle: ['Water Lily', 'Seaweed', 'Driftwood'],
      base: ['White Musk', 'Ambergris', 'Cedar']
    },
    image: 'https://placehold.co/400x500?text=Fresh+blue+perfume+bottle+with+ocean+waves+background',
    gallery: [
      'https://placehold.co/600x700?text=Ocean+Breeze+perfume+bottle+on+beach+sand+natural+light',
      'https://placehold.co/600x700?text=Blue+perfume+bottle+with+seashells+and+water+splash',
      'https://placehold.co/600x700?text=Coastal+perfume+bottle+with+ocean+view+sunset'
    ],
    slug: 'ocean-breeze',
    rating: 4.6,
    reviews_count: 89,
    in_stock: true,
    size: '75ml',
    featured: true
  },
  {
    id: '3',
    name: 'Golden Amber',
    brand: 'Oriental Essence',
    price: 180,
    description: 'A rich and warm oriental fragrance featuring precious amber and exotic spices, perfect for those who appreciate luxury and depth.',
    fragrance_family: 'oriental',
    fragrance_notes: {
      top: ['Cardamom', 'Cinnamon', 'Orange Blossom'],
      middle: ['Golden Amber', 'Oud', 'Rose'],
      base: ['Sandalwood', 'Vanilla', 'Benzoin']
    },
    image: 'https://placehold.co/400x500?text=Golden+amber+perfume+bottle+with+warm+spices+and+gold+details',
    gallery: [
      'https://placehold.co/600x700?text=Golden+Amber+perfume+with+amber+stones+and+warm+lighting',
      'https://placehold.co/600x700?text=Oriental+perfume+bottle+with+spices+cinnamon+cardamom',
      'https://placehold.co/600x700?text=Luxury+amber+perfume+with+golden+silk+fabric+background'
    ],
    slug: 'golden-amber',
    rating: 4.9,
    reviews_count: 203,
    in_stock: true,
    size: '100ml',
    featured: true
  },
  {
    id: '4',
    name: 'Cherry Blossom Dream',
    brand: 'Sakura House',
    price: 85,
    description: 'Delicate and ethereal fragrance inspired by Japanese cherry blossoms in full bloom, offering a soft and romantic scent experience.',
    fragrance_family: 'floral',
    fragrance_notes: {
      top: ['Cherry Blossom', 'Pear', 'Freesia'],
      middle: ['Peony', 'Lily of the Valley', 'Magnolia'],
      base: ['White Musk', 'Blonde Woods', 'Soft Amber']
    },
    image: 'https://placehold.co/400x500?text=Delicate+pink+perfume+bottle+with+cherry+blossoms+and+soft+light',
    gallery: [
      'https://placehold.co/600x700?text=Cherry+Blossom+perfume+with+pink+flowers+spring+setting',
      'https://placehold.co/600x700?text=Elegant+pink+bottle+surrounded+by+cherry+blossom+petals',
      'https://placehold.co/600x700?text=Japanese+inspired+perfume+with+bamboo+and+blossoms'
    ],
    slug: 'cherry-blossom-dream',
    rating: 4.5,
    reviews_count: 156,
    in_stock: true,
    size: '75ml',
    featured: false
  },
  {
    id: '5',
    name: 'Midnight Oud',
    brand: 'Royal Attar',
    price: 250,
    description: 'An intense and mysterious oud-based fragrance that embodies luxury and sophistication with rich Middle Eastern influences.',
    fragrance_family: 'woody',
    fragrance_notes: {
      top: ['Saffron', 'Black Pepper', 'Bergamot'],
      middle: ['Oud', 'Rose', 'Patchouli'],
      base: ['Agarwood', 'Leather', 'Dark Vanilla']
    },
    image: 'https://placehold.co/400x500?text=Dark+luxury+oud+perfume+bottle+with+gold+Arabic+calligraphy',
    gallery: [
      'https://placehold.co/600x700?text=Midnight+Oud+perfume+with+dark+wood+and+gold+accents',
      'https://placehold.co/600x700?text=Luxury+oud+bottle+with+Middle+Eastern+decorative+elements',
      'https://placehold.co/600x700?text=Premium+wooden+perfume+bottle+with+saffron+and+spices'
    ],
    slug: 'midnight-oud',
    rating: 4.7,
    reviews_count: 92,
    in_stock: true,
    size: '100ml',
    featured: false
  },
  {
    id: '6',
    name: 'Citrus Burst',
    brand: 'Fresh Essence',
    price: 65,
    description: 'Energizing and uplifting citrus fragrance perfect for daily wear, featuring a vibrant blend of fresh fruits and herbs.',
    fragrance_family: 'fresh',
    fragrance_notes: {
      top: ['Lemon', 'Orange', 'Grapefruit'],
      middle: ['Mint', 'Basil', 'Green Apple'],
      base: ['White Tea', 'Bamboo', 'Clean Musk']
    },
    image: 'https://placehold.co/400x500?text=Bright+yellow+citrus+perfume+bottle+with+fresh+fruits+background',
    gallery: [
      'https://placehold.co/600x700?text=Citrus+Burst+perfume+with+lemon+orange+grapefruit+slices',
      'https://placehold.co/600x700?text=Fresh+citrus+bottle+with+mint+leaves+and+morning+dew',
      'https://placehold.co/600x700?text=Energizing+perfume+with+colorful+citrus+fruits+splash'
    ],
    slug: 'citrus-burst',
    rating: 4.4,
    reviews_count: 78,
    in_stock: true,
    size: '50ml',
    featured: false
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    product_id: '1',
    user_name: 'Sarah M.',
    rating: 5,
    comment: 'Absolutely gorgeous fragrance! The rose is perfectly balanced and lasts all day.',
    date: '2024-01-15'
  },
  {
    id: '2',
    product_id: '1',
    user_name: 'Emma K.',
    rating: 5,
    comment: 'My new signature scent. Elegant and sophisticated, perfect for special occasions.',
    date: '2024-01-20'
  },
  {
    id: '3',
    product_id: '2',
    user_name: 'Michael R.',
    rating: 4,
    comment: 'Fresh and clean, reminds me of summer vacations by the ocean.',
    date: '2024-01-18'
  },
  {
    id: '4',
    product_id: '3',
    user_name: 'Luna S.',
    rating: 5,
    comment: 'Rich and luxurious. The amber note is divine and the longevity is excellent.',
    date: '2024-01-22'
  }
];