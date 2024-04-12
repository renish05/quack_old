import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome To Quack!</h1>
                <p className="subheading">Please select your role:</p>
                <div className="buttons">
                    <a href="http://127.0.0.1:5501/SE/cSignup.html" className="button">Client</a>
                    <a href="http://127.0.0.1:5501/SE/signup.html" className="button">Technician</a>
                </div>
                <div>
                    <img src="L.png" alt="Quack Logo" className="logo" />
                </div>
            </div>
        );
    }
}

export default Home;
