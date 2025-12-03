export interface PrivateRoomType {
    id: string;
    name: string;
    nameAr: string;
    description: string;
    descriptionAr: string;
    images: string[];
    pricing: {
        daily: number;
        monthly: number;
        currency: string;
    };
    amenities: string[];
    amenitiesAr: string[];
}

export interface PrivateRoomData {
    location: {
        address: string;
        addressAr: string;
        landmark: string;
        landmarkAr: string;
        metro: string;
        metroAr: string;
        coordinates: {
            lat: number;
            lng: number;
        };
    };
    established: number;
    contact: {
        whatsapp: string;
        foodService: boolean;
    };
    rooms: PrivateRoomType[];
}

export const privateRoomData: PrivateRoomData = {
    location: {
        address: "Naif Road, opposite Malabar Supermarket, near Baniyas Metro",
        addressAr: " نایف، مقابل سوپرمارکت ملبار، نزدیک مترو بنی یاس",
        landmark: "Opposite Malabar Supermarket",
        landmarkAr: "مقابل سوپرمارکت ملبار",
        metro: "3-minute walk to Baniyas Metro",
        metroAr: "۳ دقیقه پیاده‌روی تا مترو بنی یاس",
        coordinates: {
            lat: 25.2685,
            lng: 55.3048
        }
    },
    established: 2025,
    contact: {
        whatsapp: "+971521900874",
        foodService: true
    },
    rooms: [
        {
            id: "shared-room",
            name: "Private Room - Shared Facilities",
            nameAr: "اتاق خصوصی",
            description: "Affordable private room with shared bathroom and kitchen facilities in the heart of Naif, strategically located opposite Malabar Supermarket.",
            descriptionAr: "اتاق خصوصی مقرون‌به‌صرفه با سرویس حمام و آشپزخانه مشترک در قلب نایف، واقع در مقابل سوپرمارکت ملبار.",
            images: [
                "https://drive.google.com/uc?export=view&id=1ERBoDU6asyd5NIzxNPfPMPhhEOAGwTIS",
                "https://drive.google.com/uc?export=view&id=1WN9BzimX0e5GSMsRhGes0XTe7PafvIXq",
                "https://drive.google.com/uc?export=view&id=1jTsUHxlAj3wm7pjdstPSvM9n8vOFWAx5",
                "https://drive.google.com/uc?export=view&id=1x-ggcj5hXWNZQDeSuHHHwIF_zYOcZ0C6"
            ],
            pricing: {
                daily: 100,
                monthly: 3000,
                currency: "AED"
            },
            amenities: [
                "Private room with AC",
                "Shared bathroom facilities",
                "Shared kitchen access",
                "WiFi included",
                "24/7 access",
                "Opposite major supermarket",
                "Near metro station",
                "Budget-friendly rates"
            ],
            amenitiesAr: [
                "اتاق خصوصی با تهویه مطبوع",
                "امکانات حمام مشترک",
                "دسترسی به آشپزخانه مشترک",
                "وای‌فای شامل",
                "دسترسی ۲۴/۷",
                "مقابل سوپرمارکت بزرگ",
                "نزدیک ایستگاه مترو",
                "نرخ‌های مقرون‌به‌صرفه"
            ]
        },
        {
            id: "studio-flat",
            name: "Private Studio Flat",
            nameAr: "استودیو فلت اختصاصی",
            description: "Exclusive studio flat with private bathroom and kitchenette in prime Naif location, offering complete independence and privacy.",
            descriptionAr: "استودیو فلت اختصاصی با حمام و آشپزخانه خصوصی در موقعیت عالی نایف، ارائه استقلال و حریم خصوصی کامل.",
            images: [
                "https://drive.google.com/uc?export=view&id=1a0zGBq7rBbp3UJdxzNK3e7fJUxvIqq8s",
                "https://drive.google.com/uc?export=view&id=1Ae8IzdIv6wyfD6Dh2igWJHfwIJZGZEQC",
                "https://drive.google.com/uc?export=view&id=1ufh9oPPXqm2dvjqh3mubiAeOLUUSxEMn",
                "https://drive.google.com/uc?export=view&id=1jLlwQtqZw9cXTrIE3fh-o2yahkCaCEpV",
                "https://drive.google.com/uc?export=view&id=1ERBoDU6asyd5NIzxNPfPMPhhEOAGwTIS",
                "https://drive.google.com/uc?export=view&id=1WN9BzimX0e5GSMsRhGes0XTe7PafvIXq",
                "https://drive.google.com/uc?export=view&id=1jTsUHxlAj3wm7pjdstPSvM9n8vOFWAx5",
                "https://drive.google.com/uc?export=view&id=1x-ggcj5hXWNZQDeSuHHHwIF_zYOcZ0C6"
            ],
            pricing: {
                daily: 160,
                monthly: 4800,
                currency: "AED"
            },
            amenities: [
                "Private studio flat",
                "Private bathroom",
                "Private kitchenette",
                "AC included",
                "WiFi included",
                "24/7 access",
                "Complete independence",
                "Opposite major supermarket",
                "Near metro station"
            ],
            amenitiesAr: [
                "استودیو فلت اختصاصی",
                "حمام خصوصی",
                "آشپزخانه خصوصی",
                "تهویه مطبوع شامل",
                "وای‌فای شامل",
                "دسترسی ۲۴/۷",
                "استقلال کامل",
                "مقابل سوپرمارکت بزرگ",
                "نزدیک ایستگاه مترو"
            ]
        }
    ]
};

export const nearbyAttractions = {
    en: [
        {
            name: "Malabar Supermarket",
            description: "Major supermarket directly opposite - convenience at your doorstep",
            distance: "0 minutes (opposite)",
            category: "shopping"
        },
        {
            name: "Baniyas Metro Station",
            description: "Green Line metro station for easy city connectivity",
            distance: "2-minute walk",
            category: "transport"
        },
        {
            name: "Naif Souk",
            description: "Traditional market for textiles, clothing and local goods",
            distance: "3-minute walk",
            category: "shopping"
        },
        {
            name: "Gold Souk",
            description: "World-famous gold market with hundreds of jewelry shops",
            distance: "8-minute walk",
            category: "attractions"
        },
        {
            name: "Spice Souk",
            description: "Aromatic spice market with traditional herbs and spices",
            distance: "10-minute walk",
            category: "attractions"
        }
    ],
    ar: [
        {
            name: "سوپرمارکت ملبار",
            description: "سوپرمارکت بزرگ مستقیماً روبرو - راحتی در آستانه خانه شما",
            distance: "۰ دقیقه (روبرو)",
            category: "خرید"
        },
        {
            name: "ایستگاه مترو بنی یاس",
            description: "ایستگاه مترو خط سبز برای اتصال آسان به شهر",
            distance: "۳ دقیقه پیاده‌روی",
            category: "حمل‌ونقل"
        },
        {
            name: "بازار نایف",
            description: "بازار سنتی برای منسوجات، لباس و کالاهای محلی",
            distance: "۳ دقیقه پیاده‌روی",
            category: "خرید"
        },
        {
            name: "بازار طلا",
            description: "بازار طلای مشهور جهان با صدها مغازه جواهر",
            distance: "۸ دقیقه پیاده‌روی",
            category: "جاذبه‌ها"
        },
        {
            name: "بازار ادویه",
            description: "بازار ادویه معطر با گیاهان دارویی و ادویه‌های سنتی",
            distance: "۱۰ دقیقه پیاده‌روی",
            category: "جاذبه‌ها"
        }
    ]
};

export const marketingContent = {
    en: {
        headline: "Affordable Private Rooms in Prime Naif Location",
        subheadline: "Opposite Malabar Supermarket • 2 mins to Baniyas Metro • Heart of Traditional Dubai",
        callToAction: "Contact via WhatsApp for bookings and availability",
        whatsappMessage: "Hi! I'm interested in the Private Rooms in Naif opposite Malabar Supermarket. Please send details about availability."
    },
    ar: {
        headline: "اتاق‌های خصوصی مقرون‌به‌صرفه در موقعیت عالی نایف",
        subheadline: "مقابل سوپرمارکت ملبار • ۳ دقیقه تا مترو بنی یاس • قلب دبی سنتی",
        callToAction: "از طریق واتساپ برای رزرو و موجودی تماس بگیرید",
        whatsappMessage: "سلام! من به اتاق‌های خصوصی در نایف مقابل سوپرمارکت ملبار علاقه‌مند هستم. لطفاً جزئیات موجودی را ارسال کنید."
    }
};