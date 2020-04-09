import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import MenuItemComponent from '../MenuItemComponent';
import LogoComponent from '../LogoComponent';
import Admin  from './Admin.js'

import IconBurger from '../icons/icon-burger';
import IconHome from '../icons/health.png';
import IconStatistics from '../icons/statistics.png'
import cancelLogo from '../icons/cancel.png';
import IconAddStaff from '../icons/staff.png'
import IconSettings from '../icons/settings.png'


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

    Admin = () =>
    {
        return <Admin/>
    }


  changePageToStatistics = (props) => {
    window.location.href = 'http://localhost:3000/SeeStats';
  }
  changePageToAddStaff = (props) => {
    window.location.href = 'http://localhost:3000/AddStaff';
  }

    changePageToSetFee = (props) => {
    window.location.href = 'http://localhost:3000/SetFee';
  }


  changePageToHome = (props) => {
    window.location.href = 'http://localhost:3000/';
  }


    changePageToSetSchedule = (props) => {
    window.location.href = 'http://localhost:3000/AdminAssignWorkScedhule';
  }

  changePageToLoginPage= (props) => {
    var response = window.confirm(`Are you sure you want to logout?` );
    if(response == true){
        window.location.href = 'http://localhost:3000/LoginPage';
    }
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
                                title="Statistics" imgName={IconStatistics}
                                onClick={() => this.changePageToStatistics()}
                                active={this.props.selectedItem === 'StatisticsPage'}
                            />
                            <MenuItemComponent
                                title="Assign Work Schedule" imgName={IconStatistics}
                                onClick={() => this.changePageToSetSchedule()}
                                active={this.props.selectedItem === 'Assign Work Schedule'}
                            />
                            <MenuItemComponent
                                title="Set Cancellation Fee" imgName={cancelLogo}
                                onClick={() => this.changePageToSetFee()}
                                active={this.props.selectedItem === 'Set Cancellation Fee'}
                            />
                            <MenuItemComponent
                                title="Add/Edit Hospital Staff" imgName={IconAddStaff}
                                onClick={() => this.changePageToAddStaff()}
                                active={this.props.selectedItem === 'Add/Edit Hospital Staff'} />
                            <div className={css(styles.separator)}></div>
                            <MenuItemComponent
                                title="Settings" imgName={IconSettings}
                                onClick={() => this.onItemClicked('Settings')}
                                active={this.props.selectedItem === 'Settings'} />
                            <MenuItemComponent
                                title="Logout" imgName={IconSettings}
                                onClick={() => this.changePageToLoginPage()}
                                active={this.props.selectedItem === 'Logout'} />
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export { SidebarComponent };