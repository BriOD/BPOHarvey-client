import React, { Component } from 'react';
import axios from 'axios';


class RegisterForm extends Component {
    state = {
        first_name: this.props.first_name || '',
        last_name: this.props.last_name || '',
        pledge: this.props.pledge || '',
        img_url: this.props.img_url || ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = this.state;
        axios.post(`https://boiling-mesa-29772.herokuapp.com/api/pledgers`, payload)
    }

    render() {
        return (
            <div>
                <div>
                    <label>First Name</label>
                    <input
                        type='text'
                        name='first_name'
                        value={this.state.first_name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type='text'
                        name='last_name'
                        value={this.state.last_name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>% to Pledge</label>
                    <input
                        type='text'
                        name='pledge'
                        value={this.state.pledge}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Image URL of yourself</label>
                    <input
                        type='text'
                        name='img_url'
                        value={this.state.img_url}
                        onChange={this.handleChange}
                    />
                </div> 
                <button 
                    className="waves-effect waves-light btn" 
                    onClick={this.handleSubmit}
                >Pledge Yourself</button>
            </div>      
        );
    }
}

export default RegisterForm;