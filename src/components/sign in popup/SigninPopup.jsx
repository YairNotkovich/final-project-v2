import * as React from 'react';
import PopUpDialog from '../PopUpDialog/PopUpDialog';
import LoginForm from '../sign in form/LogInForm'
import { hidePopUp } from '../../app/context/auth/authSlice';
import { useDispatch } from 'react-redux/es/exports';

const SignInPopUp = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(true);   

    const handleClose = (value) => {
        setOpen(false);
        dispatch(hidePopUp())
    };
    return (



       
            <PopUpDialog
                open={open}
                onClose={handleClose}
            >
                <LoginForm/>
            </PopUpDialog>
        

    )
}

export default SignInPopUp