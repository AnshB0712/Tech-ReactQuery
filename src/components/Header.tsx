import { Badge, Button, Flex, Group, Stack, Text } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
import React,{useState} from 'react'
import { AddUserModal } from './AddUserModal'

type Props = {
  total: number | undefined
}

const Header = ({total}: Props) => {
  const [open,setOpen] = useState(false)
  return (
    <>
    <Group align='center' position='apart' p={'sm'}>
        <Stack spacing={0}>
            <Flex align={'center'} justify={'start'} gap={5}>
                <Text  size={'md'} fw={500}>Users</Text>
                <Badge color={'green'} variant={'light'}>{total} Users</Badge>
            </Flex>
            <Text size={'sm'} color='dimmed'>Manage your team members and their account permission</Text>
        </Stack>
        <Button leftIcon={<IconPlus/>} onClick={() => setOpen(true)}>Add User</Button>
    </Group>
    <AddUserModal open={open} setOpen={setOpen}/>
    </>
  )
}

export default Header
