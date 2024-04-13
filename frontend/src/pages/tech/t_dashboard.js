import React from 'react';
import '../../css/t_dashboard.css'

class T_dashboard extends React.Component {
    state = {
        nearbyProblems: [
            { id: 1, description: 'Leaking faucet in the kitchen' },
            { id: 2, description: 'Broken ceiling fan in the living room' },
            { id: 3, description: 'Clogged drain in the bathroom' },
            { id: 4, description: 'Malfunctioning thermostat in the bedroom' }
        ],
        selectedProblem: '',
        bidAmount: '',
        details: ''
    };

    handleProblemChange = (event) => {
        this.setState({ selectedProblem: event.target.value, bidAmount: '' });
    }

    handleBidAmountChange = (event) => {
        this.setState({ bidAmount: event.target.value });
    }

    handleDetailsChange = (event) => {
        this.setState({ details: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateBidForm()) {
            // Form is valid, submit the bid
            console.log('Bid placed successfully!');
            // You can add AJAX request here to submit the bid to the server
        }
    }

    validateBidForm = () => {
        const { bidAmount, details } = this.state;
        let isValid = true;

        if (bidAmount.trim() === '') {
            isValid = false;
            alert('Please enter the bid amount.');
        }

        if (details.trim() === '') {
            isValid = false;
            alert('Please enter the details.');
        }

        return isValid;
    }

    render() {
        const { nearbyProblems, selectedProblem, bidAmount, details } = this.state;

        return (
            <div>
                <header>
                    <h1>Technician Dashboard</h1>
                </header>

                <main>
                    <section id="viewProblems">
                        <h2>View Nearby Problems</h2>
                        <ul>
                            {nearbyProblems.map(problem => (
                                <li key={problem.id}>{problem.description}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="placeBid">
                        <h2>Place Bid</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="problemSelect">Select Problem:</label>
                                <select id="problemSelect" value={selectedProblem} onChange={this.handleProblemChange} required>
                                    <option value="">Select a problem</option>
                                    {nearbyProblems.map(problem => (
                                        <option key={problem.id} value={problem.description}>{problem.description}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bidAmount">Bid Amount:</label>
                                <input type="number" id="bidAmount" value={bidAmount} onChange={this.handleBidAmountChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="details">Details:</label>
                                <textarea id="details" value={details} onChange={this.handleDetailsChange} required></textarea>
                            </div>
                            <button type="submit">Place Bid</button>
                        </form>
                    </section>
                </main>

            </div>
        );
    }
}

export default T_dashboard;
