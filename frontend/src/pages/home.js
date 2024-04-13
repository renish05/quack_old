import React from 'react';
import '../css/home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome To Quack!</h1>
                <p className="subheading">Please select your role:</p>
                <div className="buttons">
                    <a href="/c-login" className="button">Client</a>
                    <a href="/t-login" className="button">Technician</a>
                </div>
                <div>
                    <img src="L.png" alt="Quack Logo" className="logo" />
                </div>
            </div>
        );
    }
}

export default Home;
