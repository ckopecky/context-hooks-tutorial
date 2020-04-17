import React, { Component } from 'react';

class ToggleAuth extends Component {
    
    render() {
        return (
            <button style={{background: this.props.theme.button, borderRadius: '20px', color: this.props.theme.text}}onClick={this.props.toggleAuth}>
                {this.props.loggedIn ? 'Logged In': 'Logged Out'}
            </button>
        );
    }
}

export default ToggleAuth;