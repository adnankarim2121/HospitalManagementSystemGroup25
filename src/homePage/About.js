import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';
import KidImg from '../images/patient-kid.jpg';
import SmileImg from '../images/patient-smile.jpg';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },

    content: {
        marginTop: 44
    },

    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }

});

class App extends React.Component {

    state = { selectedItem: 'About' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "About";

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
                    <HeaderComponent title={"About the Alberta Hospital"} />
                    <div className={css(styles.content)}>
                        <h4>This site is meant for Patients, Doctors, Nurses and the Administrator to be able to schedule their appointments in an all-in-one state of the art website!</h4>
                        <ul>
                            <li>To access the scheduling function, click on the login button on the right, then register an account or login.</li>
                            <li>If you are a first time patient, you can register yourself.</li>
                            <li>If you are a Doctor or a Nurse, contact your administrator to set up an account.</li>
                            <li>If you are the administrator, you account will have already been set up. If you need to contact the IT team, please phone this number: (403) 999-9999.</li>
                        </ul>
                        <h4>We hope your experience with Alberta Hospital is smooth and comfortable!</h4>
                        <img src={KidImg} />

                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;
