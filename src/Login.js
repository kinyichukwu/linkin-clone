import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './Firebase'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch();
    const register = () => {
     if(!name) {
        return alert('no name')
     }

     auth.createUserWithEmailAndPassword(email, password)
     .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic,
          }))
        })
     }).catch((error) => alert(error))
    }
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          }))
        })
    }
  return (
    <div className='login'>
        <img src='https://th.bing.com/th/id/R.915f7f2de2f7b16ace53918726bb8f8d?rik=Ux2nbVugJ3E9Nw&pid=ImgRaw&r=0' alt='logo'/>
        <form>
            <input placeholder='Full name (required if registering)' value={name} onChange={e => setName(e.target.value)}  type='text' />
            <input placeholder='Profile pic URL (optional)' value={profilePic} onChange={e => setProfilePic(e.target.value)} type='text' />
            <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type='email' />
            <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type='text' />

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?  {'   '} <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login