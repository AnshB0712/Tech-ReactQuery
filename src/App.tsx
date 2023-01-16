import { Stack } from '@mantine/core';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Table from './components/Table';

function App() {
  return (
    <Stack p={'xl'}>
      <Header /> 
      <Table />
      <Pagination />
    </Stack>
  )
}

export default App
