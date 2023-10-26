import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import "./styles/Auth.css"
import { useState } from "react"
import "./styles/HomeScreen.css"
import { ImLock, ImMail } from "react-icons/im";
import UserData from "../data/UserData";
import FacultyData from "../data/FacultyData"
import AdminData from "../data/AdminData";
import CordData from "../data/CordData";
import QAData from "../data/QAData";
export default function LoginScreen() {
    const [data, setData] = useState({
        email: '',
        accountType: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState('')
    const logSubmit = e => {
        e.preventDefault()
        if (data.accountType === "student") {
            let DataFound = UserData.find(item => {
                if (item.email === data.email && item.password === data.password)
                    return item
                else
                    return undefined
            })
            if(DataFound!= undefined){
                localStorage.setItem('user', 'student')
                localStorage.setItem("userData", JSON.stringify(DataFound))
                window.location.href = "/dashboard"
            }else{
                setErrorMessage('Credentials are not correct')
            }
        }
        else if (data.accountType === 'faculty') {
            let DataFound = FacultyData.find( item => item.email === data.email && item.password === data.password)
            if(DataFound != undefined){
                localStorage.setItem('user', 'faculty')
                localStorage.setItem("userData", JSON.stringify(DataFound))
                window.location.href = "/dashboard"
            }else
                setErrorMessage('Credentials are not correct')
        }
        else if (data.accountType === 'admin') {
            let DataFound = AdminData.find(item => item.email === data.email && item.password === data.password)
            if( DataFound != undefined){
                localStorage.setItem('user', 'admin')
                localStorage.setItem("userData", JSON.stringify(DataFound))
                window.location.href = "/dashboard"
            }else
                setErrorMessage('Credentials are not correct')
        }
        else if (data.accountType === 'quality-admin') {
            let DataFound = QAData.find(item=>item.email === data.email && item.password === data.password)
            if(DataFound != undefined){
                localStorage.setItem('user', 'quality-admin')
                localStorage.setItem("userData", JSON.stringify(DataFound))
                window.location.href = "/dashboard"
            }else
                setErrorMessage('Credentials are not correct')
        }
        else if (data.accountType === 'cord') {
            let DataFound = CordData.find(item => item.email === data.email && item.password === data.password)
            if(DataFound!=undefined){
                localStorage.setItem('user', 'cord')
                localStorage.setItem("userData", JSON.stringify(DataFound))
                window.location.href = "/dashboard"
            }else
                setErrorMessage('Credentials are not correct')
        }
        else {
            setErrorMessage('Email is not registered')
        }
    }
    const logHandler = e => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        setData(currentData => ({ ...currentData, [name]: value }))
    }
    function myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
            console.log("responsive")
        } else {
            x.className = "topnav";
            console.log("not responsive")
        }
    }
    return (
        <>
            <header>
                <div className="topnav" id="myTopnav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signup">SignUp</Link>
                    <Link className="active" to="/login">Login</Link>
                    <Link to="/services" >Services</Link>
                    <Link to="https://johngreesh12.wordpress.com/">Blog </Link>
                    <Link to="/contact   ">Contact</Link>
                    <Link to="#" className="icon" onClick={() => {
                        myFunction()
                    }}>
                        <GiHamburgerMenu />
                    </Link>
                </div>
            </header>
            <div className="auth-container col">
                <nav className="auth-nav row">
                    <div className="logo">
                    </div>
                </nav>
                <div className="auth-form-container">
                    <div className="auth-form-header col cent">
                        <h1>Student Log In</h1>
                    </div>
                    <div>
                        <p className="error-message">{errorMessage}</p>
                    </div>
                    <form action="" onSubmit={logSubmit}>
                        <div className="input-core row">
                            <ImMail className="input-img" />
                            <input name="email" className="input" placeholder="Email" autoComplete="off" required type="text" onChange={logHandler} />
                        </div>
                        <div>
                            <select className="select" name="accountType" id="" onChange={logHandler}>
                                <option value="student">Select User Type</option>
                                <option value="student">Student</option>
                                <option value="faculty">Faculty</option>
                                <option value="cord">Cordinator</option>
                                <option value="quality-admin">Quality Admin</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>
                        <div className="input-core row">
                            <ImLock className="input-img" />
                            <input className="input" name="password" autoComplete="off" placeholder="Password" required type="password" onChange={logHandler} />
                        </div>
                        <button className="button">Log In</button>
                        <a href="/forgot_password" style={{ color: "blue" }}>Forgot Password</a>
                        <div className="tos-details"></div>
                    </form>
                </div>
            </div>
            <footer>
                <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-times"></i></a>
                </div>
            </footer>
        </>
    )
}