import React from 'react';

class ClientLogin extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // You can perform client login validation here
    }

    render() {
        return (
            <div>
                <h2>Client Login</h2>
                <form id="clientLoginForm" onSubmit={this.handleSubmit}>
                    <input type="email" id="clientEmail" placeholder="Email" required />
                    <input type="password" id="clientPassword" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default ClientLogin;
