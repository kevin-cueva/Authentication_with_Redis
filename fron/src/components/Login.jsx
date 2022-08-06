import React from "react";
import { useState } from "react";
import {helpHttp} from '../helpers/helpHttp'
import httpClient from "../helpers/httpClient";
const initialForm = {
    email: "",
    pass : "",
}
const Login = ()=>{
    const [form, setForm] = useState(initialForm);// Objeto que contiene el email y la contraseña
    
    //Metodo que envia los datos por axios
    const post = async () =>{
        try{

            const res = await httpClient.post("http://127.0.0.1:5000/login",{
                email:form.email,
                pass:form.pass,
            });
            if(res.status ==200){
                window.location.href="/";
            }
        }
        catch(error){
            if(error.response.status == 401){
                alert("Datos Invvvalidos");
            }
        }
        
    };
    //Por este metodo aun no se como se genera la autenticacion
    /* const post = (data)=>{
        const URL = 'http://127.0.0.1:5000/login';
        let encabezados = {body:data,
            headers:{'Content-Type': 'application/json'},
           };
        helpHttp().post(URL,encabezados).then((res)=>{
            if(!res.err){
                console.log(res);
              }else{
                alert("Datos no coinciden");
              }
        });
    } */

    //Controla los cambios del input
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.email || !form.pass){
            alert("Datos incompletos");
            return;
          }
        else{
            post();  
        }  
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label></label>
                <input type="email" 
                       name="email" 
                       placeholder="Email"
                       required 
                       onChange={handleChange}
                       value={form.email}
                />

                <input type="password" 
                       name="pass" 
                       placeholder="password"
                       required 
                       onChange={handleChange}
                       value={form.pass}
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}
export default Login;