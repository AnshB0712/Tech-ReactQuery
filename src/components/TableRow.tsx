import { ActionIcon, Badge, Flex, Group, Image, Stack, Text } from '@mantine/core'
import { IconPencil, IconTrash } from '@tabler/icons'
import React from 'react'

type Props = {
  user:{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  }
}

const TableRow = ({ user }: Props) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '6fr 1fr 1fr 1fr .5fr .5fr',
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
      <Text fw={500} color='dimmed' size={'sm'}>Admin</Text>
      <Stack spacing={0}>
      <Text fw={500} color='dimmed' size={'sm'}>Jun 20,2022</Text>
      <Text fw={500} color='dimmed' size={'xs'}>6:57 PM</Text>
      </Stack>
      <ActionIcon style={{justifySelf:'center'}}><IconTrash size={18}/></ActionIcon>
      <ActionIcon style={{justifySelf:'center'}}><IconPencil size={18}/></ActionIcon>
    </div>
  )
}

export default TableRow
