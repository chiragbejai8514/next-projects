import '../Header/Header.css'
import links from './data.js'
import Link from 'next/link'
import React, { useState, useEffect } from "react";

const Header = () => {
    const items = links;
    let [show, setShow] = useState(false);

    const menuItems = items.map(item => (
        <li key={item.id} className="nav-item">
            <a href={item.url}>{item.name}</a>
        </li>
    ));

    useEffect(() => {
        window.addEventListener("scroll", function (event) {
            if (this.scrollY <= 10) {
                document.getElementById('header').classList.remove('change')
            }
            else {
                document.getElementById('header').classList.add('change');
            }
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    return (
        <div className="header  fixed " id="header">
            <div className="flex-wrap-row container center">
                <a className="company-name">
                    <h4>CodeCraft <small >Technologies</small></h4>
                </a>
                <div className="nav">
                    <ul className="nav-body flex-wrap-row">
                        {menuItems}
                        <li className="nav-item">
                            <Link href="/about">
                                <span className="btn-buy">Email Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="icon-hamburger" onClick={() => { show === true ? setShow(false) : setShow(true); }}   >
                    </div>
                </div>
            </div>
            <div className={`dropBox ${(show) === true ? 'show' : 'noShow'}`}>
                <div className="container">
                    {menuItems}
                </div>
            </div>
        </div>
    )
}

export default Header