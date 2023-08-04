import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

import "./Header.scss";

const Header = () => {
    const [scrolled , setScrolled] = useState(false);
    const handleScroll = () =>{
        const offset  = window.scrollY;
        //console.log(offset);
        if (offset > 150) {
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        //console.log("UseEffect")
        window.addEventListener("scroll", handleScroll)
    }, []);

    return <header className= {`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">DOOR - Step .</div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <span className="cart-icon">
                    <CgShoppingCart />
                    <span>
                        5
                    </span>
                </span>
            </div>
        </div>
    </header>;
};

export default Header;
