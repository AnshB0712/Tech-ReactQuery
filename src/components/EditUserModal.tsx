import React, { useState,useEffect } from 'react';
import {
  TextInput,
  Group,
  Button,
  Paper,
  Text,
  LoadingOverlay,
  Modal,
  NativeSelect
} from '@mantine/core';
import useUserContext from '../hooks/useUserContext'
import { ActionType, EditFormState } from '../types';


type Props = {
    formState: EditFormState,
    setEditFormState: React.Dispatch<React.SetStateAction<EditFormState>>
}

export function EditUserModal({formState,setEditFormState}: Props) {
    
    const [data,setData] = useState({
      ...formState
    })
    const { dispatch } = useUserContext()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => setData((p: typeof data) => ({
        ...p,
        [e.target.name]: e.target.value
    }))
    
    useEffect(() => {
      setData(formState)
    },[formState])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({
          type: ActionType.UpdateUser,
          payload: data
        })
        setEditFormState({
        open: false, 
        id: '',
        firstName: '',
        lastName: '',
        image: '',
        email: ''
      })
    }
    
  return (
    <Modal opened={formState.open} centered onClose={() => setEditFormState({
      open: false, 
      id: '',
      firstName: '',
      lastName: '',
      image: '',
      email: ''
      })} withCloseButton={false}>
      <Text size={'lg'} ta='center' fw={500}>EDIT USER</Text>
    <Paper
      p={'lg'}
      shadow={'sm'}
      style={{
          position: 'relative'
        }}
        >
      <form onSubmit={e => handleSubmit(e)}>
        <LoadingOverlay visible={false} />
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

        <NativeSelect
        data={['Admin', 'Sales', 'Operations']}
        label="User Role"
        name='role'
        onChange={e => handleChange(e)}
        value={data.role}
        />
        <Button mt="md" color="blue" type="submit" fullWidth>
            Submit
        </Button>
      </form>
    </Paper>
    </Modal>
  );
}

export default EditUserModal