import { React, useState } from 'react'
import FormInput from '../form-input/form-input';
import { LoginAsync } from '../../app/context/auth/authSlice'
import { useDispatch } from 'react-redux';
import './temp.scss';
import './LogInForm.styles.scss'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';

// const [_user, setUser] = useState('');
// const [_pwd, setPwd] = useState('');
const SignInForm = () => {
    const defaultFormFields = {

        email: '',
        password: '',

    };
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const restFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(LoginAsync(formFields))
            restFormFields()
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated this email')
                    break;
                default:
            }

        }

    };

    const handelChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <DialogTitle>Already have an account?<br/>
            <span>Sign In with your email and Password</span></DialogTitle>
            
            <form className='temp-form' onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email' required
                    onChange={handelChange}
                    name='email'
                    value={email} />

                <FormInput
                    label='Password'
                    type='password' required
                    onChange={handelChange}
                    name='password'
                    value={password} />
                <div className='buttons-container'>
                    <Button type='submit'> Sign In </Button>

                </div>
            </form>
        </div>
    )
}

export default SignInForm