import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/coffee_paper_bg.jpg'

export default function SignUpPage() {
    const [formData, setFormData] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formData))
        const response = await fetch('http://127.0.0.1:8000/user/register/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        }).then(response => response.json())
        .catch(error => console.error(error));
        // Do something with the response, such as updating the UI
    }

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value
        });
    }

    return (
        <header style={ HeaderStyle }>
            <div className="text-center m-5-auto">
                {/* <h2>Join us</h2> */}
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="name">Username</label><br/>
                        <input type="text" name="name" onChange={handleChange} required />
                    </p>
                    <p>
                        <label htmlFor="email">Email address</label><br/>
                        <input type="email" name="email" onChange={handleChange} required />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name="password" onChange={handleChange} requiredc />
                    </p>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        </header>
    )

}

const HeaderStyle = {
    width: "100%",
    height: "100%",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}