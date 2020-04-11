/*
Importing all necessary components required
*/
import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

/*
Styling the webpage attributes.
*/
const styles = StyleSheet.create({
    container: {
        height: 40
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
});

/*
Class HeaderComponent
*/
function HeaderComponent(props) {
    /*
    Class Variable
    */
    const { icon, title, ...otherProps } = props;
    /*
    Render webpage
    */
    return (
        <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(styles.title)}>{title}</span>
            <Row vertical="center">
                <div className={css(styles.separator)}></div>
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

/*
Exporting component so other files can use component.
*/
export { HeaderComponent };