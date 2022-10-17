import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)(() => ({
    backgroundColor: '#5620e4',
    height: '56px',
    width: '110px',
    '&:hover': {
        backgroundColor: '#672ef8',
    },
}));

export const CustomTextField = styled(TextField)(() => ({
    width: '300px',
    marginRight: '15px',
    '& label.Mui-focused': {
        color: '#5620e4',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#5620e4',
        },
        '&:hover fieldset': {
            borderColor: '#672ef8',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#5620e4',
        },
    },
}));