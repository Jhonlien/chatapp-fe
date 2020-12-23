import React from 'react'
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import profileImage from '../../../assets/images/user.svg'

import './Navbar.scss'
import '../../../App.scss'


const Navbar = ()  => {
    const user = useSelector(state => state.authReducer.user)
    const {firstName, lastName, avatar} = user;

    return (
        <div id="navbar">
            <h2> Chat.APP</h2>
            <div id="profile-menu">
                <img 
                    src={avatar ? avatar : profileImage } 
                    alt="user-profile" 
                    className="profile-image"
                />
                <p> {firstName} {lastName} </p>
                <FontAwesomeIcon 
                    icon="caret-down"
                    className="fa-icon"
                />
            </div>     
        </div>
    )
}


export default Navbar