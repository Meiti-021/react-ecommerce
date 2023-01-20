import {
  FaTruck,
  BiSupport,
  CgProfile,
  FiShoppingCart,
  RiHeart3Line,
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

export { headerOption, navList, userNavInfo };
