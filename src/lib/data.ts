export const products = [
    {
        id: "rng-001",
        name: "The Royal Sapphire Halo",
        slug: "royal-sapphire-halo-ring",
        price: 4500,
        category: "rings",
        image: "/ring.png",
        hoverImage: "/ring.png", // In real app, this would be a different angle
        material: "18k White Gold",
        stone: "Blue Sapphire",
        description: "A mesmerizing 2.5ct Royal Blue Sapphire surrounded by a halo of brilliant-cut diamonds. Set in 18k White Gold, this ring captures the essence of regal elegance.",
        isNew: true
    },
    {
        id: "ear-002",
        name: "Starlight Diamond Drops",
        slug: "starlight-diamond-drops",
        price: 3200,
        category: "earrings",
        image: "/earrings.png",
        hoverImage: "/earrings.png",
        material: "Platinum",
        stone: "Diamond",
        description: "Cascading drops of light. These platinum earrings feature pear-shaped diamonds that catch every glimmer of light, perfect for evening wear.",
        isNew: true
    },
    {
        id: "nck-003",
        name: "Empress Diamond Collar",
        slug: "empress-diamond-collar",
        price: 12500,
        category: "necklaces",
        image: "/hero.png",
        hoverImage: "/hero.png",
        material: "18k Yellow Gold",
        stone: "Diamond",
        description: "A statement of absolute luxury. This intricate collar necklace features over 100 hand-set diamonds in a lace-like 18k gold structure.",
        isNew: false
    },
    {
        id: "rng-004",
        name: "Vintage Rose Promise",
        slug: "vintage-rose-promise",
        price: 2800,
        category: "rings",
        image: "/ring.png",
        hoverImage: "/ring.png",
        material: "Rose Gold",
        stone: "Morganite",
        description: "Soft, romantic, and timeless. A cushion-cut Morganite sits atop a rose gold band adorned with pavé diamonds.",
        isNew: false
    },
    {
        id: "ear-005",
        name: "Emerald City Studs",
        slug: "emerald-city-studs",
        price: 1800,
        category: "earrings",
        image: "/earrings.png",
        hoverImage: "/earrings.png",
        material: "18k Gold",
        stone: "Emerald",
        description: "Deep green emeralds in a classic bezel setting. Understated luxury for everyday wear.",
        isNew: false
    },
    {
        id: "brd-006",
        name: "Princess Solitaire",
        slug: "princess-solitaire-platinum",
        price: 6500,
        category: "bridal",
        image: "/bridal-ring-1.png",
        hoverImage: "/bridal-ring-1.png",
        material: "Platinum",
        stone: "Diamond",
        description: "A breathtaking princess-cut diamond solitaire set in pure platinum. The ultimate symbol of everlasting love, featuring a hidden halo for extra sparkle.",
        isNew: true
    },
    {
        id: "brd-007",
        name: "Eternity Pave Bands",
        slug: "eternity-pave-bands-gold",
        price: 4200,
        category: "bridal",
        image: "/bridal-ring-2.png",
        hoverImage: "/bridal-ring-2.png",
        material: "18k Yellow Gold",
        stone: "Diamond",
        description: "A set of two exquisite eternity bands, encrusted with micro-pave diamonds. Perfect as wedding bands or anniversary gifts to stack and style.",
        isNew: true
    },
    {
        id: "rng-008",
        name: "Obsidian Signet",
        slug: "obsidian-signet-ring",
        price: 2100,
        category: "rings",
        image: "/hero.png",
        hoverImage: "/hero.png",
        material: "18k Yellow Gold",
        stone: "Obsidian",
        description: "A bold, modern take on the classic signet ring. Features a polished black obsidian stone set in heavy 18k gold.",
        isNew: false
    }
];

export type Product = typeof products[0];
