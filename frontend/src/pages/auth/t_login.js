import React from 'react';

class T_login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // You can perform technician login validation here
    }

    render() {
        return (
            <div>
                <h2>Technician Login</h2>
                <form id="technicianLoginForm" onSubmit={this.handleSubmit}>
                    <input type="email" id="technicianEmail" placeholder="Email" required />
                    <input type="password" id="technicianPassword" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default T_login;
