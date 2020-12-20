import React, {useState} from 'react'
import '../../assets/scss/auth/Auth.scss'
import loginImage from '../../assets/images/auth/login.svg'
import { Link } from "react-router-dom"
import {login} from '../../store/actions/auth'
import {useDispatch, useSelector} from 'react-redux'

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(login({email, password}, history));
    }
    return (
        <div id="auth-container">
            <div id="auth-card">
                <div>
                    <div id="desc-section" className="mt-2">
                        <h2>Login ChatAPP</h2>
                        <ol>
                            <li className="mb-1">Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s,</li>
                            <li className="mb-1">when an unknown printer took a galley <br/>of type and scrambled it to make a type specimen book</li>
                            <li className="mb-1">It has survived not only five centuries, <br/>but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                            <li className="mb-1">Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s,</li>
                            <li className="mb-1">when an unknown printer took a galley <br/>of type and scrambled it to make a type specimen book</li>

                        </ol>  
                    </div>
                    <div id="form-section">
                        <img src={loginImage} alt='Login' width="300" className="mt-1"/>
                        <form onSubmit={submitForm}>

                            <div className="input-field mb-1">
                                <input 
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    required="required"
                                    placeholder="Email" 
                                />
                            </div>

                            <div className="input-field mb-1">
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    required="required"
                                    placeholder="Password" 
                                />
                            </div>

                            <button>LOGIN</button>
                        </form>
                        <p className="mb-2">Belum mempunyuai akun ? <Link to="/register">Daftar</Link></p>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login