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

    render() {
        return (
            <div>
                <form>
                    <label>Username: </label>
                    <input type="text" name="username" />
                    <label>Password: </label>
                    <input type="text" name="password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
