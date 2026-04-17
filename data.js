/* ============================================================
   ASCEND 2.0 — data.js
   Product catalog: 50+ items across 6 categories
============================================================ */

'use strict';

const ASCEND_PRODUCTS = [

  /* ── DUMBBELLS ─────────────────────────────────────────── */
  {
    id: 1,
    name: 'Pro Hex Dumbbell Set (5–50 lb)',
    price: 289,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    rating: 4.9,
    tag: 'best',
    description: 'Complete rubber hex dumbbell set with storage rack.'
  },
  {
    id: 2,
    name: 'Adjustable Dumbbell Pair 5–52.5 lb',
    price: 349,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&q=80',
    rating: 4.8,
    tag: 'best',
    description: 'Space-saving dial-select dumbbells, replaces 15 pairs.'
  },
  {
    id: 3,
    name: 'Chrome Studio Dumbbell 10 lb',
    price: 24,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&q=80',
    rating: 4.5,
    description: 'Polished chrome finish, knurled center grip.'
  },
  {
    id: 4,
    name: 'Neoprene Dumbbell Set 3–10 lb',
    price: 59,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    rating: 4.6,
    tag: 'new',
    description: 'Color-coded, soft-grip neoprene for home workouts.'
  },
  {
    id: 5,
    name: 'Cast Iron Dumbbell 25 lb (Pair)',
    price: 79,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=600&q=80',
    rating: 4.7,
    description: 'Heavy-duty cast iron, ergonomic rubber grip.'
  },
  {
    id: 6,
    name: 'Urethane Pro Dumbbell 45 lb',
    price: 139,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80',
    rating: 4.8,
    tag: 'new',
    description: 'Commercial-grade urethane coating, floor-safe design.'
  },
  {
    id: 7,
    name: 'Fixed Weight Dumbbell 35 lb (Pair)',
    price: 95,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    rating: 4.5,
    description: 'Contoured steel grip, welded weight plates.'
  },
  {
    id: 8,
    name: 'Rubber Encased Dumbbell 20 lb (Pair)',
    price: 64,
    category: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    rating: 4.6,
    description: 'Overmolded rubber shell, flat-edge prevents rolling.'
  },

  /* ── BARBELLS ──────────────────────────────────────────── */
  {
    id: 9,
    name: 'Olympic Power Bar 45 lb',
    price: 299,
    category: 'Barbells',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    rating: 4.9,
    tag: 'best',
    description: '28 mm shaft, 215k PSI tensile strength, dual knurl marks.'
  },
  {
    id: 10,
    name: 'EZ Curl Bar with Collars',
    price: 89,
    category: 'Barbells',
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&q=80',
    rating: 4.7,
    description: 'Multi-angle grip reduces wrist strain for curls & tricep work.'
  },
  {
    id: 11,
    name: 'Hex Trap Bar 60 lb',
    price: 229,
    category: 'Barbells',
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80',
    rating: 4.8,
    tag: 'new',
    description: 'Open-hex design for deadlifts, shrugs & farmer carries.'
  },
  {
    id: 12,
    name: 'Safety Squat Bar',
    price: 279,
    category: 'Barbells',
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&q=80',
    rating: 4.7,
    description: 'Padded yoke, cambered angle reduces shoulder strain.'
  },
  {
    id: 13,
    name: 'Swiss Multi-Grip Bar',
    price: 199,
    category: 'Barbells',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80',
    rating: 4.6,
    description: 'Neutral, pronated & supinated grip options in one bar.'
  },
  {
    id: 14,
    name: 'Standard Barbell + 110 lb Plate Set',
    price: 149,
    category: 'Barbells',
    image: 'https://images.unsplash.com/photo-1567598508481-65985588e295?w=600&q=80',
    rating: 4.5,
    description: 'Perfect starter barbell set for home gym builds.'
  },

  /* ── MACHINES ──────────────────────────────────────────── */
  {
    id: 15,
    name: 'Functional Trainer Cable Machine',
    price: 1299,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80',
    rating: 4.9,
    tag: 'best',
    description: 'Dual 200 lb weight stacks, 18 cable positions.'
  },
  {
    id: 16,
    name: 'Smith Machine with Safety',
    price: 899,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    rating: 4.8,
    description: 'Counter-balanced bar, linear bearings, 1000 lb capacity.'
  },
  {
    id: 17,
    name: 'Leg Press / Hack Squat Combo',
    price: 1199,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&q=80',
    rating: 4.7,
    tag: 'new',
    description: 'Converts between leg press and hack squat in seconds.'
  },
  {
    id: 18,
    name: 'Lat Pulldown / Low Row Machine',
    price: 699,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80',
    rating: 4.8,
    description: '250 lb weight stack, wide & narrow grip attachments included.'
  },
  {
    id: 19,
    name: 'Seated Chest Press Machine',
    price: 799,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    rating: 4.6,
    description: 'Independent arm movement, adjustable seat and chest pad.'
  },
  {
    id: 20,
    name: 'Rowing Ergometer Machine',
    price: 1099,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    rating: 4.9,
    tag: 'best',
    description: 'Air-resistance flywheel, PM5 performance monitor.'
  },
  {
    id: 21,
    name: 'Assault AirBike Pro',
    price: 849,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    rating: 4.8,
    description: 'Unlimited resistance, full-body HIIT beast.'
  },
  {
    id: 22,
    name: 'Glute Ham Developer (GHD)',
    price: 449,
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&q=80',
    rating: 4.7,
    tag: 'new',
    description: 'Heavy-gauge steel, adjustable hip pad, floor anchors included.'
  },

  /* ── ACCESSORIES ───────────────────────────────────────── */
  {
    id: 23,
    name: 'Neoprene Lifting Belt 4"',
    price: 49,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    rating: 4.6,
    description: 'Dual velcro closure, 4" wide lumbar support.'
  },
  {
    id: 24,
    name: 'Leather Power Lifting Belt 4"',
    price: 119,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=600&q=80',
    rating: 4.9,
    tag: 'best',
    description: 'Full-grain leather, lever buckle, IPF approved.'
  },
  {
    id: 25,
    name: 'Knee Sleeves (Pair) 7mm',
    price: 59,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&q=80',
    rating: 4.8,
    description: 'Neoprene compression sleeves for squats and heavy knee work.'
  },
  {
    id: 26,
    name: 'Lifting Straps (Pair)',
    price: 19,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    rating: 4.7,
    description: 'Cotton-padded wrist straps for deadlifts and rows.'
  },
  {
    id: 27,
    name: 'Gymnastic Chalk Block (8-Pack)',
    price: 14,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    rating: 4.5,
    description: 'Pure magnesium carbonate, no residue formula.'
  },
  {
    id: 28,
    name: 'Foam Roller Pro 24"',
    price: 34,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&q=80',
    rating: 4.6,
    tag: 'new',
    description: 'High-density EVA foam, grid-texture surface for myofascial release.'
  },
  {
    id: 29,
    name: 'Dip Belt with Chain',
    price: 44,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&q=80',
    rating: 4.7,
    description: 'Nylon belt + 36" chain, 400 lb rated carabiner.'
  },
  {
    id: 30,
    name: 'Pull-Up Bar Doorway Mount',
    price: 39,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    rating: 4.5,
    description: 'No-screw installation, neutral, wide & close grip positions.'
  },
  {
    id: 31,
    name: 'Ab Wheel Roller',
    price: 22,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    rating: 4.4,
    description: 'Wide dual-wheel for stability, non-slip handles.'
  },
  {
    id: 32,
    name: 'Wrist Wraps 24" (Pair)',
    price: 29,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80',
    rating: 4.7,
    tag: 'new',
    description: 'Stiff elastic wrap, velcro thumb loop, 500 lb pressure-tested.'
  },
  {
    id: 33,
    name: 'Elbow Sleeves 5mm (Pair)',
    price: 39,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&q=80',
    rating: 4.6,
    description: 'Neoprene compression, reduces elbow pain during pressing.'
  },

  /* ── RESISTANCE BANDS ──────────────────────────────────── */
  {
    id: 34,
    name: 'Monster Loop Band Set (5 Bands)',
    price: 44,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80',
    rating: 4.8,
    tag: 'best',
    description: '10–200 lb resistance range, 41" loop, fabric bag included.'
  },
  {
    id: 35,
    name: 'Hip Circle Booty Band Set',
    price: 24,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80',
    rating: 4.7,
    description: 'Fabric-covered, no-roll design, 3 resistance levels.'
  },
  {
    id: 36,
    name: 'Pull-Up Assist Band 1/2"',
    price: 16,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&q=80',
    rating: 4.6,
    description: '15–35 lb of assistance, great for banded pull-up training.'
  },
  {
    id: 37,
    name: 'Tube Band Set with Handles',
    price: 29,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80',
    rating: 4.5,
    description: '5-piece set, door anchor, ankle straps, exercise guide.'
  },
  {
    id: 38,
    name: 'Figure-8 Band (Heavy)',
    price: 14,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80',
    rating: 4.4,
    description: 'Dual-loop band for row and flye movements.'
  },
  {
    id: 39,
    name: 'Banded Deadlift Set (2 Bands)',
    price: 54,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    rating: 4.7,
    tag: 'new',
    description: 'Thick 2.5" bands rated for 300 lb, adds accommodating resistance.'
  },
  {
    id: 40,
    name: 'Lateral Resistance Band',
    price: 18,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1567598508481-65985588e295?w=600&q=80',
    rating: 4.5,
    description: 'Ankle-cuff band for glute activation and lateral walks.'
  },
  {
    id: 41,
    name: 'X3 Bar Bar with Bands System',
    price: 189,
    category: 'Resistance Bands',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    rating: 4.6,
    description: 'Olympic bar with variable resistance band training system.'
  },

  /* ── BENCHES ───────────────────────────────────────────── */
  {
    id: 42,
    name: 'Adjustable FID Bench',
    price: 249,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    rating: 4.9,
    tag: 'best',
    description: 'Flat, incline, decline positions, 1000 lb capacity.'
  },
  {
    id: 43,
    name: 'Competition Flat Bench',
    price: 189,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    rating: 4.8,
    description: 'IPF-spec 12" wide pad, tube steel frame, non-slip feet.'
  },
  {
    id: 44,
    name: 'Folding Utility Bench',
    price: 99,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    rating: 4.5,
    description: 'Space-saving fold design, easy storage, 600 lb capacity.'
  },
  {
    id: 45,
    name: 'Preacher Curl Bench',
    price: 149,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&q=80',
    rating: 4.7,
    tag: 'new',
    description: 'Angled preacher pad, adjustable seat, EZ bar holder.'
  },
  {
    id: 46,
    name: 'Olympic Weight Bench with Rack',
    price: 399,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    rating: 4.8,
    description: 'Spotter arms, J-hooks, 1000 lb rated. Full power cage feel.'
  },
  {
    id: 47,
    name: 'Decline Ab Bench',
    price: 129,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=600&q=80',
    rating: 4.6,
    description: 'Adjustable decline angles, foam ankle roller, sit-up bench.'
  },
  {
    id: 48,
    name: 'Hyperextension / Roman Chair',
    price: 169,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80',
    rating: 4.7,
    description: 'Targets lower back, glutes, and hamstrings. 45° angle design.'
  },
  {
    id: 49,
    name: 'Standing Ab Coaster',
    price: 219,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80',
    rating: 4.5,
    tag: 'new',
    description: 'Kneeling ab roller machine, smooth track glide, full range motion.'
  },
  {
    id: 50,
    name: 'Incline / Decline Utility Bench Pro',
    price: 319,
    category: 'Benches',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80',
    rating: 4.8,
    description: 'Commercial-grade padding, 7 back positions, 4 seat positions.'
  },
  {
    id: 51,
    name: 'Plyo Box Set (3-in-1)',
    price: 159,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80',
    rating: 4.7,
    tag: 'new',
    description: '20/24/30" height options in one box. Foam-covered for safety.'
  },
  {
    id: 52,
    name: 'Battle Rope 1.5" × 50ft',
    price: 89,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&q=80',
    rating: 4.7,
    description: 'Nylon-wrapped polyester rope, wall anchor kit included.'
  },
  {
    id: 53,
    name: 'Landmine Attachment (360°)',
    price: 64,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&q=80',
    rating: 4.6,
    description: 'Rotating post sleeve, fits 1" and 2" Olympic bars.'
  }
];

/* Helper: get top-rated products */
function getMostPurchased(count = 8) {
  return [...ASCEND_PRODUCTS]
    .sort((a, b) => b.rating - a.rating || a.id - b.id)
    .slice(0, count);
}

/* Helper: get newest products */
function getNewArrivals(count = 8) {
  return ASCEND_PRODUCTS.filter(p => p.tag === 'new').slice(0, count);
}

/* Helper: get by category */
function getByCategory(cat) {
  if (!cat || cat === 'All') return ASCEND_PRODUCTS;
  return ASCEND_PRODUCTS.filter(p => p.category === cat);
}

/* Helper: get product by id */
function getProductById(id) {
  return ASCEND_PRODUCTS.find(p => p.id === +id) || null;
}
