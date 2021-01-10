import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { SignUpContainer, SignUpTitle } from './sign-up.styles'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account.</SignUpTitle>
                <span>Sign up with your email and password.</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='displayName' value={displayName}
                        onChange={this.handleChange} label='Display Name' required />
                    <FormInput type="email" name="email" label="Email" value={email}
                        onChange={this.handleChange} required />
                    <FormInput type="password" name="password" label="Password"
                        onChange={this.handleChange} value={password} required />
                    <FormInput type="password" name="confirmPassword" label="Confirm Password"
                        onChange={this.handleChange} value={confirmPassword} required />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;