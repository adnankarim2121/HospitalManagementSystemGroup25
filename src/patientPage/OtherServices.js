import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';
import PatientSmile from '../images/patient-smile.jpg';
//import Calendar from 'react-calendar';

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

class PatientPage extends React.Component {

    state = {
        selectedItem: 'Other Services',
    };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Other Services";
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    onChange = date => this.setState({ date })

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <h4>Quick links for any of your healthcare needs:</h4>
                        <ul>
                            <li><a href='https://calgarycounselling.com'>Calgary Counselling Center</a></li>
                            <li><a href='https://www.alberta.ca/seniors-health-benefits.aspx'>Seniors Health Benefits</a></li>
                            <li><a href='https://myhealth.alberta.ca'>Alberta MyHealth</a></li>
                            <li><a href='https://www.albertahealthservices.ca'>Alberta Health Services</a></li>
                            <li>Call 811 for Health Link</li>
                        </ul>
                        <img src={PatientSmile} width='500' height='300'/>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default PatientPage;
