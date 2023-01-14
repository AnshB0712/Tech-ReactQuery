import React, { useState } from 'react';
import {
  TextInput,
  Group,
  Button,
  Paper,
  Text,
  LoadingOverlay,
  Modal,
} from '@mantine/core';
import { IconAt } from '@tabler/icons';
import { useMutation } from '@tanstack/react-query';
import { customAxios } from '../api/axios';

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddUserModal({open,setOpen}: Props) {
    
    const [data,setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        image: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/5fa5c5947b0c2b001c0ed591.jpg'
    })

    const createUser = async (data:{
        firstName: string;
        lastName: string;
        email: string;
    }) => {
            const response = await customAxios.post('/add',data);
            return response.data
    }
    
    const {mutate,isLoading} = useMutation(createUser)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData(p => ({
        ...p,
        [e.target.name]: e.target.value
    }))

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(data)
    }
    



  return (
    <Modal opened={open} centered onClose={() => setOpen(false)} withCloseButton={false}>
    <Paper
      p={'lg'}
      shadow={'sm'}
      style={{
          position: 'relative'
        }}
        >
      <form onSubmit={e => handleSubmit(e)}>
        <LoadingOverlay visible={isLoading} />
          <Group grow>
            <TextInput
              data-autofocus
              required
              placeholder="Your first name"
              label="First name"
              name='firstName'
              value={data.firstName}
              onChange={e => handleChange(e)}
            />

            <TextInput
              required
              placeholder="Your last name"
              label="Last name"
              name='lastName'
              value={data.lastName}
              onChange={e => handleChange(e)}
              />
          </Group>

        <TextInput
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          name='email'
          value={data.email}
          onChange={e => handleChange(e)}
          icon={<IconAt size={16} stroke={1.5} />}
          />
        <Button mt="md" color="blue" type="submit" fullWidth>
            Submit
        </Button>
      </form>
    </Paper>
    </Modal>
  );
}

export default AddUserModal