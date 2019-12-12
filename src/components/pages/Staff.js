import React, { Component } from 'react'

class Staff extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: ''
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserName: idToken.idToken.claims.name,
            currentUserEmail: idToken.idToken.claims.email
        });
    }

    render() {
        const { currentUserName, currentUserEmail } = (this.state);
        return (
            <div>
                <h1>Welcome { currentUserName }</h1>
                <p>Email: { currentUserEmail }</p>
                <p>You have reached the authorized staff area of the portal</p>
            </div>
        )
    }
}

export default Staff;