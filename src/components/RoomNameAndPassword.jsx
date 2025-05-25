import { useState } from 'react'

import { 
    FormControl,
    FormGroup,
    FormLabel,
    FilledInput,
    InputLabel,
    Checkbox,
    NativeSelect,
    Button,
    Stack
 } from '@mui/material'

function RoomNameAndPassword({isChecked, roomName, roomPassword, enablingPassword}){

    return(
        <>
        {/* Name field */}
        <FormControl>
            <InputLabel htmlFor='room-name'>Nome da Sala</InputLabel>
            <FilledInput 
                id='room-name'
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}    
            />
        </FormControl>

        {/* Password Check  */}
        <FormControl component="fieldset">
            <Stack direction="row" alignItems="center">
                <FormLabel component="legend">Proteger Com Senha:</FormLabel>
                <Checkbox
                    checked={isChecked}
                    onChange={enablingPassword}
                />
            </Stack>
        </FormControl>

        {/* Shows password */}
        {isChecked &&(
            <FormControl variant='filled'>
                <InputLabel htmlFor='room-password'>Criar Senha</InputLabel>
                <FilledInput 
                id='room-password'
                type='password'
                value={roomPassword}
                onChange={(e) => setRoomPassword(e.target.value)}
                />
            </FormControl>
        )}
        </>
    )
}

export default RoomNameAndPassword