import React, { useState } from 'react';

function SubmitPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function HandleChange(e) {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        }
    }

    function HandleSubmit(e) {
        e.preventDefault();
        const formData = { name, email };
        console.log('Form Data:', formData);

        // Example: Send data to the backend
        fetch('http://127.0.0.1:8000/survey/survey/submit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    alert('Survey submitted successfully!');
                } else {
                    alert('Failed to submit the Survey.');
                }
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h1>You need to submit the survey along with your details! </h1>
            <form action="" onSubmit={HandleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={HandleChange} />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={HandleChange} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SubmitPage;