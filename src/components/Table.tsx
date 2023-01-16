import { Container, Text } from '@mantine/core'
import React,{useState,useEffect} from 'react'
import { EditFormState, User } from '../types'
import TableRow from './TableRow'
import EditUserModal from './EditUserModal'
import useUserContext from '../hooks/useUserContext';
import {TABLE_COLUMN_NAMES, TABLE_COLUMN_STYLES} from '../contants'

const Table = () => {
  const {state,isLoading} = useUserContext()
  const [editFormState,setEditFormState] = useState<EditFormState>({
    open: false,
    id: '',
    firstName: '',
    lastName: '',
    image: '',
    email: ''
  })
  
  if(isLoading) return <Text ta='center' size={'lg'} fw={500}>Loading...</Text>
  
  return (
    <div>
    <Container style={TABLE_COLUMN_STYLES} p={'md'} m={0}>
    {TABLE_COLUMN_NAMES.map(name => <Text  color={'dimmed'} size={'sm'} fw={500}>{name}</Text>)}
    </Container>
    {state.map((user: User) => 
    <TableRow 
    key={user.id} 
    user={user} 
    setEditFormState={setEditFormState}
    />)}
    <EditUserModal 
    setEditFormState={setEditFormState}
    formState={editFormState}
    />
    </div>
  )
}

export default Table
