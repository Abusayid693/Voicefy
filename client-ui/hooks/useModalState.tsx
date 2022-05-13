import { useState } from "react";

const useModalState = ()=>{
    const [isOpen, setIsOpen] = useState(true);

    const setClose = () => setIsOpen(false);
    const setOpen = () => setIsOpen(true);

    return {isOpen, setClose, setOpen}
}

export default useModalState