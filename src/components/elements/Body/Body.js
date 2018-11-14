import React from 'react';
import ContactForm from '../../../ContactForm.js';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {formValue: ''};
    }

    render() {
        const { formValue } = this.state;
        return (
            <div>
                <div className="first-line">
                    <div className="bgd-image">
                        <div className="container">
                            <div className="row">
                                <div className=".col-md-4"></div>
                                <div className=".col-md-6 text">
                                    <p>Футбольный клуб "Урожайная" основан в 2009 году в одноименной деревне Минского района Минской области Республики Беларусь.</p>
                                    <ul>ТИТУЛЫ:
                                        <li>Обладатель Кубка Минского района (Д-5) 2013, 2015, 2016</li>
                                        <li>Чемпион Первой лиги АЛФ (крупнейшая любительская лига Минска) 2017</li>
                                        <li>Победитель Gorozhane Open Cup-2016</li>
                                        <li>Чемпион МЛФ (любительская лига Минска) 2013</li>
                                    </ul>
                                    <ul>ДОСТИЖЕНИЯ
                                        <li>Полуфиналист Кубка Минской области (Д-4) 2014</li>
                                        <li>Финалист Кубка Минского района (Д-5) 2014</li>
                                        <li>Серебряный призер чемпионата Минского района (Д-5) 2014</li>
                                        <li>Серебряный призер Зимнего чемпионата АЛФ 2017-18</li>
                                        <li>Финалист Зимнего Кубка АЛФ - 2018</li>
                                        <li>Серебряный призер Чемпионата Минска по пляжному футболу - 2018</li>
                                        <li>Серебряный призер Международного турнира ALF-International - 2018</li>
                                        <li>В 2014 году команда дебютировала в Кубке Регионов Беларуси, попав в восьмерку сильнейших любительских команд страны.</li>
                                    </ul>
                                    <ul>ТУРНИРЫ
                                        <li>Чемпионат АЛФ (крупнейшая любительская лига Минска)</li>
                                        <li>Чемпионат и Кубок Минского района (Д-5)</li>
                                        <li>С 2016 - ежегодно приглашается на Рождественский "Турнир друзей" с участием звезд белорусского футбола.</li>
                                        <li>В 2018 - дебютировала на Международном турнире ALF-International</li>
                                    </ul>
                                </div>
                                <div className=".col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-line">
                    <div className="row">
                        <h3>СТАДИОН</h3>
                        <p>ФК "Урожайная" проводит домашние матчи в агрогородке Сеница на стадионе "Пентагон"</p>
                    </div>
                </div>
                <div className="third-line">
                    <h3>Third line</h3>
                </div>
                <div className="forth-line">
                    <div className="row">
                        <h3>ПРОЗВИЩА</h3>
                        <p>Небесные</p>
                        <p>Небесная машина</p>
                    </div>
                    <div className="row">
                        <h3>КОНЦЕПЦИЯ</h3>
                        <p>Большинство игроков нашей команды - жители Минского района</p>
                        <p>Таким образом, мы представляем как Урожайную, так и соседние с ней города и села Минского района - Леонтьевичи, Сеницу, Юбилейный, Скориничи, Михановичи, Гатово и др.</p>
                        <p>Также в нашей команде были и легионеры. В частности, первый в истории Минской области футболист из Перу.</p>
                    </div>
                </div>
                <div className="fifth-line">
                    <h3>Связь с нами</h3>
                    <h4>по телефону</h4>
                    <p>+375293690280</p>
                    <h4>отправить письмо</h4>
                    <ContactForm
                        formValue={formValue}
                        goState={this.setState.bind(this)}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default Body;
