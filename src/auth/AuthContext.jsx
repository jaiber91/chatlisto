import React, { createContext, useState, useCallback } from "react";
import { fetchSinToken } from "../helpers/Fetch";

export const AuthContext = createContext()

//Estado inicial de la App, en la autenticación
const initialState = {
    uid:null,
    checking:true,
    logged:false,
    name: null,
    email:null
}

//Provider


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialState)
    
    const login = async (email, password)=>{
        const resp = await fetchSinToken('login', {email, password}, 'POST')
        
        
        if (resp.ok) {
            localStorage.setItem('token', resp.token)
            
            const {usuario} = resp
            console.log(resp);
            setAuth({
                uid:usuario.uid,
                checking:false,
                logged:true,
                name: usuario.nombre,
                email:usuario.email,
            })
        }
        return resp.ok
    }

    const register = (nombre, email, password)=>{

    }

    const verificaToken = useCallback( ()=>{

    }, [] )

    const logout = () =>{

    }

    
    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
