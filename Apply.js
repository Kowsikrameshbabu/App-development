import "./Apply.css";
import React, { useState } from "react";

const Apply = () => {
    
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        experience: '',
        address: '',
        city: '',
        pincode: '',
        date: '',
        cv: null,
    });

    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: type === 'file' ? files[0] : value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault(); 

        
        const { firstName, lastName, email, experience, address, city, pincode, date, cv } = formValues;

        
        if (!firstName || !lastName || !email || !experience || !address || !city || !pincode || !date || !cv) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        
        alert("Form Submitted Successfully");

    
    };

    return (
        <div className="applymaindiv">
            <div className="applyform">
                <h2>JOB APPLICATION FORM</h2>
                <form onSubmit={handleSubmit}>
                    <div className="appflexrow">
                        <div className="appflex1">
                            <label>First Name*</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formValues.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="appflex1">
                            <label>Last Name*</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formValues.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="appflexrow">
                        <div className="appflex1">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="appflex1">
                            <label>Experience</label>
                            <input
                                type="text"
                                name="experience"
                                placeholder="Enter in Years"
                                value={formValues.experience}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="adddiv">
                        <label>Address</label>
                        <textarea
                            name="address"
                            rows="4"
                            cols="50"
                            placeholder="Enter your text here"
                            value={formValues.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <div className="appflexrow">
                            <div className="appflex1">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter City"
                                    value={formValues.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="appflex1">
                                <label>Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    placeholder="Enter Pincode"
                                    value={formValues.pincode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="appflexrow">
                        <div className="appDate">
                            <label>Date</label>
                            <input
                                type="date"
                                name="date"
                                placeholder=""
                                value={formValues.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="cv">
                            <label>Upload your CV</label>
                            <input
                                type="file"
                                name="cv"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="submitapply">
                        <button type="submit">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Apply;
