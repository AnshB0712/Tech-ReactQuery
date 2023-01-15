import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { customAxios } from '../api/axios'
import { getUsers } from '../api/apiFunctions'
import { User } from '../types'

const useGetUsers = (page: number,dispatch) => {

    const query = useQuery({
        queryKey: ['entries',page],
        queryFn: () => getUsers(page),
        keepPreviousData: true,
        onSuccess: (data) => {
          dispatch({
            type: 'INITIATE_DATA',
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
