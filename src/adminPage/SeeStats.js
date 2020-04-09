import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import {SidebarComponent} from './SidebarComponent';
import {HeaderComponent} from './HeaderComponent';
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
    graph: {
        width: '1000px',
        height: '100%',
        border: 'none'

    }
});

class SeeStats extends React.Component {

    state = { selectedItem: 'Live COVID-19 Statistics' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Administrator";
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
            <Iframe url="https://ourworldindata.org/grapher/total-cases-covid-19"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                    </div>
                </Column>
            </Row>

        );
    }
}

export default SeeStats;
