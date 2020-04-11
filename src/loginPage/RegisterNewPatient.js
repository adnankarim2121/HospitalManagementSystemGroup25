import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from '../homePage/SidebarComponent';
import { HeaderComponent } from '../homePage/HeaderComponent';
import '../App.css';

import RegisterBackend from './RegisterBackend.js'

import LogoIMG from '../icons/login.png';

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

class RegisterNewPatient extends React.Component {

    state = { selectedItem: 'Register' };

    componentDidMount() {
        document.title = "Register";
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
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={"Registration"} />
                    <div className={css(styles.contentContainer)}>
                        <span><RegisterBackend img={LogoIMG} /></span>
                    </div>

                </Column>
            </Row>
        );
    }
}

export default RegisterNewPatient;