export interface RoomType {
    id: string;
    name: string;
    nameAr: string;
    price: number;
    originalPrice?: number;
    image: string;
    images: string[];
    amenities: string[];
    description: string;
    descriptionAr: string;
    features: string[];
    featuresAr: string[];
    available: boolean;
    size: number;
}

export interface Amenity {
    id: string;
    name: string;
    nameAr: string;
    icon: string;
    category: 'essential' | 'comfort' | 'connectivity' | 'safety';
    description: string;
    descriptionAr: string;
}

export interface HostelInfo {
    name: string;
    nameAr: string;
    description: string;
    descriptionAr: string;
    location: {
        address: string;
        addressAr: string;
        district: string;
        districtAr: string;
        coordinates: {
            lat: number;
            lng: number;
        };
    };
    contact: {
        phone: string;
        whatsapp: string;
        email: string;
    };
    rating: number;
    totalReviews: number;
    established: number;
    checkIn: string;
    checkOut: string;
    policies: {
        en: string[];
        fa: string[];
    };
}

export const iranianHostel: HostelInfo = {
    name: "Iranian Hostel Dubai",
    nameAr: "هاستل ایرانی دبی",
    description: "Experience authentic Persian hospitality near Baniyas Metro, opposite Malabar Supermarket in Dubai's historic Naif district. Our family-run hostel offers comfortable accommodations with shared facilities and meals available via WhatsApp contact.",
    descriptionAr: "تجربه مهمان‌نوازی اصیل ایرانی نزدیک مترو بنی یاس، مقابل سوپرمارکت ملبار در منطقه تاریخی نایف دبی. هاستل خانوادگی ما اقامت راحت با امکانات مشترک و غذا از طریق تماس واتساپ ارائه می‌دهد.",
    location: {
        address: "Near Baniyas Metro, opposite Malabar Supermarket, Naif District, Deira",
        addressAr: "نزدیک مترو بنی یاس، مقابل سوپرمارکت ملبار، منطقه نایف، دیره",
        district: "Deira Area, Bani Yas Square",
        districtAr: "منطقه دیره میدان بنی یاس",
        coordinates: {
            lat: 25.2685,
            lng: 55.3048
        }
    },
    contact: {
        phone: "+971 4 123 4567",
        whatsapp: "+971521900874",
        email: "info@iranianhostehdubai.com"
    },
    rating: 4.6,
    totalReviews: 847,
    established: 2025,
    checkIn: "14:00",
    checkOut: "11:00",
    policies: {
        en: [
            "Valid ID required for all guests",
            "24/7 front desk service",
            "Free cancellation up to 24 hours before arrival"
        ],
        fa: [
            "مدرک شناسایی معتبر برای همه مهمانان لازم است",
            "خدمات پذیرش ۲۴ ساعته",
            "لغو رایگان تا ۲۴ ساعت قبل از ورود"
        ]
    }
};

export const roomTypes: RoomType[] = [
    {
        id: "shared-dorm",
        name: "Shared Dorm",
        nameAr: "اتاق مشترک",
        price: 50,
        image: "https://drive.google.com/uc?export=view&id=1L8vkGVTxQvApz807ADOh-UyupSC6dqkp",
        images: [
            "https://drive.google.com/uc?export=view&id=1L8vkGVTxQvApz807ADOh-UyupSC6dqkp",
            "https://drive.google.com/uc?export=view&id=1bZ6zpCD7BQ-wUqETiHKjsLvPd3Na_PWU",
            "https://drive.google.com/uc?export=view&id=1rilfpKK2jtEFg4pwIO49AdDzVe_84U2G",
            "https://drive.google.com/uc?export=view&id=1_9WeCkVvDxvt8y-Un8uT8xKA7-STJTqM",
            "https://drive.google.com/uc?export=view&id=1ptr0Vi97I-XsM5IG4uP9WpnWhXmWK_Ml",
            "https://drive.google.com/uc?export=view&id=1phZfkeZZ8H1EgeHYdMLrBlFh385m-yZ6",
            "https://drive.google.com/uc?export=view&id=1ng67hHIq3jLO_Ig72LXyy4qhMBT-nQwn",
            "https://drive.google.com/uc?export=view&id=11D5uUh4unq7W4zuJR7PWCYbTPwZHtZDv",
            "https://drive.google.com/uc?export=view&id=1cPnWqJz9bKzofDKUBNSrC6CzZWRJ4ZNg",
            "https://drive.google.com/uc?export=view&id=1IgVAv9kpomS0BU268551CmYQ82NJhS4v"
        ],
        amenities: ["wifi", "ac", "locker", "reading_light", "power_outlet", "shared_bathroom"],
        description: "Comfortable shared accommodation with modern amenities. Each bed comes with privacy curtains, personal reading lights, and secure lockers. Perfect for solo travelers and backpackers looking to meet new people. Available in 8-bed and 10-bed configurations.",
        descriptionAr: "اقامت مشترک راحت با امکانات مدرن. هر تخت دارای پرده‌های حریم خصوصی، چراغ مطالعه شخصی و کمدهای امن است. عالی برای مسافران انفرادی و کوله‌گردان که می‌خواهند افراد جدید را ملاقات کنند. در دو نوع هشت تخته و ده تخته موجود است.",
        features: [
            "Privacy curtains",
            "Personal reading light",
            "Secure locker",
            "Shared bathroom",
            "24/7 access",
            "Common area",
            "Modern bunk beds",
            "Personal storage",
            "Charging ports"
        ],
        featuresAr: [
            "پرده‌های حریم خصوصی",
            "چراغ مطالعه شخصی",
            "کمد امن",
            "حمام مشترک",
            "دسترسی ۲۴ ساعته",
            "فضای عمومی",
            "تخت‌های مدرن دو طبقه",
            "فضای ذخیره شخصی",
            "پورت‌های شارژ"
        ],
        available: true,
        size: 25
    }
];

export const amenities: Amenity[] = [
    { id: "wifi", name: "Free WiFi", nameAr: "وای‌فای رایگان", icon: "Wifi", category: "connectivity", description: "High-speed internet", descriptionAr: "اینترنت پرسرعت" },
    { id: "ac", name: "Air Conditioning", nameAr: "تهویه مطبوع", icon: "Snowflake", category: "comfort", description: "Climate control", descriptionAr: "کنترل آب و هوا" },
    { id: "locker", name: "Security Locker", nameAr: "کمد امن", icon: "Lock", category: "safety", description: "Personal storage", descriptionAr: "ذخیره شخصی" },
    { id: "reading_light", name: "Reading Light", nameAr: "چراغ مطالعه", icon: "Lamp", category: "comfort", description: "Personal lighting", descriptionAr: "نورپردازی شخصی" },
    { id: "power_outlet", name: "Power Outlets", nameAr: "پریز برق", icon: "Zap", category: "essential", description: "Device charging", descriptionAr: "شارژ دستگاه" },
    { id: "shared_bathroom", name: "Shared Bathroom", nameAr: "حمام مشترک", icon: "Bath", category: "essential", description: "Clean facilities", descriptionAr: "امکانات تمیز" },
    { id: "food_service", name: "Food Service", nameAr: "سرویس غذا", icon: "Utensils", category: "comfort", description: "Available via WhatsApp", descriptionAr: "از طریق واتساپ" },
    { id: "metro_access", name: "Metro Access", nameAr: "دسترسی مترو", icon: "Train", category: "connectivity", description: "2-min to Baniyas Metro", descriptionAr: "۲ دقیقه تا مترو بنی یاس" },
    { id: "supermarket_opposite", name: "Supermarket Opposite", nameAr: "سوپرمارکت روبرو", icon: "ShoppingBag", category: "comfort", description: "Malabar Supermarket", descriptionAr: "سوپرمارکت ملبار" }
];

export const getRoomById = (id: string): RoomType | undefined => {
    return roomTypes.find(room => room.id === id);
};

export const getAvailableRooms = (): RoomType[] => {
    return roomTypes.filter(room => room.available);
};

// Alias exports for backward compatibility
export const getHostelById = getRoomById;
export const getFeaturedHostels = getAvailableRooms;