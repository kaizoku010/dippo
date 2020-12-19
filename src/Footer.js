import { Link } from 'react-router-dom';
import React from 'react'
import "./Footer.css"
// import FooterTextField from "./FooterTextField"

function Footer() {
    return (
        <div className="footer__div">
        <footer className="footer ">
            <div className="footer__holder">
                <p className="footer__holderItem">When you render the app bar position fixed,
                the dimension of the element doesn't impact the rest of the page.
                This can cause some part of your content to be invisible,
    behind the app bar. Here are 3 possible solutions:</p>
            </div>
            <div  className="footer__holder">
                <p className="footer__holderItem">When you render the app bar position fixed,
                the dimension of the element doesn't impact the rest of the page.
                This can cause some part of your content to be invisible,
    behind the app bar. Here are 3 possible solutions:</p>
            </div>
            <div  className="footer__holder">
                <p className="footer__holderItem">When you render the app bar position fixed,
                the dimension of the element doesn't impact the rest of the page.
                This can cause some part of your content to be invisible,
    behind the app bar. Here are 3 possible solutions:</p>
                </div>
                
                {/* subscribe here */}
            <div  className="footer__holder">
                    {/* <FooterTextField/> */}
                    <p className="footer__holderItem">When you render the app bar position fixed,
                the dimension of the element doesn't impact the rest of the page.
                This can cause some part of your content to be invisible,
    behind the app bar. Here are 3 possible solutions:</p>
            </div>
            </footer>

            
            <div className="footer__divider"></div>


            <div className="bottom__footer">
                <p>Copyright 2020-2021 by Kaizoku. 
                </p>
                <p>All Rights Reserved.</p>
</div>
            </div>
    )
}

export default Footer;
