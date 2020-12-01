import React from 'react'
import registerImage from '../../assets/images/auth/register.svg'
import '../../assets/scss/auth/Auth.scss';
import { Link } from "react-router-dom";



const Register = () => {
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
                        <form>
                            <div className="input-field mb-1">
                                <input placeholder="First Name" />
                            </div>
                            <div className="input-field mb-1">
                                <input placeholder="Last Name" />
                            </div>
                            <div className="input-field mb-1">
                                <input placeholder="Email" />
                            </div>
                            <div className="input-field mb-1">
                                <select>
                                    <option value="male"> Male </option>
                                    <option value="female"> Female </option>
                                </select>
                            </div>
                            <div className="input-field mb-1">
                                <input placeholder="Password" type="password"/>
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