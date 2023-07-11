import React, {useState} from 'react'
import {PageContainer, FormContainer,Logo, Label, Input, SubmitButton} from "../styles/auth.styles"



function Auth({onLogin}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [isSigningUp, setIsSigningUp] = useState(false)
    

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        const endpoint = isSigningUp ? "/users" : "/login";
        fetch(endpoint,{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then((user) => {
                    onLogin(user)
                    setUsername('')
                    setPassword('')
                    window.location.href = '/'; 
                })
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
                console.log(errors)
            }
        })
    }


    return (
    <div>
    <Logo>Hangry.</Logo>
    <PageContainer>
        <FormContainer onSubmit={onSubmit}>
            <Label>
                Username
                <br/>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Label>
            <Label>
                Password
                <br/>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Label>
            <SubmitButton type="submit" value="Sign Up" onClick={() => setIsSigningUp(true)}/>
            <SubmitButton type="submit" value="Login" onClick={() => setIsSigningUp(false)} />
        </FormContainer>
    </PageContainer>
    </div>
    )
}

export default Auth