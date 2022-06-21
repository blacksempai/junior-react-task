import { Component } from 'react';
import classes from './Header.module.css';
import logo from './logo.svg'
import NavigationContainer from './navigation/NavigationContainer';
import ActionsContainer from './actions/ActionsContainer';

class Header extends Component {
    render() {
        return (
            <header className={classes.header + " container"}>
                <NavigationContainer/>
                <img src={logo} alt="logo" className={classes.logo}/>
                <ActionsContainer/>
            </header>
        );
    }
}

export default Header;