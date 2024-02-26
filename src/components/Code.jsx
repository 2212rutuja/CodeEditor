import React from 'react'
import Editor from './Editor'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)({
    display: 'flex',
    backgroundColor:'#060606',
    height:'55vh'
})

export default function Code() {
    const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext)
  return (
    <Container>
        <Editor heading='HTML' logo='/' color='#FF3C41' value={html} onChange={setHtml}/>
        <Editor heading='CSS' logo='*' color='#0EBEFF' value={css} onChange={setCss}/>
        <Editor heading='JS' logo='()' color='#FCD000' value={js} onChange={setJs}/>
    </Container>
  )
}
