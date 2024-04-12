import React from 'react';

class ClientSignup extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // You can perform client signup validation here
    }

    render() {
        return (
            <div>
                <h2>Client Signup</h2>
                <div id="clientSketch"></div> {/* Add client sketch photo */}
                <form id="clientSignupForm" onSubmit={this.handleSubmit}>
                    <input type="text" id="clientUsername" placeholder="Username" required />
                    <input type="email" id="clientEmail" placeholder="Email" required />
                    <input type="password" id="clientPassword" placeholder="Password" required />
                    <button type="submit">Signup</button>
                </form>
            </div>
        );
    }
}

export default ClientSignup;
