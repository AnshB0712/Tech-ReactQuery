import React, { createContext,useState,useReducer } from 'react'
import useGetUsers from '../hooks/useGetUsers'
import { ActionType, ContextInitState, ReducerActions, User } from '../types'

export const UserContext = createContext<ContextInitState>({
  page: 1,
  state: [],
  isLoading: false,
  dispatch: () => null,
  setPage: () => null
})

type ContextProps = {
    children: React.ReactNode
}

const reducer = (state: User[],action:ReducerActions): User[] => {
  const {type,payload} = action
    if(type === ActionType.InitiateData){
        return [...payload]
    }
    if(type === ActionType.AddUser){
        return [payload,...state]
    }
    if(type === ActionType.DeleteUser){
      const filteredUsers = state.filter((user: User) => user.id !== payload.id)
        return [...filteredUsers]
    }
    if(type === ActionType.UpdateUser){
      const updatedUsers = state.map((user: User) => {
        if(user.id !== payload.id)
        return user 
        
        return payload
      })
        return [...updatedUsers]
    }

    return state
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
