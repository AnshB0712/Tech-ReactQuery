import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { customAxios } from '../api/axios'
import { User } from '../types'

const useGetUsers = (page: number,dispatch) => {

    const query = useQuery({
        queryKey: ['entries',page],
        queryFn: () => customAxios.get('/',{
          params: {
            limit: 10,
            skip: (page-1)*10
          }
        }).then(({data}) => {
          const { users,total } : { users: User[],total: number} = data
          const modifiedUsers = users.map((obj: User) => {
            const { id,firstName,lastName,email,image } = obj
            return { id,firstName,lastName,email,image }
          })
          return {users: modifiedUsers,total}
        }),
        keepPreviousData: true,
        onSuccess: (data) => {
          dispatch({
            type: 'ADD',
            payload: data.users
          })
        }
       })
      
  return ({
    users: query.data?.users,
    total: query.data?.total
  })
}

export default useGetUsers
