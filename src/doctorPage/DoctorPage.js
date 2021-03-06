// Importing all necessary components required
import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';

// Styling the webpage attributes
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

// Class DoctorPage
class DoctorPage extends React.Component {

    // Class variable
    state = { selectedItem: 'My Schedule' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Doctor";
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    // Render components for the webpage. HTML tags.
    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <span>Content</span>
                    </div>
                </Column>
            </Row>
        );
    }
}

// Exporting component so other files can use component
export default DoctorPage;
