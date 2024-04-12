import React from 'react';

class T_signup extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // You can perform technician signup validation here
    }

    render() {
        return (
            <div>
                <h2>Technician Signup</h2>
                <div id="technicianSketch"></div> {/* Add technician sketch photo */}
                <form id="technicianSignupForm" onSubmit={this.handleSubmit}>
                    <input type="text" id="technicianUsername" placeholder="Username" required />
                    <input type="email" id="technicianEmail" placeholder="Email" required />
                    <input type="password" id="technicianPassword" placeholder="Password" required />
                    <button type="submit">Signup</button>
                </form>
            </div>
        );
    }
}

export default T_signup;
