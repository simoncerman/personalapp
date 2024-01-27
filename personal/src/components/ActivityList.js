import React, { Component } from 'react';
import Container from './Container';
import Paragraph from './Paragraph';

// create me activeList which will have title its childrin as list items as props and a button to add new activity

class ActivityList extends Component {
    render() {
        return (
            <Container>
                <Paragraph text="Activity List" />
                <ul style={{listStyleType: "none", padding: "0"}}>
                    {this.props.children}
                </ul>
            </Container>
        );
    }
}

export default ActivityList;