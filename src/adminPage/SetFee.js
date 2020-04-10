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
Class SetFee
*/
class SetFee extends React.Component {

    /*
    Class Variable
    */
    state = { selectedItem: 'Set Cancellation Fee' };

    /*
    componentDidMount loads variables/functions on startup
    */
    componentDidMount() {
        document.title = "Cancellation Fee";
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
                        <span><SetFeeBackend img={LogoIMG} /></span>
                    </div>

                </Column>
            </Row>
        );
    }
}

/*
Exporting component so other files can use component.
*/
export default SetFee;
