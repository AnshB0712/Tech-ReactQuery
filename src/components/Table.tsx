import { Container, Text } from '@mantine/core'
import React from 'react'
import { User } from '../types'
import TableRow from './TableRow'

const columnStyle = {
    display: 'grid',
    gridTemplateColumns: '6fr 1fr 1fr 1fr .5fr .5fr',
    minWidth: '100%'
}

type Props = {
  users: User[]
}

const Table = ({ users }: Props) => {
  return (
    <div>
    <Container style={{...columnStyle}} p={'md'} m={0}>
      <Text  color={'dimmed'} size={'sm'} fw={500}>Name</Text>
      <Text  color={'dimmed'} size={'sm'} fw={500}>Status</Text>
      <Text  color={'dimmed'} size={'sm'} fw={500}>Role</Text>
      <Text  color={'dimmed'} size={'sm'} fw={500}>Last Login</Text>
    </Container>
    {users.map((user) => <TableRow key={user.id} user={user}/>)}
    </div>
  )
}

export default Table
