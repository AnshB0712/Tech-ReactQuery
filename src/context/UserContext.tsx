import React, { createContext,useState,useReducer } from 'react'
import useGetUsers from '../hooks/useGetUsers'

export const UserContext = createContext({})

type ContextProps = {
    children: React.ReactNode
}

const reducer = (state,{type,payload}) => {
    console.log(type);
    if(type === 'ADD'){
        return [...payload]
    }
}

const UserContextProvider = ({children}:ContextProps) => {

    const [state,dispatch] = useReducer(reducer,[])
    const [page,setPage] = useState(1)
    useGetUsers(page,dispatch)

    
  return (
    <UserContext.Provider value={{page,setPage,state}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
