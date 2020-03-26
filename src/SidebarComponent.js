
import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconStatistics from './icons/StatIcon.png';
import IconAddPatient from './icons/AddPersonIcon.png';
import IconAddDoctor from './icons/AddPersonIcon.png';
import IconAddDepartment from './icons/AddDepartmentIcon.png';
import IconAddStaff from './icons/AddPersonIcon.png';
import IconSettings from './icons/SettingsIcon.png';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32
    },
    menuItemList: {
        marginTop: 52
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent(props) {
    return (
        <Column className={css(styles.container)}>
            <LogoComponent />
            <Column className={css(styles.menuItemList)}>
                <MenuItemComponent
                    title="Statistics" icon={IconStatistics}
                    onClick={() => props.onChange('Statistics')}
                    active={props.selectedItem === 'Statistics'}
                />
                <MenuItemComponent
                    title="Add Doctor" icon={IconAddDoctor}
                    onClick={() => props.onChange('AddDoctor')}
                    active={props.selectedItem === 'AddDoctor'}
                />
                <MenuItemComponent
                    title="Add Patient" icon={IconAddPatient}
                    onClick={() => props.onChange('Add Patient')}
                    active={props.selectedItem === 'Add Patient'} />
                <MenuItemComponent
                    title="Add Department" icon={IconAddDepartment}
                    onClick={() => props.onChange('Add Department')}
                    active={props.selectedItem === 'Add Department'} />
                <MenuItemComponent
                    title="Add Staff" icon={IconAddStaff}
                    onClick={() => props.onChange('Add Staff')}
                    active={props.selectedItem === 'Add Staff'} />
                <div className={css(styles.separator)}></div>
                <MenuItemComponent
                    title="Settings" icon={IconSettings}
                    onClick={() => props.onChange('Settings')}
                    active={props.selectedItem === 'Settings'} />
                
            </Column>
        </Column>
    );
}

export default SidebarComponent;

// https://dev.to/llorentegerman/building-a-ui-from-scratch-based-on-a-design-with-reactjs-3l1e
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>