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
                    <div className="bgd-image-body">
                        <div className="logo-wrapper">
                            <p>Вперёд и только вперёд!</p>
                            <img className="img-logo" src="../../../img/favicon.png" alt="logo" />

                        </div>
                    </div>

                </div>
                <div className="second-line">
                    <div className="text">
                        <h3>КОНЦЕПЦИЯ</h3>
                        <p>Большинство игроков нашей команды - жители Минского района</p>
                        <p>Таким образом, мы представляем как Урожайную, так и соседние с ней города и села Минского района - Леонтьевичи, Сеницу, Юбилейный, Скориничи, Михановичи, Гатово и др.</p>
                        <p>Также в нашей команде были и легионеры. В частности, первый в истории Минской области футболист из Перу.</p>
                    </div>
                </div>
                <div className="third-line">
                    <div className="bgd-image-third">
                        <h3>Third line</h3>
                    </div>
                </div>
                <div className="forth-line">

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
