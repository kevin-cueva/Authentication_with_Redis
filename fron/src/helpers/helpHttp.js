export const helpHttp = () =>{
    const customFetch = (URL, options) =>{
      //Cabecera por defecto
      const defaultHeaders = {
          accept : "aplication/json",
      };
      //metodo para abortar la peticion e caso que el servidor este inicializador
      const controller = new AbortController();
      options.signal = controller.signal; // le agrega el metodo seiganl a las opciones y lo igualas al signal del controller
      options.method = options.method || "GET"; // Si no especifica ningun metodo por default es get
  
      //codigo para combinar el header del usuario y el que viene por defecto
      options.headers = options.headers ? {...defaultHeaders, ...options.headers}:defaultHeaders;
  
      //
      options.body = JSON.stringify(options.body) || false; //body e el key del json
      if(!options.body) delete options.body; // Si no existe el body lo elimino
  
      console.log(options);
  
      //Si en 3 seg la API no responde que lo aborde
      setTimeout(()=>controller.abort(),5000);
  
  
      return fetch(URL, options)
      .then((res)=>
        //validacion
        res.ok
        ?res.json()
        :Promise.reject({
          err:true,
          status:res.status || "00",
          statusText:res.statusText || "ocurrio un error"
        })
      )
      .catch((err)=>err);
    };
  
    //Metodo lara obtener los datos
    const get = (URL, options = {}) => customFetch(URL, options);
    //Metodo las peticiones post
    const post = (URL, options = {}) =>{
      options.method = 'POST';
      return customFetch(URL, options);
    }
    //metodo para las peticiones put
    const put = (URL, options = {}) =>{
      options.method = 'PUT';
      return customFetch(URL, options);
    }
    //metodo para las peticiones delete
    const del = (URL, options = {}) =>{
      options.method = 'DELETE';
      return customFetch(URL, options);
    }
  
    return{
      get,
      post,
      put,
      del,
    }; 
  
  }
  