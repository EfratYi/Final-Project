import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const LogIn = ({ setUserData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

        // const USERS_API_URL = `users?username=${formData.username}&password=${formData.password}`;

        //     const fetchUsers = async () => {
        //       try {
        //         // serverRequests('GET', USERS_API_URL, null).then((usersArr) => {
        //         //   console.log(usersArr);
        //         //   if (usersArr.length > 0) {
        //         //     const user = usersArr[0];
        //         //     console.log('User data:', user); 
        //         //     setUserData(user);
        //         //     alert(`Login successful! Welcome back ${user.username}😎`);
        //         //     const { password ,...userInLocalStorage } = user;
        //         //     localStorage.setItem('loggedInUser', JSON.stringify(userInLocalStorage));
        //         //     console.log('Stored user data:', userInLocalStorage); 
        //         //     navigate(`/home`);
        //         //   } else {
        //         //     alert("Login failed. Invalid username or password.");
        //         //   }
        //         serverRequests('POST', 'login', formData)
        //         .then((user) => {
        //           if (user) {
        //             console.log('User data:', user[0]); 
        //             setUserData(user[0]);
        //             alert(`Login successful! Welcome back ${user[0].username}😎`);
        //             localStorage.setItem('loggedInUser', JSON.stringify(user[0]));
        //             console.log('Stored user data:', user[0]); 
        //             navigate(`/home`);
        //           } else {
        //             alert("Login failed. Invalid username or password.");
        //           }

        //         })
        //       } catch (err) {
        //         alert("Login failed. An error occurred.");
        //         console.log(err);
        //       }
        //     }; 
        //     fetchUsers();
        //   }
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to log in. Please try again.');
            }
           
            const data = await response.json();
            console.log(data)
            setUserData(data);
         
            navigate('/');
            alert('Logged in successfully!');
        } catch (error) {
            console.error('Error logging in:', error);
            alert(error.message);
        }
    }

    return (

        <div>
            <h1>LogIn</h1>
            <form>
                <div>
                    <input
                        placeholder='email'
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        placeholder='password'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleSubmit}>
                    LogIn
                </button>

            </form>
            <NavLink
                to="/signUp"
            >
                Dont have an account? Sign Up here
            </NavLink>
        </div>
    );
}

export default LogIn
