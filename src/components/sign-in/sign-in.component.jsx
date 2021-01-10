// import { ReactComponent } from '*.svg';
import React from 'react'
import FormInput from '../form-input/form-input.component'
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils.js'
import CustomButton from '../custom-button/custom-button.component'
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: "", password: "" })
        }
        catch (error) {
            console.error(error)
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account. </SignInTitle>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput type="password" name="password" label="Password" handleChange={this.handleChange} value={this.state.password} required />
                    <ButtonsBarContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={SignInWithGoogle}>Sign In With Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;