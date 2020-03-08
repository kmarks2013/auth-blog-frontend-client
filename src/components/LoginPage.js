import React, { Component } from 'react'

export default class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log('i was submitted')
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then( userData => {
            console.log(userData)
            localStorage.setItem("token", userData.token)
        })
    }

    

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label>Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}
