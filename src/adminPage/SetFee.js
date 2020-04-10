/*
Importing all necessary components required
*/
import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';
import SetFeeBackend from './SetFeeBackend.js'
import LogoIMG from '../icons/login.png'


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

class SetFee extends React.Component {

    state = { selectedItem: 'Set Cancellation Fee' };

    componentDidMount() {
        document.title = "Cancellation Fee";
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
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.contentContainer)}>
                        <span><SetFeeBackend img={LogoIMG} /></span>
                    </div>

                </Column>
            </Row>
        );
    }
}

export default SetFee;
