import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext() //Appcontext is like component which is like warehouse 

export const AppContextProvider=({children})=>{ //children is to get all components
    const navigate=useNavigate()
    const [user, setUser]=useState(null)
    const [isSeller, setSeller]=useState(false)
    const value={navigate,user,setSeller,setUser,isSeller}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}



export const useAppContext=()=>{
    return useContext(AppContext)
}
