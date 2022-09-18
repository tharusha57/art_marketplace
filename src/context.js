import React, {useState, useContext} from "react";


const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isSubmenuOpen , setIsSubmenuOpen] = useState(false)


    const openSubmenu = () =>{
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        <AppContext.Provider value={{openSubmenu,closeSubmenu, isSubmenuOpen, setIsSubmenuOpen}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext , AppProvider}