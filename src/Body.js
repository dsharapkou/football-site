import React, { Component } from 'react';
import './story'
import {coolStory, titleFC } from "./story";


class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="first-line">
                    <div className="bgd-image">
                        <div className="text">
                            <p className="title">{ titleFC }</p>
                            <p>{ coolStory }</p>
                        </div>
                    </div>

                </div>
                <div className="second-line">
                    <h1></h1>
                </div>
                <div>
                    <h3>Third line</h3>
                </div>
            </div>
        );
    }
}

export default Body;
