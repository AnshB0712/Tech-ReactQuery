import { ActionIcon, Badge, Flex, Group, Image, Stack, Text,Loader } from '@mantine/core'
import { IconPencil, IconTrash } from '@tabler/icons'
import React from 'react'
import { useMutation } from '@tanstack/react-query'
import useUserContext from '../hooks/useUserContext'
import {deleteUser} from '../api/apiFunctions'
import {TABLE_ROW_STYLES} from '../contants'
import { ActionType, EditFormState, User } from '../types'

type Props = {
  user: User,
  setEditFormState: React.Dispatch<React.SetStateAction<EditFormState>>
}

const DeleteActionIcon = ({ id }:{ id: number | string}) => {
  const {dispatch} = useUserContext()
  const { mutateAsync,isLoading } = useMutation({
    mutationFn: () => deleteUser(id),
    onSuccess: () => {
      dispatch({ 
      type:ActionType.DeleteUser,
      payload:{ id } 
    })
    }
  })
  const handleClick = async () => {
    // DUMMYJSON API WILL THROW ERROR FOR CUSTOM ID USER CREATED MANUALLY ON DELETION
    if((String(id)).length <= 3)
    await mutateAsync()
    else 
    dispatch({ 
      type: ActionType.DeleteUser,
      payload:{ id } 
    })
  }
  return (
    <ActionIcon 
    onClick={handleClick}
    style={{justifySelf:'center'}}
    >
    { !isLoading ? <IconTrash size={18}/>:<Loader size={'xs'}/>}
    </ActionIcon>
  )
}

const EditActionIcon = ({setEditFormState,user}:Props) => {
  return (
      <ActionIcon 
      onClick={() => setEditFormState({open: true,...user})} 
      style={{justifySelf:'center'}}>
      <IconPencil size={18}/>
      </ActionIcon>
      )
}

const LastLoginDate = () => {
  const options: Intl.DateTimeFormatOptions  = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }
  const [date,year,time] = (new Intl.DateTimeFormat(undefined, {...options}).format(new Date())).split(',')
  
  return (
    <>
    <Text fw={500} color='dimmed' size={'sm'}>{date},{year}</Text>
    <Text fw={500} color='dimmed' size={'xs'}>{time}</Text>
    </>
  )
  
}

const TableRow = ({ user,setEditFormState }: Props) => {
  return (
    <div style={TABLE_ROW_STYLES}>
      <Flex justify='center' align={'center'} gap={5}> 
      <Image src={user.image} style={{borderRadius:'50%', height:'35px',width:'35px'}} />
      <Stack spacing={0}>
      <Text fw={500}>{user.firstName} {user.lastName}</Text>
      <Text fw={500} color='dimmed' size={'sm'}>{user.email}</Text>
      </Stack>
      </Flex>
      <Badge color={'green'} variant='dot'>Active</Badge>
      <Text fw={500} color='dimmed' size={'sm'}>{user?.role || 'Admin'}</Text>
      <Stack spacing={0}>
      <LastLoginDate/>
      </Stack>
      <DeleteActionIcon id={user.id}/>
      <EditActionIcon
      setEditFormState={setEditFormState}
      user={user}
      />
    </div>
  )
}

export default TableRow
