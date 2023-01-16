import { User } from '../types';
import { customAxios } from './axios'

export const createUser = async (data:{
        firstName: string;
        lastName: string;
        email: string;
}) => {
            const response = await customAxios.post('/add',data);
            return response.data
}
export const getUsers = async (page: number) => {
  console.log(page)
  const response = await customAxios.get('/',{
          params: {
            limit: 10,
            skip: (page-1)*10
          }
        })
  const { users } : { users: User[]}= response.data
  const modifiedUsers = users.map((obj: User) => {
            const { id,firstName,lastName,email,image } = obj
            return { id,firstName,lastName,email,image }
          })
  return {users: modifiedUsers}
}
export const deleteUser = async(id: string | number) => {
  const response = await customAxios.delete(`/${id}`)
    return response.data
}
