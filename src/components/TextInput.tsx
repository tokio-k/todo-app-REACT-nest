import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'

type Props = {
    value:string,
    label: string,
    type:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    fullWidth:boolean,
}

const useStyles = makeStyles({
    full: {
        marginBottom: 16,
    },
    min: {
        marginBottom: 16,
        minWidth: 150,
        width: 'calc(30%)',

    }
})

const TextInput= (props:Props) => {
    const classes = useStyles();
    const inputStyle = props.fullWidth ? classes.full : classes.min;
    return (
            <TextField
            className={inputStyle}
            fullWidth={props.fullWidth}
            label={props.label}
            margin="dense"
            required={true}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
            />
    )
}

export default TextInput
