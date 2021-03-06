import { React, Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from '@firebase/auth';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        required
                        handleChange={this.handleChange}
                        label="email"
                        value={this.state.email} />
                    <FormInput
                        type="password"
                        name="password"
                        required
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password} />
                    <div className='buttons'>
                        <CustomButton
                            type='submit'>Sign in</CustomButton>
                        <CustomButton
                            isGoogleSignIn
                            type='button'
                            onClick={signInWithGoogle}>{' '}Sign in with Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;