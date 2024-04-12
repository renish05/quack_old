import React from 'react';

class T_dashboard extends React.Component {
    state = {
        bids: [
            { id: 1, technician: 'Vignesh', specialty: 'Plumbing', price: '500', description: 'Experienced plumber with over 10 years of experience. Specializes in residential plumbing issues.' },
            { id: 2, technician: 'Koutilya', specialty: 'Electrical', price: '450', description: 'Certified electrician available for wiring, installations, and repairs. Quality service guaranteed.' },
            { id: 3, technician: 'Renish', specialty: 'HVAC', price: '650', description: 'Heating, ventilation, and air conditioning expert. Quick response and professional service.' },
            { id: 4, technician: 'Utkarsh', specialty: 'Appliance Repair', price: '1200', description: 'Skilled appliance repair technician. Can fix all major appliances efficiently.' },
            { id: 5, technician: 'Akhil', specialty: 'Garden Cleaner', price: '1450', description: 'Experienced Gardener. Can Clean the garden perfectly.' }
        ],
        selectedBid: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { selectedBid } = this.state;
        if (!selectedBid) {
            alert('Please select a bid to accept.');
            return;
        }
        // Perform further actions (e.g., submitting the form data via AJAX)
        // Replace the alert with appropriate actions
        alert('Bid accepted successfully!');
    }

    handleBidChange = (event) => {
        this.setState({ selectedBid: event.target.value });
    }

    render() {
        const { bids, selectedBid } = this.state;

        return (
            <div>
                <h1>Welcome to Your Dashboard</h1>
                
                <h2>View Bids</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Technician Name</th>
                            <th>Specialty</th>
                            <th>Bidding Amount</th>
                            <th>Additional Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids.map((bid, index) => (
                            <tr key={bid.id}>
                                <td>{index + 1}</td>
                                <td>{bid.technician}</td>
                                <td>{bid.specialty}</td>
                                <td>{bid.price}</td>
                                <td>{bid.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2>Accept Bid</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="selectedBid">Select a Bid:</label>
                    <select id="selectedBid" value={selectedBid} onChange={this.handleBidChange}>
                        <option value="">Select a bid</option>
                        {bids.map(bid => (
                            <option key={bid.id} value={bid.id}>{bid.technician} - {bid.price}</option>
                        ))}
                    </select>
                    <button type="submit">Accept Bid</button>
                </form>
            </div>
        );
    }
}

export default T_dashboard;
