import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    family: "",
    email: "",
    password: "",
  },
  address: "",
  newsletterMember: "",
  membership: "normal",
  userBankCards: [
    {
      id: "3556-7589-8754-3221",
      bankName: "Sepah",
      cvv2: "702",
      date: "11/04",
    },
    {
      id: "4587-9852-6547-9865",
      bankName: "Tejarat",
      cvv2: "601",
      date: "12/22",
    },
    {
      id: "7889-5436-6589-6545",
      bankName: "Sepah",
      cvv2: "101",
      date: "22/13",
    },
    {
      id: "7898-5263-4517-4552",
      bankName: "Melli",
      cvv2: "9022",
      date: "11/11",
    },
    {
      id: "4589-8523-4565-4521",
      bankName: "Mehr",
      cvv2: "440",
      date: "06/12",
    },
    {
      id: "1232-5465-7896-3257",
      bankName: "Dey",
      cvv2: "101",
      date: "11/01",
    },
  ],
  isLogin: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, { payload }) => {
      state.userInfo = payload;
      state.isLogin = true;
    },
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    deleteAccount: (state) => {
      state.userInfo = {
        name: "",
        family: "",
        email: "",
        password: "",
      };
      (state.isLogin = false), (state.address = "");
    },
    cancelNewsletter: (state) => {
      state.newsletterMember = false;
    },
    joinNewsletter: (state, { payload }) => {
      state.newsletterMember = payload;
    },
    goPremium: (state) => {
      state.membership = "premium";
    },
  },
});

export const {
  signup,
  login,
  goPremium,
  joinNewsletter,
  cancelNewsletter,
  logout,
  deleteAccount,
} = UserSlice.actions;

export default UserSlice.reducer;
