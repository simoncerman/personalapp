import React, { Component } from 'react';


class Container extends Component {
    render() {
        return (
        <div className="container" style={{backgroundColor: "#1D1D1B", padding: ".5rem", borderRadius: ".5rem"}}>
            {this.props.children}
        </div>
        );
    }
}

export default Container;
