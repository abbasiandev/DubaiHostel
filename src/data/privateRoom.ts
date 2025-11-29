export interface PrivateRoomData {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
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
  pricing: {
    daily: number;
    monthly: number;
    currency: string;
  };
  established: number;
  contact: {
    whatsapp: string;
    foodService: boolean;
  };
  amenities: string[];
  amenitiesAr: string[];
}

export const privateRoomData: PrivateRoomData = {
  name: "Private Room - Naif",
  nameAr: "اتاق خصوصی - نایف",
  description: "Affordable private accommodation in the heart of Naif, strategically located opposite Malabar Supermarket for ultimate convenience. Just steps away from Baniyas Metro station, this budget-friendly room offers excellent connectivity to all Dubai attractions while being nestled in the vibrant Naif neighborhood known for its traditional souks and authentic Dubai experience.",
  descriptionAr: "اقامت خصوصی مقرون‌به‌صرفه در قلب نایف، واقع در مقابل سوپرمارکت مالابار برای راحتی نهایی. تنها چند قدم تا ایستگاه مترو بنیاس، این اتاق مقرون‌به‌صرفه اتصال عالی به تمام جاذبه‌های دبی را ارائه می‌دهد در حالی که در محله پر جنب و جوش نایف قرار دارد که به خاطر بازارهای سنتی و تجربه اصیل دبی شناخته می‌شود.",
  location: {
    address: "Naif Road, opposite Malabar Supermarket, near Baniyas Metro",
    addressAr: "جاده نایف، مقابل سوپرمارکت مالابار، نزدیک مترو بنیاس",
    landmark: "Opposite Malabar Supermarket",
    landmarkAr: "مقابل سوپرمارکت مالابار",
    metro: "2-minute walk to Baniyas Metro",
    metroAr: "۲ دقیقه پیاده‌روی تا مترو بنیاس",
    coordinates: {
      lat: 25.2685,
      lng: 55.3048
    }
  },
  pricing: {
    daily: 50,
    monthly: 900,
    currency: "AED"
  },
  established: 2025,
  contact: {
    whatsapp: "+971 50 123 4567",
    foodService: true
  },
  amenities: [
    "Private room with AC",
    "Shared bathroom facilities", 
    "WiFi included",
    "24/7 access",
    "Opposite major supermarket",
    "Near metro station",
    "Food service available",
    "Budget-friendly rates"
  ],
  amenitiesAr: [
    "اتاق خصوصی با تهویه مطبوع",
    "امکانات حمام مشترک",
    "وای‌فای شامل",
    "دسترسی ۲۴/۷",
    "مقابل سوپرمارکت بزرگ",
    "نزدیک ایستگاه مترو",
    "سرویس غذا موجود",
    "نرخ‌های مقرون‌به‌صرفه"
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
    },
    {
      name: "Al Sabkha Bus Station",
      description: "Major bus terminal connecting to all Emirates",
      distance: "5-minute walk",
      category: "transport"
    },
    {
      name: "Deira City Centre",
      description: "Large shopping mall with dining and entertainment",
      distance: "1 metro stop",
      category: "shopping"
    },
    {
      name: "Dubai Creek",
      description: "Historic waterway with abra boats and creek cruises",
      distance: "12-minute walk",
      category: "attractions"
    },
    {
      name: "Al Ghurair Centre", 
      description: "One of Dubai's oldest shopping centers",
      distance: "1 metro stop",
      category: "shopping"
    },
    {
      name: "Iranian Hostel Dubai",
      description: "Nearby accommodation option in the same neighborhood",
      distance: "3-minute walk",
      category: "accommodation"
    }
  ],
  ar: [
    {
      name: "سوپرمارکت مالابار",
      description: "سوپرمارکت بزرگ مستقیماً روبرو - راحتی در آستانه خانه شما",
      distance: "۰ دقیقه (روبرو)",
      category: "خرید"
    },
    {
      name: "ایستگاه مترو بنیاس",
      description: "ایستگاه مترو خط سبز برای اتصال آسان به شهر",
      distance: "۲ دقیقه پیاده‌روی",
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
    },
    {
      name: "ایستگاه اتوبوس السبخه",
      description: "ترمینال اصلی اتوبوس متصل به تمام امارات",
      distance: "۵ دقیقه پیاده‌روی",
      category: "حمل‌ونقل"
    },
    {
      name: "مرکز شهر دیره",
      description: "مرکز خرید بزرگ با غذا و سرگرمی",
      distance: "۱ ایستگاه مترو",
      category: "خرید"
    },
    {
      name: "خور دبی",
      description: "آبراه تاریخی با قایق‌های ابرا و کروز خور",
      distance: "۱۲ دقیقه پیاده‌روی",
      category: "جاذبه‌ها"
    },
    {
      name: "مرکز الغریر",
      description: "یکی از قدیمی‌ترین مراکز خرید دبی",
      distance: "۱ ایستگاه مترو",
      category: "خرید"
    },
    {
      name: "هاستل ایرانی دبی",
      description: "گزینه اقامت نزدیک در همان محله",
      distance: "۳ دقیقه پیاده‌روی",
      category: "اقامت"
    }
  ]
};

export const marketingContent = {
  en: {
    headline: "Affordable Private Room in Prime Naif Location",
    subheadline: "Opposite Malabar Supermarket • 2 mins to Baniyas Metro • Heart of Traditional Dubai",
    keyFeatures: [
      "Strategic location opposite major supermarket",
      "Just 2 minutes walk to Baniyas Metro station", 
      "Budget-friendly: 50 AED/day, 900 AED/month",
      "Food service available via WhatsApp",
      "Operating since 2025 with reliable service",
      "Perfect for budget travelers and residents"
    ],
    callToAction: "Contact via WhatsApp for bookings and food service requests",
    whatsappMessage: "Hi! I'm interested in the Private Room in Naif opposite Malabar Supermarket. Please send details about availability and food service options."
  },
  ar: {
    headline: "اتاق خصوصی مقرون‌به‌صرفه در موقعیت عالی نایف",
    subheadline: "مقابل سوپرمارکت مالابار • ۲ دقیقه تا مترو بنیاس • قلب دبی سنتی",
    keyFeatures: [
      "موقعیت استراتژیک مقابل سوپرمارکت بزرگ",
      "تنها ۲ دقیقه پیاده‌روی تا ایستگاه مترو بنیاس",
      "مقرون‌به‌صرفه: ۵۰ درهم/روز، ۹۰۰ درهم/ماه",
      "سرویس غذا از طریق واتساپ",
      "فعالیت از سال ۲۰۲۵ با خدمات قابل اعتماد",
      "عالی برای مسافران و ساکنان با بودجه محدود"
    ],
    callToAction: "از طریق واتساپ برای رزرو و درخواست سرویس غذا تماس بگیرید",
    whatsappMessage: "سلام! من به اتاق خصوصی در نایف مقابل سوپرمارکت مالابار علاقه‌مند هستم. لطفاً جزئیات موجودی و گزینه‌های سرویس غذا را ارسال کنید."
  }
};