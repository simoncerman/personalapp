import React, { Component } from 'react';

class Paragraph extends Component {
    render() {
        return (
            <p style={{color: "white", fontSize: "1rem"}}>{this.props.text}</p>
        );
    }
}

export default Paragraph;