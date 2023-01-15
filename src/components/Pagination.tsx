import React from 'react'
import useUserContext from '../hooks/useUserContext';
import { Pagination as MantinePagination} from '@mantine/core'

const Pagination = () => {
  const {page,setPage} = useUserContext()
  return (
    <MantinePagination 
    grow 
    total={10} 
    page={page} 
    onChange={(curPage) => setPage(curPage)}
    />
  )
}

export default Pagination
