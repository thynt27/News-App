import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;
    //data sử dụng chung 
    const [isLogin, setisLogin] = useState(false);
    const [inforUser, setinforUser] = useState({});
    //Kho chung
    return(
        <AppContext.Provider value={{isLogin,setisLogin, inforUser,setinforUser}}>
            {children}
        </AppContext.Provider>
    )
}