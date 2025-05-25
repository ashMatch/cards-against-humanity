import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox'
import {NativeSelect} from '@mui/material'
import Stack from '@mui/material/Stack'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'


const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
            dark: '#e6e6e6'
        }
    }
})

function CreateRoom(){
    const [checked, setChecked] = useState(false)
    
    const handleChange = () => setChecked(!checked)
    
    return(
        <div>
        <h2 className="text-5xl font-bold mb-5">Encontrar Sala:</h2>
        <ThemeProvider
            theme={theme}>
        <Box 
            sx={{
                width:'100%',
                borderRadius: 1,
                bgcolor: 'primary.dark',
                '&:hover': {
                    bgcolor: 'primary.dark'
                }
            }}>
                <div className='p-10 flex flex-col gap-4'>
                    <FormControl className='w-100'>
                        <InputLabel htmlFor="component-outlined">Nome da Sala:</InputLabel>
                        <FilledInput id='component-filled' />
                    </FormControl>
                    <FormControl className="w-100">
                        <InputLabel htmlFor="component-outlined">Senha da sala:</InputLabel>
                        <FilledInput id='component-filled' />
                    </FormControl>
                    <FormControl className="w-100">
                        <InputLabel htmlFor="component-outlined">Nome de Usuario:</InputLabel>
                        <FilledInput id='component-filled' />
                    </FormControl>
                    <Stack
                        sx={{
                            mt:4,
                        }}>
                        <Button
                            variant='contained' endIcon={<AddIcon />}
                            sx={{
                                marginLeft: 'auto',
                                '&:hover': {
                                    bgcolor: 'black',
                                    cursor: 'pointer'
                                },
                                '&:active': {
                                    bgcolor: 'white',
                                    color: 'black',
                                    cursor: 'pointer'
                                }

                            }}
                        >
                            Entrar
                        </Button>
                    </Stack>
                </div>

        </Box>
        </ThemeProvider>
        </div>
    )
}


export default CreateRoom