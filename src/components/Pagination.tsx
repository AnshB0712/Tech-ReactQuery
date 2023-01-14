import React from 'react'
import { Pagination as MantinePagination} from '@mantine/core'

type Props = {
    setPage: React.Dispatch<React.SetStateAction<number>>,
    page: number
}

const Pagination = ({page,setPage}:Props) => {
  return (
    <MantinePagination grow total={10} page={page} onChange={(curPage) => setPage(curPage)}/>
  )
}

export default Pagination
