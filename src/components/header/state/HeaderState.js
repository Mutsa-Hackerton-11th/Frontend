import SmallCart from "../../../icons/cart/SmallCart";
import SearchIcon from "../../../icons/search/SearchIcon";
import SmallUserLoggedIcon from "../../../icons/user/SmallUserLoggedIcon";
import SearchModal from "../headerModal/search/SearchModal";
import ShoppingListModal from "../headerModal/shopping/ShoppingListModal";
import UserModal from "../headerModal/user/UserModal";

export const headerState = [
  { id: 0, text: "Home", route: "/" },
  { id: 1, text: "Category", route: "/category" },
  { id: 2, text: "Store", route: "/store" },
  { id: 3, text: "About", route: "/about" },
];

export const headerIconState = [
  { id: 0, icon: <SearchIcon />, modal: SearchModal },
  { id: 1, icon: <SmallCart />, modal: ShoppingListModal },
  { id: 2, icon: <SmallUserLoggedIcon />, modal: UserModal },
];
