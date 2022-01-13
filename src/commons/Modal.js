import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export function useModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return [open, handleOpen, handleClose]
}

export const withModal = Body => props => {
    const {open, handleOpen, handleClose,title ,...rest} = props
    return (
        <PopUp title={title} open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <Body {...rest} />
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
    borerRadius:'1rem',
    boxShadow: 24,
    p: 4,
    outline:0,
};
export default function PopUp({ open, handleClose, title, children }) {
    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                {children}
            </Box>
        </Modal>
    );
}