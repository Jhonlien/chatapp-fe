import React, {useState} from 'react'
import registerImage from '../../assets/images/auth/register.svg'
import '../../assets/scss/auth/Auth.scss';
import { Link } from "react-router-dom";
import { register } from '../../store/actions/auth'
import {useDispatch} from 'react-redux'


const Register = ({history}) => {
    const [firstName, setFirstName]  = useState('')
    const [lastName, setLastName]  = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender]  = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(register({firstName, lastName, email, gender, password}, history));
    }
    return (
        <div id="auth-container">
            <div id="auth-card">
                <div>
                    <div id="desc-section" className="mt-2">
                        <h2>Register ChatAPP</h2>
                        <ol>
                            <li className="mb-1">Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s,</li>
                            <li className="mb-1">when an unknown printer took a galley <br/>of type and scrambled it to make a type specimen book</li>
                            <li className="mb-1">It has survived not only five centuries, <br/>but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                            <li className="mb-1">Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s,</li>
                            <li className="mb-1">when an unknown printer took a galley <br/>of type and scrambled it to make a type specimen book</li>

                        </ol>  
                    </div>
                    <div id="form-section">
                        <img src={registerImage} alt='Register' width="250" className="mt-1"/>
                        <form onSubmit={submitForm}>
                            <div className="input-field mb-1">
                                <input 
                                    onChange={e => setFirstName(e.target.value)}
                                    value={firstName}
                                    type="text"
                                    required="required"
                                    placeholder="First Name" />
                            </div>
                            <div className="input-field mb-1">
                                <input 
                                    onChange={e => setLastName(e.target.value)}
                                    value={lastName}
                                    type="text"
                                    required="required"
                                    placeholder="Last Name" />
                            </div>
                            <div className="input-field mb-1">
                                <input 
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    required="required"
                                    placeholder="Email" />
                            </div>
                            <div className="input-field mb-1">
                                <select 
                                    onChange={e => setGender(e.target.value)}
                                    value={gender}
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="male"> Male </option>
                                    <option value="female"> Female </option>
                                </select>
                            </div>
                            <div className="input-field mb-1">
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    required="required"
                                    placeholder="Password" 
                                    type="password"/>
                            </div>
                            <button>LOGIN</button>
                        </form>
                        <p className="mb-2">Sudah mempunyai akun ? <Link to="/login">Masuk</Link></p>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register