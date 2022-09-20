import { useContext } from "react";
import { useEffect,useState } from "react";
import { createContext } from "react";

const defaultValue = null;

const ContextOfScroll = createContext(defaultValue)

const ScrollProvider = ({children})=>
{
    const navBgColor = "#67E2EA"
    const [bgColor , setBgColor ] = useState("transparent")
      
    
    // const scrollHandler= () =>
    //     {
    //         setBgColor(navBgColor)
    //     }
    
    //     useEffect (scrollHandler,bgColor)



return(
<ContextOfScroll.Provider value={{bgColor,setBgColor}}>
    {children}
</ContextOfScroll.Provider>
);



};
const useScroll = () => useContext(ContextOfScroll)


export{useScroll , ScrollProvider}