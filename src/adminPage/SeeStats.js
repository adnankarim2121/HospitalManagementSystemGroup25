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

class SeeStats extends React.Component {

    state = { selectedItem: 'Statistics' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = this.state;
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

export default SeeStats;
