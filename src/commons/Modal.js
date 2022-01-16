import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export function useModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    return [open, handleOpen, handleClose]
}

export const withModal = Body => props => {
    const {open, handleOpen, handleClose,title ,...rest} = props
    return (
    <PopUp title={title} open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <Body {...rest} handleClose={handleClose}/>
    </PopUp>)
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius:'1rem',
    boxShadow: 24,
    padding: '1.5rem 1rem',
    paddingTop:'0',
    outline:0,
    maxWidth:'90vw',
    maxHeight:'95vh',
    overflow:"scroll",
    direction:"rtl"
};
export default function PopUp({ open, handleClose, title, children }) {
    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
        >
            <Box sx={style}>
                <Stack padding={"7px"} direction={"row"} position={"sticky"} top={"0px"} left={"0px"} right={"0px"} alignItems={"center"} justifyContent={"space-between"}>
                    <CloseIcon onClick={handleClose} sx={{'&':{width:'2rem',height:'2rem',cursor:'pointer',padding:'.2rem',borderRadius:'50%'},'&:hover':{'bgcolor':'Menu'}}}/>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                </Stack>
                {children}
            </Box>
        </Modal>
    );
}