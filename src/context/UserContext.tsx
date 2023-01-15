import React, { createContext,useState,useReducer } from 'react'
import useGetUsers from '../hooks/useGetUsers'

export const UserContext = createContext({})

type ContextProps = {
    children: React.ReactNode
}

const reducer = (state,{type,payload}) => {
    console.log(type);
    if(type === 'INITIATE_DATA'){
        return [...payload]
    }
    if(type === 'ADD_USER'){
        return [payload,...state]
    }
    if(type === 'DELETE_USER'){
      const filteredUsers = state.filter(user => user.id !== payload.id)
        return [...filteredUsers]
    }
    if(type === 'EDIT_USER'){
      const updatedUsers = state.map(user => {
        if(user.id !== payload.id)
        return user 
        
        return payload
      })
        return [...updatedUsers]
    }
}

const UserContextProvider = ({children}:ContextProps) => {

    const [state,dispatch] = useReducer(reducer,[])
    const [page,setPage] = useState(1)
    const {isLoading} = useGetUsers(page,dispatch)

    
  return (
    <UserContext.Provider value={{
    page,setPage,
    state,dispatch,
    isLoading
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
