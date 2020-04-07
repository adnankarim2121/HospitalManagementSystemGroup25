import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import MenuItemComponent from '../MenuItemComponent';
import LogoComponent from '../LogoComponent';

import IconBurger from '../icons/icon-burger';
import IconHome from '../icons/health.png';
import IconSchedule from '../icons/schedule.png'
import IconMyPrescriptions from '../icons/prescription.png'
import IconReferrals from '../icons/referral.png'
import IconOtherServices from '../icons/info.png'
import IconSettings from '../icons/settings.png'

import history from '../History';


const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        backgroundColor: '#482acc',
        width: 255,
        paddingTop: 32,
        height: 'calc(100% - 32px)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {

    state = { expanded: false };

    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }

  changePageToHome = (props) => {
    alert(localStorage.getItem("username"));
    window.location.href = 'http://localhost:3000/HomePage';

    //window.location.replace("http://localhost:3000/AdminPage");
  }

  changePageToSchedhule = (props) => {
    alert(localStorage.getItem("username"));
    window.location.href = 'http://localhost:3000/HomePage';

    //window.location.replace("http://localhost:3000/AdminPage");
  }

  changePageToPrescriptions= (props) => {
    alert(localStorage.getItem("username"));
    window.location.href = 'http://localhost:3000/HomePage';

    //window.location.replace("http://localhost:3000/AdminPage");
  }

  changePageToRefferals= (props) => {
    alert(localStorage.getItem("username"));
    window.location.href = 'http://localhost:3000/HomePage';

    //window.location.replace("http://localhost:3000/AdminPage");
  }

  changePageToOtherServices= (props) => {
    alert(localStorage.getItem("username"));
    window.location.href = 'http://localhost:3000/HomePage';

    //window.location.replace("http://localhost:3000/AdminPage");
  }

  changePageToSettings= (props) => {
    alert(localStorage.getItem("username"));
    window.location.href = 'http://localhost:3000/HomePage';

    //window.location.replace("http://localhost:3000/AdminPage");
  }
    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <LogoComponent
                            title="Home"
                            imgName={IconHome}
                            onClick={() => this.changePageToHome()}
                            active={this.selectedItem === 'Home'}
                        />
                        <Column className={css(styles.menuItemList)}>
                            <MenuItemComponent
                                title="My Schedule" imgName={IconSchedule}
                                onClick={() => this.onItemClicked('My Schedule')}
                                active={this.props.selectedItem === 'My Schedule'} />
                            <MenuItemComponent
                                title="My Prescriptions" imgName={IconMyPrescriptions}
                                onClick={() => this.onItemClicked('My Prescriptions')}
                                active={this.props.selectedItem === 'My Prescriptions'}
                            />
                            <MenuItemComponent
                                title="Referrals" imgName={IconReferrals}
                                onClick={() => this.onItemClicked('Referrals')}
                                active={this.props.selectedItem === 'Referrals'}
                            />
                            <MenuItemComponent
                                title="Other Services" imgName={IconOtherServices}
                                onClick={() => this.onItemClicked('Other Services')}
                                active={this.props.selectedItem === 'Other Services'} />
                            <div className={css(styles.separator)}></div>
                            <MenuItemComponent
                                title="Settings" imgName={IconSettings}
                                onClick={() => this.onItemClicked('Settings')}
                                active={this.props.selectedItem === 'Settings'} />
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export { SidebarComponent };