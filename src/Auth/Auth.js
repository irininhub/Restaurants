import React from 'react';


const Auth = ()=> {
    return (
        <div className="auth">
            <h3>
                Log in
            </h3>
            <div>
               <span>Login</span> <input placeholder='Enter your login'/>
                <span>Password</span> <input placeholder='Enter your password'/>
            </div>
        </div>
    );
};

export default Auth;
