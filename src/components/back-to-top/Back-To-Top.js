import { useState, useEffect } from "react";
import './back-to-top.css';

import styled from 'styled-components';

const Back = styled.a`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: fixed;
    bottom: 50px;
    right: 40px;
    width: 50px;
    height: 40px;
    margin: 0px;
    color: #ffffff;
    font-size: 18px;
    background: #da1d25;
    color: #ffffff;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 999;

    &:hover {color: #ffffff; }
    &:focus {color: #ffffff; }
`;


const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <div id="back-to-top" class="back-to-top">
    {" "}
        {showTopBtn && (
            <Back href="/#" onClick={goToTop}> <i class="fas fa-angle-up"></i></Back>
            )}{" "}
    </div>
    );
}

export default BackToTop;