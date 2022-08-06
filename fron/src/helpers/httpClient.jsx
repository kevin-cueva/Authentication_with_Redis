/**
 * *Este codigo es para generar que la peticion 
 * *se pueda generar la peticion
 */
import axios from "axios";
export default axios.create({
  withCredentials:true,
});