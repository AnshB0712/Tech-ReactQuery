import { ActionIcon, Badge, Flex, Group, Image, Stack, Text,Loader } from '@mantine/core'
import { IconPencil, IconTrash } from '@tabler/icons'
import React from 'react'
import { useMutation } from '@tanstack/react-query'
import useUserContext from '../hooks/useUserContext'
import {customAxios} from '../api/axios'
import {deleteUser} from '../api/apiFunctions'
import {GRID_COLUMNS_DIVISION} from '../contants'

type Props = {
  user:{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  }
}

const DeleteActionIcon = ({ id }) => {
  const {dispatch} = useUserContext()
  const { mutateAsync,isLoading } = useMutation({
    mutationFn: () => deleteUser(id),
    onSuccess: () => {
      dispatch({ 
      type:'DELETE_USER',
      payload:{ id } 
    })
    }
  })
  const handleClick = async () => {
    // DUMMYJSON API WILL THROW ERROR FOR CUSTOM ID USER CREATED MANUALLY
    if((String(id)).length <= 3)
    await mutateAsync(id)
    else 
    dispatch({ 
      type:'DELETE_USER',
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

const EditActionIcon = ({setEditFormState,user}) => {
  return (
      <ActionIcon 
      onClick={() => setEditFormState({open: true,...user})} 
      style={{justifySelf:'center'}}>
      <IconPencil size={18}/>
      </ActionIcon>
      )
}

const LastLoginDate = () => {
  const options = {
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: GRID_COLUMNS_DIVISION,
      gap: '2px',
      alignItems: 'center',
      justifyItems: 'start',
      border: '1px solid #dbdbd8',
      borderRadius:'10px',
      padding:'6px',
      marginBottom: '5px'
    }}>
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
