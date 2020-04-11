/*
Importing all necessary components required
*/
import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from '../homePage/SidebarComponent';
import { HeaderComponent } from '../homePage/HeaderComponent';
import '../App.css';
import { Login } from './Login.js'
import LogoIMG from '../icons/login.png'

/*
Styling the webpage attributes.
*/
const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60

    }
});

/*
Class LoginPage
*/
class LoginPage extends React.Component {

    /*
    Class Variable
    */
    state = { selectedItem: 'Login' };

    /*
    componentDidMount loads variables/functions on startup
    */
    componentDidMount() {
        document.title = "Login Page";
        window.addEventListener('resize', this.resize);
    }

    /*
    componentWillUnmount is the last function to be called immediately before the component is removed from the DOM
    */
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    /*
    component re-renders.
    */
    resize = () => this.forceUpdate();

    /*
    Render components for the webpage. HTML tags.
    */
    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.contentContainer)}>
                        <span><Login img={LogoIMG} /></span>
                    </div>

                </Column>
            </Row>
        );
    }
}

/*
Exporting component so other files can use component.
*/
export default LoginPage;
