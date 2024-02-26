import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../App.css'

const Container = styled(Box)({
    flexGrow: 1,
    flexBasic: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '0 5px 5px',
    //overflow: 'auto'


})

const Heading = styled(Box)({
    background: '#1d1e22',
    display: 'flex',
    padding: '9px 12px',

})

const Header = styled(Box)({
    background: '#060606',
    color: '#AAAEBC',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '700',

})

const ResizableEditor = styled(Box)({
    flex: 1,
    overflow: 'auto',
    resize: 'horizontal', /* Allow horizontal resizing */
    minWidth: '100px', /* Minimum width of the editor */
    maxWidth: '800px '/* Maximum width of the editor */
})

export default function Editor({ heading, logo, color, value, onChange }) {
    const [open, setOpen] = useState(true)

    const handleChange = (editor, data, value) => {
        onChange(value)
    }


    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box component='span'
                        style={{
                            background: color,
                            color: 'black',
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            marginRight: 5,
                            paddingBottom: 2,
                            borderRadius: 5,

                        }}

                    >
                        {logo}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon fontSize='small' style={{ alignSelf: 'center' }} onClick={() => setOpen(prevState => !prevState)} />

            </Header>
            <ResizableEditor>
                <ControlledEditor className='controlled-editor'
                    value={value}
                    onBeforeChange={handleChange}
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: 'language',
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
            </ResizableEditor>

        </Container>
    )
}
