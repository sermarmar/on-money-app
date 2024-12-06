import { Dialog, DialogTitle } from "@mui/material"
import React from "react"

interface ModalComponentProps {
    children: React.ReactNode
    title?: string
    open: boolean,
    onClose: (value?: string) => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({ children, title, open, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return(
        <>
            <Dialog onClose={handleClose} open={open}>
                { title !== undefined ? <DialogTitle>{ title }</DialogTitle> : <></> }
                { children }
            </Dialog>
        </>
    )
}