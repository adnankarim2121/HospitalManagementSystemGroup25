/*
Importing all necessary components required
*/
import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import Iframe from 'react-iframe'

import '../App.css';

/*
Styling the webpage attributes.
*/
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
    },
    
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    }
});

/*
Class SeeStats
*/
class SeeStats extends React.Component {

    /*
    Class Variable
    */
    state = { selectedItem: 'Statistics' };

    /*
    componentDidMount loads variables/functions on startup
    */
    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = this.state;
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
    Render components for the webpage. HTML tags. Graph from:https://ourworldindata.org/grapher/total-cases-covid-19
    */
    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <div className={css(styles.title)}>{"Live COVID-19 Statistics"}</div>
                        <Iframe url="https://ourworldindata.org/grapher/total-cases-covid-19"
                            width="600px"
                            height="600px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative" />
                    </div>
                </Column>
            </Row>

        );
    }
}

/*
Exporting component so other files can use component.
*/
export default SeeStats;
