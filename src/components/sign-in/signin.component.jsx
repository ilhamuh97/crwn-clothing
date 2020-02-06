import React from 'react'

import "./signin.styles.scss"

import FormInput from '../form-in/form-in.component'
import CustomButton from '../custom-button/custom-button.components'


class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event=>{
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event=>{
        const {value, name} = event.target;

        this.setState({[name]: value});

    }

    //FormInput for email and password
    getFormInput = (key) => (<FormInput 
        name={key} 
        type={key} 
        value={this.state[key]} 
        handleChange={this.handleChange} 
        label = {key} 
        required />);

    render(){
        const stateKey = Object.keys(this.state);
        console.log(stateKey)
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    {
                        //key = variable satuan didalam map
                        stateKey.map(key => this.getFormInput(key))
                    }

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>

        );
    }
}

export default SignIn;