import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';
import { Login } from './Login.js'
// import {Header, Footer}from './Home.js';
import { Helmet } from 'react-helmet';
import LogoIMG from '../icons/login.png'
import IconBurger from '../icons/icon-burger';


const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54,
        marginLeft: 100
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop : 60

    }
});

class LoginPage extends React.Component {

    state = { selectedItem: 'Login' };

    componentDidMount() {
        document.title = "Login Page";
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.loginContainer)}>
                    <div className={css(styles.loginContainer)}>
                        <span><Login img={LogoIMG} /></span>
                    </div>

                </Column>
            </Row>
        );
    }
}

export default LoginPage;
