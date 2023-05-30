import React, { createContext, useContext, useState, useEffect, useRef } from 'react';



const GlobalContext = createContext();

const GlobalProvider = ({ children }) => { // children is the component that is wrapped by the provider

    const [globalState, setGlobalState] = useState({}); // globalState is the state that is shared by all components
    
    const [ isLoggedin , setIsLoggedin ] = useState(false); // globalState is the state that is shared by all components

    const globalStateRef = useRef(); // globalStateRef is a reference to the globalState

    globalStateRef.current = globalState; // globalStateRef is a reference to the globalState
    
    const globalContext = { // globalContext is the object that is shared by all components
        isLoggedin, // isLoggedin is the state that is shared by all components
        setIsLoggedin // setIsLoggedin is the function that is shared by all components
    };

    // children is representing the const or functions that is wrapped by the provider which is GlobalProvider in this case





  return (
// globalContext is the object that is shared by all components and globalState is the state that is shared by all components
    <GlobalContext.Provider value={{ globalState, setGlobalState }}> 

      {children}

    </GlobalContext.Provider>
// {children} represents the component that is wrapped by the provider
  );

};

export { GlobalContext, GlobalProvider };
