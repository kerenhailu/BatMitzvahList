import { createContext, useState } from 'react';
export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [count, setCount] = useState(1);
    return (
        <UsersContext.Provider value={{user, setUser,count, setCount} }>
            {children}
        </UsersContext.Provider>
    )
};


