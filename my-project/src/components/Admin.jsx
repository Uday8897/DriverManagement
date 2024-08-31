import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        contact_number: '',
        availability_status: true,
        service_area: '',
        rating: 0,
        shift_timings: {
            start: '',
            end: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/add_driver', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
            // Handle error states here if needed
        } finally {
            // Reset the form after submission
            setFormData({
                name: '',
                contact_number: '',
                availability_status: true,
                service_area: '',
                shift_timings: {
                    start: '',
                    end: ''
                }
            });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Driver</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact_number" className="block text-gray-700">Contact Number</label>
                        <input
                            type="text"
                            id="contact_number"
                            name="contact_number"
                            value={formData.contact_number}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availability_status" className="block text-gray-700">Availability Status</label>
                        <select
                            id="availability_status"
                            name="availability_status"
                            value={formData.availability_status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-black"
                            required
                        >
                            <option value={true}>Available</option>
                            <option value={false}>Not Available</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="service_area" className="block text-gray-700">Service Area</label>
                        <input
                            type="text"
                            id="service_area"
                            name="service_area"
                            value={formData.service_area}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-black"
                            required
                        />
                    </div>
                
                    <div className="mb-4">
                        <label htmlFor="shift_start" className="block text-gray-700">Shift Start</label>
                        <input
                            type="time"
                            id="shift_start"
                            name="shift_timings.start"
                            value={formData.shift_timings.start}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="shift_end" className="block text-gray-700">Shift End</label>
                        <input
                            type="time"
                            id="shift_end"
                            name="shift_timings.end"
                            value={formData.shift_timings.end}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-black"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-black text-white rounded-lg"
                    >
                        Add Driver
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
