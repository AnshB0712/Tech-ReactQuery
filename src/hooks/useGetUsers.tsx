import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUsers } from '../api/apiFunctions'
import { ActionType, ReducerActions, User } from '../types'

const useGetUsers = (page: number,dispatch: React.Dispatch<ReducerActions>) => {

    const query = useQuery({
        queryKey: ['entries',page],
        queryFn: () => getUsers(page),
        keepPreviousData: true,
        onSuccess: (data) => {
          dispatch({
            type: ActionType.InitiateData,
            payload: data.users
          })
        }
       })
      
  return ({
    users: query.data?.users,
    isLoading: query.isLoading
  })
}

export default useGetUsers
