import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand">Главная</NavLink>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav flex-row mx-md-auto">
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Команда
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/team/about">Общая информация</NavLink>
                            <NavLink className="dropdown-item" to="/team/leadership">Руководство</NavLink>
                            <NavLink className="dropdown-item" to="/team/stadium">Стадион</NavLink>
                            <NavLink className="dropdown-item" to="/team/contacts">Контакты</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Клуб
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/club/gloryhall">Зал славы</NavLink>
                            <NavLink className="dropdown-item" to="/club/history">История</NavLink>
                            <NavLink className="dropdown-item" to="/club/players">Игроки</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Школа
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/school/about">Общая информация</NavLink>
                            <NavLink className="dropdown-item" to="/school/groups">Группы</NavLink>
                            <NavLink className="dropdown-item" to="/school/FAQ">Вопрос-ответ</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
