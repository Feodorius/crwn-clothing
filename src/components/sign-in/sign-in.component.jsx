import { React, Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
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
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn;