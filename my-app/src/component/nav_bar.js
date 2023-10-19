import React from "react";
import "../scss/nav_bar.css";
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    return (
        <>
            <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__item">
                <Link to="/page1" className="navbar__link">Л1<i data-feather="home"></i><span>решения СЛАУ методом Крамера</span></Link>
                </li>
                <li className="navbar__item">
                <Link to="/page2" className="navbar__link">Л2<i data-feather="message-square"></i><span>решения СЛАУ методом Якоби и методом Зейделя</span></Link>        
                </li>
                <li className="navbar__item">
                <Link to="/page3" className="navbar__link">Л3<i data-feather="users"></i><span>Отделение и уточнение корней уравнения методом половинного деления</span></Link>        
                </li>
                <li className="navbar__item">
                <Link to="/L4" className="navbar__link">Л4<i data-feather="users"></i><span>Лабораторная работа нелинейные уравнения</span></Link>        
                </li>
            </ul>
            </nav>
        </>
    )
};

export default NavigationBar;
