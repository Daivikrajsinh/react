import React, { useState } from 'react';

const Form = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const [showData, setShowData] = useState();
    const [errorData, setErrorData] = useState({});
    
    function handleSubmit(event) {
        event.preventDefault();
        if (validation()) {
            setShowData(userData);
            setUserData({
                userName: "",
                email: "",
                password: ""
            });
        }
    }

    function validation() {
        let valid = true;
        let errorObject = {};
        if (userData.userName.trim() === "") {
            errorObject.userName = "Invalid UserName";
            valid = false;
        }

        if (userData.email.trim() === "") {
            errorObject.email = "Invalid Email";
            valid = false;
        }

        if (userData.password.trim() === "") {
            errorObject.password = "Invalid Password";
            valid = false;
        }
        setErrorData(errorObject);
        return valid;
        

    }



    return (
        <div className="border-8 border-white rounded-3xl w-96 h-[450px] bg-transparent flex flex-col main-div items-center text-center p-6">
            <h1 className="text-gray-500 text-xl font-bold">Registration Form</h1>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="space-y-4 border">
                    <div>
                        <label htmlFor="username" className="block font-medium">User Name:</label>
                        <input type="text" placeholder='Please Enter UserName' 
                            id='username'
                            className="w-52 p-2 border rounded-md text-center input"
                            value={userData.userName}
                            onChange={(event) => setUserData({ ...userData, userName: event.target.value })} />
                        {errorData.userName && <p className="text-red-500 text-sm">{errorData.userName}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block font-medium">Email:</label>
                        <input type="email" id='email' placeholder='Please Enter Email'
                            className="w-52 p-2 border rounded-md text-center"
                            value={userData.email}
                            onChange={(event) => setUserData({ ...userData, email: event.target.value })} />
                        {errorData.email && <p className="text-red-500 text-sm">{errorData.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block font-medium">Password:</label>
                        <input type="password" id='password' placeholder='Please Enter Password'
                            className="w-52 p-2 border rounded-md text-center"
                            value={userData.password}
                            onChange={(event) => setUserData({ ...userData, password: event.target.value })} />
                        {errorData.password && <p className="text-red-500 text-sm">{errorData.password}</p>}
                    </div>

                    <div>
                        <button type='submit' 
                            className="w-36 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {
                showData && (   
                    <div className='outdiv'>
                        <h2>User Name:{showData.userName}</h2>
                        <h2>Email:{showData.email}</h2>
                        <h2>Password:{showData.password}</h2>
                    </div>
                    
                )
            }
        </div>
    );
}

export default Form;
