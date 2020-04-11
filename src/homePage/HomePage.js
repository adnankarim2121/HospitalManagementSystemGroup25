import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';
import HospitalImg from '../images/hospital.jpg';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },

    content: {
        marginTop: 54
    },

    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class App extends React.Component {

    state = { selectedItem: 'Home' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Home";

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
                    <HeaderComponent title={"Welcome to the Alberta Hosiptal Scheduling Tool!"} />
                    <div className={css(styles.content)}>
                        <img src={HospitalImg} alt='Hospital Pic' width='700' height='400' />
                        <h3> This site can do the following things:</h3>
                        <ul>
                            <li>Book an appointment</li>
                            <li>View upcoming appointments</li>
                            <li>Cancel upcoming appointment</li>
                        </ul>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;
