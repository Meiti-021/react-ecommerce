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
    address: "",
    content: "خانه",
  },
  {
    address: "",
    content: "موبایل",
  },
  {
    address: "",
    content: "تلوزیون",
  },
  {
    address: "",
    content: "لوازم برقی",
  },
  {
    address: "",
    content: "کامپیوتر",
  },
  {
    address: "",
    content: "تخفیف ها",
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
    notification: "",
    icon: <CgProfile />,
  },
  {
    notification: 2,
    icon: <RiHeart3Line />,
  },
  {
    notification: 5,
    icon: <FiShoppingCart />,
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

export { headerOption, navList, userNavInfo, brandsData, serviceOptions };
