import { Stack } from '@mantine/core';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Table from './components/Table';
import useGetUsers from './hooks/useGetUsers';
import { useState } from 'react'
import useUserContext from './hooks/useUserContext';

function App() {

 const {state,page,setPage} = useUserContext()
//  const {users,total} = useGetUsers(page)


 if(!state || !state.length) return <p>Loading...</p>

  return (
    <Stack p={'xl'}>
      {/* <Header total={total}/> */}
      <Table users={state}/>
      <Pagination page={page} setPage={setPage}/>
    </Stack>
  )
}

export default App
