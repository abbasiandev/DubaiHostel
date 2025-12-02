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
  size: number; // in sqm
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
    district: "Naif, Deira (opposite Malabar Supermarket)",
    districtAr: "نایف، دیره (مقابل سوپرمارکت ملبار)",
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
    id: "shared-dorm-8",
    name: "8-bed mixed dorm",
    nameAr: "اتاق ۸ تخته",
    price: 50,
    originalPrice: 70,
    image: "https://drive.google.com/uc?export=view&id=1QS5UTT97-YhSVEnbGTXHcSTzEmRC8BoK",
    images: [
      "https://drive.google.com/uc?export=view&id=1QS5UTT97-YhSVEnbGTXHcSTzEmRC8BoK",
      "https://drive.google.com/uc?export=view&id=11D5uUh4unq7W4zuJR7PWCYbTPwZHtZDv",
      "https://drive.google.com/uc?export=view&id=1bZ6zpCD7BQ-wUqETiHKjsLvPd3Na_PWU"
    ],
    amenities: ["wifi", "ac", "locker", "reading_light", "power_outlet"],
    description: "Our most popular option! Comfortable bunk beds with privacy curtains, personal reading lights and secure lockers. Great for solo travelers looking to meet new people.",
    descriptionAr: "محبوب‌ترین گزینه ما! تخت‌های راحت دو طبقه با پرده‌های حریم خصوصی، چراغ مطالعه شخصی و کمدهای امن. عالی برای مسافران انفرادی که می‌خواهند افراد جدید ملاقات کنند.",
    features: ["Privacy curtains", "Personal reading light", "Secure locker", "Shared bathroom", "24/7 access"],
    featuresAr: ["پرده‌های حریم خصوصی", "چراغ مطالعه شخصی", "کمد امن", "حمام مشترک", "دسترسی ۲۴ ساعته"],
    available: true,
    size: 16
  },
  {
    id: "shared-dorm-10",
    name: "10-bed mixed dorm",
    nameAr: "اتاق ۱۰ تخته",
    price: 35,
    image: "https://drive.google.com/uc?export=view&id=1rilfpKK2jtEFg4pwIO49AdDzVe_84U2G",
    images: [
      "https://drive.google.com/uc?export=view&id=1rilfpKK2jtEFg4pwIO49AdDzVe_84U2G",
      "https://drive.google.com/uc?export=view&id=1Oe48fLESxe3LxMWSoPyb1J7wAvn9qOjs"
    ],
    amenities: ["wifi", "ac", "locker", "reading_light", "power_outlet"],
    description: "Affordable dorm with modern amenities. Each bed has its own storage space and charging port. Great for backpackers and budget travelers.",
    descriptionAr: "خوابگاه مقرون‌به‌صرفه با امکانات مدرن. هر تخت دارای فضای ذخیره شخصی و پورت شارژ است. عالی برای کوله‌گردان و مسافران بودجه‌محدود.",
    features: ["Modern bunk beds", "Personal storage", "Charging ports", "Shared facilities", "Common area access"],
    featuresAr: ["تخت‌های مدرن دو طبقه", "فضای ذخیره شخصی", "پورت‌های شارژ", "امکانات مشترک", "دسترسی به فضای عمومی"],
    available: true,
    size: 20
  },
  {
    id: "private-single",
    name: "Private single room",
    nameAr: "اتاق خصوصی یک نفره",
    price: 85,
    image: "https://drive.google.com/uc?export=view&id=1IgVAv9kpomS0BU268551CmYQ82NJhS4v",
    images: [
      "https://drive.google.com/uc?export=view&id=1IgVAv9kpomS0BU268551CmYQ82NJhS4v",
      "https://drive.google.com/uc?export=view&id=1ng67hHIq3jLO_Ig72LXyy4qhMBT-nQwn"
    ],
    amenities: ["wifi", "ac", "private_bathroom", "tv", "mini_fridge", "work_desk"],
    description: "Perfect for travelers looking for privacy and comfort. Includes a private bathroom, work desk, and all the modern amenities for a comfortable stay.",
    descriptionAr: "عالی برای مسافرانی که به دنبال حریم خصوصی و راحتی هستند. شامل حمام خصوصی، میز کار و تمام امکانات مدرن برای اقامتی راحت.",
    features: ["Private bathroom", "Work desk", "Mini fridge", "TV", "City view", "Daily housekeeping"],
    featuresAr: ["حمام خصوصی", "میز کار", "یخچال کوچک", "تلویزیون", "منظره شهر", "نظافت روزانه"],
    available: true,
    size: 12
  },
  {
    id: "private-double",
    name: "Private double room",
    nameAr: "اتاق خصوصی دو نفره",
    price: 120,
    image: "https://drive.google.com/uc?export=view&id=11D5uUh4unq7W4zuJR7PWCYbTPwZHtZDv",
    images: [
      "https://drive.google.com/uc?export=view&id=11D5uUh4unq7W4zuJR7PWCYbTPwZHtZDv",
      "https://drive.google.com/uc?export=view&id=1bZ6zpCD7BQ-wUqETiHKjsLvPd3Na_PWU"
    ],
    amenities: ["wifi", "ac", "private_bathroom", "tv", "mini_fridge", "work_desk", "balcony"],
    description: "A spacious room perfect for couples or friends traveling together. Features a comfortable double bed and a private balcony with city views.",
    descriptionAr: "اتاق جادار عالی برای زوج‌ها یا دوستانی که با هم سفر می‌کنند. دارای تخت راحت دو نفره و بالکن خصوصی با منظره شهر.",
    features: ["Double bed", "Private balcony", "City views", "Seating area", "Premium linens", "Room service"],
    featuresAr: ["تخت دو نفره", "بالکن خصوصی", "منظره شهر", "منطقه نشیمن", "ملحفه پریمیوم", "سرویس اتاق"],
    available: true,
    size: 18
  },
];

export const amenities: Amenity[] = [
  { id: "wifi", name: "Free WiFi", nameAr: "وای‌فای رایگان", icon: "Wifi", category: "connectivity", description: "High-speed internet", descriptionAr: "اینترنت پرسرعت" },
  { id: "ac", name: "Air Conditioning", nameAr: "تهویه مطبوع", icon: "Snowflake", category: "comfort", description: "Climate control", descriptionAr: "کنترل آب و هوا" },
  { id: "locker", name: "Security Locker", nameAr: "کمد امن", icon: "Lock", category: "safety", description: "Personal storage", descriptionAr: "ذخیره شخصی" },
  { id: "reading_light", name: "Reading Light", nameAr: "چراغ مطالعه", icon: "Lamp", category: "comfort", description: "Personal lighting", descriptionAr: "نورپردازی شخصی" },
  { id: "power_outlet", name: "Power Outlets", nameAr: "پریز برق", icon: "Zap", category: "essential", description: "Device charging", descriptionAr: "شارژ دستگاه" },
  { id: "shared_bathroom", name: "Shared Bathroom", nameAr: "حمام مشترک", icon: "Bath", category: "essential", description: "Clean facilities", descriptionAr: "امکانات تمیز" },
  { id: "food_service", name: "Food Service", nameAr: "سرویس غذا", icon: "Utensils", category: "comfort", description: "Available via WhatsApp", descriptionAr: "از طریق واتساپ" },
  { id: "metro_access", name: "Metro Access", nameAr: "دسترسی مترو", icon: "Train", category: "connectivity", description: "2-min to Baniyas Metro", descriptionAr: "۳ دقیقه تا مترو بنی یاس" },
  { id: "metro_access", name: "Metro Access", nameAr: "دسترسی مترو", icon: "Train", category: "connectivity", description: "2-min to Baniyas Metro", descriptionAr: "۳ دقیقه تا مترو بنی یاس" },
  { id: "supermarket_opposite", name: "Supermarket Opposite", nameAr: "سوپرمارکت روبرو", icon: "ShoppingBag", category: "comfort", description: "Malabar Supermarket", descriptionAr: "سوپرمارکت ملبارملبار" },
];

export const getRoomById = (id: string): RoomType | undefined => {
  return roomTypes.find(room => room.id === id);
};

export const getAvailableRooms = (): RoomType[] => {
  return roomTypes.filter(room => room.available);
};

export const hostels = roomTypes;
export const getHostelById = getRoomById;
export const getFeaturedHostels = getAvailableRooms;