import { useState } from "react";
import { MenuOptionsInterface } from "../../../types/header.types";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartRounded";

export const useNavbarModel = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions: MenuOptionsInterface[] = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Testimonials", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> },
    { text: "Cart", icon: <ShoppingCartIcon /> },
  ];
  return { openMenu, setOpenMenu, menuOptions };
};
