import { Container, Text } from '@mantine/core'
import React,{useState,useEffect} from 'react'
import { User } from '../types'
import TableRow from './TableRow'
import EditUserModal from './EditUserModal'
import useUserContext from '../hooks/useUserContext';
import {TABLE_COLUMN_NAMES,GRID_COLUMNS_DIVISION} from '../contants'
const columnStyle = {
    display: 'grid',
    gridTemplateColumns: GRID_COLUMNS_DIVISION,
    minWidth: '100%'
}

const Table = () => {
  const {state,isLoading} = useUserContext()
  const [editFormState,setEditFormState] = useState({
    open: false
  })
  
  if(isLoading) return <Text ta='center' size={'lg'} fw={500}>Loading...</Text>
  
  return (
    <div>
    <Container style={{...columnStyle}} p={'md'} m={0}>
    {TABLE_COLUMN_NAMES.map(name => <Text  color={'dimmed'} size={'sm'} fw={500}>{name}</Text>)}
    </Container>
    {state.map((user) => 
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
