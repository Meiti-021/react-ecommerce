import { FaTruck, BiSupport } from "./icons";

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

export { headerOption, navList };
