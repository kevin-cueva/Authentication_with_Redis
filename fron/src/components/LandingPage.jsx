import React from "react";
import { useState, useEffect } from "react";
import {helpHttp} from '../helpers/helpHttp'
import httpClient from "../helpers/httpClient";  //Utilizando axios
const LandingPage = () =>{
    const [user, setUser] = useState(null);
    let URL = "http://127.0.0.1:5000/user"

    /**
     * *Consulta y trae el usuario si ya ha sido autenticado previamente
     */
    useEffect(()=>{
      (async()=>{
        try{

          const res = await httpClient.get(URL);
          setUser(res.data);
        } catch(error){
          console.log("No esta autenticado")
        }
      })();
    },[]);
    /* useEffect(()=>{
        helpHttp().get(URL).then((res)=>{
            //console.log(res)
              if(!res.err){ //Si no existe error
                setUser(res);
              }else{  //Si existe un error
                setUser(null);
              }
            }
          )
    },[]) */
    return(
        <div>
            
            <h1>Welcome React Aplications</h1>
            {user ? <h4>{user.nombre}</h4> : <h4>No esta logeado</h4>}
            
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