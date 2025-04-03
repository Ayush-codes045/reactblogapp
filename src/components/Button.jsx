import React from "react";
//ye sb production grade practice h ki gyga button use kr rhe h toh uska ek alag component bna do
export default function Button({
    children,
    //childre mtlb button ke opening and closing tag ke beech me jo kuch bhi hoga vo children me aayega
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
    //props mtlb aur kuch bhi le rhe h tho props se expand kr skte h
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}