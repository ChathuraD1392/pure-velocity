import type { Dispatch } from "react";
import React from "react";

interface MenuContextType{
    isMenuVisible: boolean;
    setMenuVisible:Dispatch<boolean>
}

const MenuContext = React.createContext<MenuContextType>({} as MenuContextType)

export default MenuContext;