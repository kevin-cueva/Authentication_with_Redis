import React from "react";

const LandingPage = () =>{
    return(
        <div>

            <h1>Welcome React Aplications</h1>
            <h4>No estas logiado</h4>
            <div>
                <a href="/login">
                    <button>Login</button>  
                </a>
                <a href="/register">
                <button>Register</button>
                </a>
                    
            </div>

        </div>
    );
}
export default LandingPage;