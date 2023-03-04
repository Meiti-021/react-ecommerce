import {
  FaTruck,
  BiSupport,
  CgProfile,
  FiShoppingCart,
  RiHeart3Line,
  SiMotorola,
  SiOneplus,
  SiXiaomi,
  SiNokia,
  SiSamsung,
  SiApple,
  TbDiscount2,
  TbTruckDelivery,
  BsCreditCard2Back,
} from "./icons";

const headerOption = [
  {
    id: "tophead1",
    icon: <FaTruck />,
    content: (
      <p>
        ارسال
        <br /> رایگان
      </p>
    ),
  },
  {
    id: "tophead2",
    icon: <BiSupport />,
    content: (
      <p>
        پشتیبانی
        <br />
        021 255 4589
      </p>
    ),
  },
];

const navList = [
  {
    address: "/",
    content: "خانه",
  },
  {
    address: "mobiles",
    content: "موبایل",
  },
  {
    address: "tvs",
    content: "تلوزیون",
  },
  {
    address: "headphones",
    content: "هدفون",
  },
  {
    address: "laptops",
    content: "کامپیوتر",
  },
  {
    address: "/about-us",
    content: "درباره ما",
  },
  {
    address: "support",
    content: "پشتیبانی",
  },
];

const faq = [
  {
    id: 'AF:Nv"PAfafwafafdvnvakLV',
    question: "کدام روش های پرداخت را قبول میکنید؟",
    answer:
      " می‌توانید با کارت‌های اعتباری اصلی مانند ویزا، مسترکارت و آمریکن اکسپرس، پی‌پال و اپل پی پرداخت کنید.",
  },
  {
    id: "poKVAdkbnVIUBnvuuibhvIHv",
    question: "چقدر طول میکشد تا محصول من به دستم برسد؟",
    answer:
      " ارسال معمولی ما معمولاً بین 3 تا 7 روز کاری طول می کشد، با توجه به موقعیت شما. همچنین، در صورت نیاز به دریافت سریعتر سفارش، گزینه های تسریع ارسال نیز ارائه می شود",
  },
  {
    id: "GBIUVGDGVBDYofawfafgbVUd",
    question: "سیاست های مرجوع کردن کالاهای شما چیست؟",
    answer:
      "ما می خواهیم کاملاً از خرید خود رضایت داشته باشید، بنابراین یک سیاست بازگشت 30 روزه کالا داریم. اگر از سفارش خود رضایت ندارید، لطفا با ما تماس بگیرید تا به شما دستورالعمل های بازگشت کالا  ارائه شود",
  },
  {
    id: "jo;VNobnfwafaffawfafafaoa",
    question: "آیا شما حمل و نقل بین المللی نیز دارید؟",
    answer:
      "بله، ما به کشورهای انتخابی بین المللی نیز ارسال داریم. لطفاً توجه داشته باشید که زمان و هزینه ارسال، بسته به موقعیت شما ممکن است متفاوت باشد",
  },
  {
    id: "guigowiufagiuofgwfaffaiuf",
    question: "آیا میتوانم سفارش خود را پیگیری کنم؟",
    answer:
      "بله، شما یک شماره پیگیری از طریق ایمیل دریافت خواهید کرد. شما می توانید از این شماره پیگیری استفاده کنید تا وضعیت سفارش خود را بررسی کنید و تاریخ تحویل را برآورد کنید.",
  },
  {
    id: "fgauiwfgiaufgacascacscuifgbaufgbui",
    question: "اگر هنگام تحویل، سفارش من آسیب دیده باشد چه؟",
    answer:
      "اگر کالای شما آسیب دیده یا نقص داشته باشد، لطفاً به طور فوری با ما تماس بگیرید تا یک جایگزین یا بازپرداخت را ترتیب دهیم",
  },
  {
    id: "fgauiwfgiaufgauifgbaufgbui",
    question: "چگونه میتوانم یک حساب کاربری بسازم؟",
    answer:
      "روی آیکون پروفایل در لیست صفحات سایت واقع در بالای سایت کلیک کنید، سپس فرم را پر کرده و حساب خود را ایجاد کنید.",
  },
  {
    id: "fgauiwfgiaufgauifgbaufgbui",
    question: "چگونه می‌توانم با خدمات پس از فروش تماس بگیرم؟",
    answer:
      "شما می‌توانید با خدمات مشتری از طریق ایمیل، تلفن و چت آنلاین تماس بگیرید. تیم خدمات مشتری ما آماده پاسخگویی به هر سوال یا نگرانی احتمالی شماست",
  },
];

const userNavInfo = [
  {
    id: "navprofile",
    icon: <CgProfile />,
    address: "/account-info",
  },
  {
    id: "navwishlist",
    icon: <RiHeart3Line />,
    address: "/wish-list",
  },
  {
    id: "navcart",
    icon: <FiShoppingCart />,
    address: "/cart",
  },
];

const brandsData = [
  {
    icon: <SiOneplus />,
    color: "#eb0029",
    size: "",
  },
  {
    icon: <SiXiaomi />,
    color: " #fd4900",
    size: "",
  },
  {
    icon: <SiNokia />,
    color: "#183693",
    size: "75px",
  },
  {
    icon: <SiSamsung />,
    color: "#1428a0",
    size: "75px",
  },
  {
    icon: <SiApple />,
    color: "#555555",
    size: "",
  },
  {
    icon: <SiMotorola />,
    color: "#000",
    size: "",
  },
];

const serviceOptions = [
  {
    id: "jkhsadbklsaj",
    icon: <BiSupport />,
    title: "پشتیبانی آنلاین",
    description: "پاسخگویی و پشتیبانی 24 ساعته در 7 روز هفته",
  },
  {
    id: "juasdkbvlkvlkvl",
    icon: <TbDiscount2 />,
    title: "تخفیف عضویت",
    description: "بالای 10% تخفیف برای اعضای ویژه سایت ",
  },
  {
    id: "juasdkbvlkvlkvjkjbkgvsdbv",
    icon: <TbTruckDelivery />,
    title: "ارسال رایگان",
    description: "ارسال رایگان و بدون محدودیت به سراسر کشور",
  },
  {
    id: "juasdkbvlkvlkvjkjbkascbjabckgvsdbv",
    icon: <BsCreditCard2Back />,
    title: "ارجاع کالا",
    description: "ضمانت ارجاع کالا و هزینه پرداخت شده ",
  },
];

const sitemapData = [
  {
    title: "ارتباط با ما",
    options: [
      {
        address: "#",
        content:
          "تهران،خیابان ولیعصر، نرسیده بلوار امام خمینیو پلاک 99، ساختمان شرکت شاپیفای",
      },
    ],
  },
  {
    title: "رده بندی محصولات",
    options: [
      {
        address: "/laptops",
        content: "کامپیوتر و لوازم جانبی کامپیوتر",
      },
      {
        address: "/laptops",
        content: "لپتاپ وتبلت",
      },
      {
        address: "/mobiles",
        content: "موبایل و لوازم جانبی",
      },
      {
        address: "/tvs",
        content: "تلوزیون هوشمند",
      },
    ],
  },
  {
    title: "اینجا بپرس",
    options: [
      {
        address: "/support",
        content: "در مورد حساب کاربری",
      },
      {
        address: "/support",
        content: "کالاهای مرجوعی",
      },
      {
        address: "/support",
        content: "سیاست های ارسال محصولات",
      },
      {
        address: "/support",
        content: "تعویض کالا",
      },
      {
        address: "/support",
        content: "سیاست های حریم خصوصی",
      },
      {
        address: "/support",
        content: "مجوزها و گواهی ها",
      },
    ],
  },
  {
    title: "آشنایی با ما",
    options: [
      {
        address: "/about-us",
        content: "حریم خصوصی",
      },
      {
        address: "/about-us",
        content: "درباره ما",
      },
      {
        address: "/about-us",
        content: "ارجاع کالا",
      },
      {
        address: "/about-us",
        content: "مجوزها و گواهی ها",
      },
      {
        address: "/about-us",
        content: "ارتباط با ما",
      },
    ],
  },
];

export {
  headerOption,
  navList,
  userNavInfo,
  brandsData,
  serviceOptions,
  sitemapData,
  faq,
};
