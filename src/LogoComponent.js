import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#A4A6B3',
        opacity: 0.7,
        marginLeft: 12
    },
    activeBar: {
        height: 56,
        width: 3,
        backgroundColor: '#DDE2FF',
        position: 'absolute',
        left: 0
    },
    activeContainer: {
        backgroundColor: 'rgba(221,226,255, 0.08)'
    },
    activeTitle: {
        color: '#DDE2FF'
    },
    container: {
        height: 56,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(221,226,255, 0.08)'
        },
        paddingLeft: 32,
        paddingRight: 32
    }
});

function LogoComponent(props) {
    const { active, imgName, image, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} horizontal="center" vertical="center" {...otherProps}>
            <img height = "24" width = "24" src={imgName} />
            <span className={css(styles.title, active && styles.activeTitle)}>{title}</span>
        </Row>
    );
}

export default LogoComponent;
