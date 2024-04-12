import React from 'react';

class C_dashboard extends React.Component {
    handleSubmit = (event) => {
        // Validate form fields
        const description = this.descriptionRef.value.trim();
        const timeSlot = this.timeSlotRef.value.trim();

        if (description === '' || timeSlot === '') {
            alert('Please fill in all the fields.');
            event.preventDefault(); // Prevent form submission
        }
    }

    handleButtonClick = () => {
        // Implement actions for buttons here
        // If no action is needed, leave it empty
    }

    render() {
        const problems = [
            { value: 'Cleaning', label: 'Electrical' },
            { value: 'Plumber', label: 'Plumbing' },
            { value: 'Electrician', label: 'Appliance Repair' },
            { value: 'Painter', label: 'Computer Repair' },
            { value: 'Carpenter', label: 'Electrical' },
            { value: 'Gardener', label: 'Plumbing' },
            // Add more problems as needed
        ];

        return (
            <div className="container">
                <h2>Client Dashboard</h2>
                <form id="queryForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="problem">Select Problem:</label>
                        <select id="problem" name="problem" required>
                            <option value="">Select a problem</option>
                            {problems.map((problem, index) => (
                                <option key={index} value={problem.value}>{problem.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Problem Description:</label>
                        <textarea id="description" name="description" rows="4" cols="50" ref={(ref) => this.descriptionRef = ref} required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="media">Upload Media:</label>
                        <input type="file" id="media" name="media" accept="image/*, video/*" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeSlot">Schedule Time Slot:</label>
                        <input type="datetime-local" id="timeSlot" name="timeSlot" ref={(ref) => this.timeSlotRef = ref} required />
                    </div>
                    <button type="submit" onClick={this.handleButtonClick}>Submit Query</button>
                    <button type="button" onClick={this.handleButtonClick}>Another Action</button>
                    {/* Add more buttons with actions or empty functions */}
                </form>
            </div>
        );
    }
}

export default C_dashboard;
