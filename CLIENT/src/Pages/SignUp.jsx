import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate, NavLink } from "react-router-dom";
import { UserContext } from '../App'

function SignUp({ setUserData }) {

    const UserData = useContext(UserContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: '',
      name: '',
      password: '',
      phone1: '',
      phone2: '',
      dressStyle: '',
      remarks: ''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    
    return (
        <>
            <div>
                <h1>Sign Up</h1>
                <form>
                    <br />
                    <div>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder='name'
                                value={formData.name}
                                onChange={changeHandler}
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder='email'
                                value={formData.email}
                                required
                                onChange={changeHandler}
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                type="text"
                                name="phone1"
                                placeholder='phone1'
                                value={formData.phone1}
                                onChange={changeHandler}
                            />
                        </div>
                        <br />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="phone2"
                            placeholder='phone2'
                            value={formData.phone2}
                            onChange={changeHandler}
                        />
                    </div>
                    <br />
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="verified password"
                            required
                            value={formData.password}
                            onChange={changeHandler}
                        />
                    </div>
                    <br />
                    <div>
                        <input
                            type="text"
                            name="dressStyle"
                            placeholder='סגנון שמלה שחלמת...'
                            value={formData.dressStyle}
                            onChange={changeHandler}
                        />
                    </div>
                    <br />
                    <div>
                        <input
                            type="text"
                            name="remarks"
                            placeholder='איך הגעת אלינו??? נשמח לשמוע'
                            value={formData.remarks}
                            onChange={changeHandler}
                        />
                    </div>
                    <br />
                    <button type="button">
                        המשך
                    </button>
                </form>
                <NavLink to="/logIn">
                    Don't have an account? Sign Up here
                </NavLink>
            </div>
        </>
    )
}

export default SignUp
