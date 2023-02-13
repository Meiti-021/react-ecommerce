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
    address: "",
    content: "درباره ما",
  },
  {
    address: "",
    content: "پشتیبانی",
  },
];

const shopInfo = [
  {
    icon: "",
    counter: "",
    title: "",
    content: "",
    address: "",
  },
  {
    icon: "",
    counter: "",
    title: "",
    content: "",
    address: "",
  },
  {
    icon: "",
    counter: "",
    title: "",
    content: "",
    address: "",
  },
];

const userNavInfo = [
  {
    id: "nav-profile",
    icon: <CgProfile />,
    address: "/account-info",
  },
  {
    id: "nav-wish-list",
    icon: <RiHeart3Line />,
    address: "/wish-list",
  },
  {
    id: "nav-cart",
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
        address: "#",
        content: "کامپیوتر و لوازم جانبی کامپیوتر",
      },
      {
        address: "#",
        content: "لپتاپ وتبلت",
      },
      {
        address: "#",
        content: "موبایل و لوازم جانبی",
      },
      {
        address: "#",
        content: "تلوزیون هوشمند",
      },
    ],
  },
  {
    title: "اینجا بپرس",
    options: [
      {
        address: "#",
        content: "در مورد حساب کاربری",
      },
      {
        address: "#",
        content: "کالاهای مرجوعی",
      },
      {
        address: "#",
        content: "سیاست های ارسال محصولات",
      },
      {
        address: "#",
        content: "تعویض کالا",
      },
      {
        address: "#",
        content: "سیاست های حریم خصوصی",
      },
      {
        address: "#",
        content: "مجوزها و گواهی ها",
      },
    ],
  },
  {
    title: "آشنایی با ما",
    options: [
      {
        address: "#",
        content: "حریم خصوصی",
      },
      {
        address: "#",
        content: "درباره ما",
      },
      {
        address: "#",
        content: "ارجاع کالا",
      },
      {
        address: "#",
        content: "مجوزها و گواهی ها",
      },
      {
        address: "#",
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
};
