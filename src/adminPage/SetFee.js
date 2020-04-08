import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';
import  Admin  from './Admin.js'
import  SetFeeBackend  from './SetFeeBackend.js'
import { Helmet } from 'react-helmet';
import LogoIMG from '../icons/login.png'
import IconBurger from '../icons/icon-burger';


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

class SetFee extends React.Component {

    state = { selectedItem: 'Set the Cancellation Fee' };

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
                    <div className={css(styles.content)}>
                        <span><SetFeeBackend img={LogoIMG} /></span>
                    </div>

                </Column>
            </Row>
        );
    }
}

export default SetFee;
