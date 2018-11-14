import React from 'react';
import Logo from '../../../Logo';
import Body from '../Body/Body';
import Navbar from '../Navbar'

class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <Navbar />
                <Body />
            </header>
        );
    }
}

export default Header;
