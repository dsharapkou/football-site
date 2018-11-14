import React from 'react';

class Navbar extends React.PureComponent {
    render() {
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a href="https://vk.com/urozhaynaya" className="navbar-brand">Главная</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav flex-row mx-md-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Команда
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Общая информация</a>
                                <a className="dropdown-item" href="#">Руководство</a>
                                <a className="dropdown-item" href="#">Стадион</a>
                                <a className="dropdown-item" href="#">Контакты</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Клуб
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Зал славы</a>
                                <a className="dropdown-item" href="#">История</a>
                                <a className="dropdown-item" href="#">Игроки</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Школа
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Расписание</a>
                                <a className="dropdown-item" href="#">Группы</a>
                                <a className="dropdown-item" href="#">Вопрос-ответ</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
