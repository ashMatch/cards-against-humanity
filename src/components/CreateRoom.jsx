/////////////////////REACT IMPORTS /////////////////////////////////////
import * as React from 'react'
import { useState } from 'react'
/////////////////////PERSONAL COMPONENTS IMPORTS /////////////////////////////////////
import RoomNameAndPassword from './RoomNameAndPassword' 
/////////////////////UI IMPORTS /////////////////////////////////////
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
    const [isChecked, setChecked] = useState(false)
    const [roomName, setRoomName] = useState("")
    const [roomPassword, setRoomPassword] = useState("")


    const enablingPassword = () => setChecked(!isChecked)
    return(
        <div>
        <h2 className="text-5xl font-bold mb-5">Criar Sala:</h2>
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
                <div className='p-10 flex flex-col'>
                <RoomNameAndPassword 
                isChecked={isChecked}
                roomName={roomName}
                roomPassword={roomPassword}
                enablingPassword={enablingPassword}
                />
                <Stack
                className='mt-8'
                spacing={3}
                direction={'row'}
                >
                    <FormControl className='w-40'>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Tempo da Rodada
                        </InputLabel>
                        <NativeSelect
                        defaultValue={30}
                        inputProps={{
                        name: 'time-round',
                        id: 'uncontrolled-native',
                        }}
                        sx={{
                            '& .MuiNativeSelect-select':{
                                paddingLeft: '15px'
                            }
                        }}
                        >
                            <option value={30}>30s</option>
                            <option value={60}>60s</option>
                            <option value={90}>90s</option>
                    </NativeSelect>
                    </FormControl>

                    <FormControl className='w-40'>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Limite de Pontos
                        </InputLabel>
                        <NativeSelect
                        defaultValue={10}
                        inputProps={{
                        name: 'time-round',
                        id: 'uncontrolled-native',
                        }}
                        sx={{
                            '& .MuiNativeSelect-select':{
                                paddingLeft: '15px'
                            }
                        }}
                        >
                            <option className='pl-4'value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                    </NativeSelect>
                </FormControl>
                </Stack>

                                <Stack
                className='mt-8'
                spacing={3}
                direction={'row'}
                >
                    <FormControl className='w-40'>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Tempo de Jogadores
                        </InputLabel>
                        <NativeSelect
                        defaultValue={30}
                        inputProps={{
                        name: 'time-round',
                        id: 'uncontrolled-native',
                        }}
                        sx={{
                            '& .MuiNativeSelect-select':{
                                paddingLeft: '15px'
                            }
                        }}
                        >
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                    </NativeSelect>
                    </FormControl>

                    <FormControl className='w-40'>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Limite de Cartas Brancas
                        </InputLabel>
                        <NativeSelect
                        defaultValue={10}
                        inputProps={{
                        name: 'time-round',
                        id: 'uncontrolled-native',
                        }}
                        sx={{
                            '& .MuiNativeSelect-select':{
                                paddingLeft: '15px'
                            }
                        }}
                        >
                            <option value={20}>20</option>
                            <option value={40}>40</option>
                            <option value={60}>60</option>
                            <option value={80}>80</option>
                            <option value={100}>100</option>
                            <option value={120}>120</option>
                            <option value={140}>140</option>
                    </NativeSelect>
                </FormControl>
                </Stack>
                <Stack
                    sx={{
                        mt:4,
                    }}
                >
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
                        Criar Sala
                    </Button>
                </Stack>
                </div>

        </Box>
        </ThemeProvider>
        </div>
    )
}


export default CreateRoom