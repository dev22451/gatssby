import React from 'react'


function ForgetPassForm() {
    return (
        <div className="row h-100 justify-content-center align-items-center">
            <form className="forgot rounded">
                <h4 className="text-center mb-3 lead" >Forgot Your Password</h4>
                <p className="small"> Having trouble logging in?</p>
                <ul>
                    <li className="small">Usernames are in the form of an email address.</li>
                    <li className="small">Passwords are case sensitive.</li>
                    <li className="small"><a href="/#" className="text-decoration-none">Sendbox Login.</a></li>
                </ul>
                <p className="small">To reset your password, enter your PandaBiz username.</p>
                <div className="mb-3">
                    <label htmlFor="username" className="label-form mb-1 text-muted">Username or email</label>
                    <input type="text" id="username" className="form-control" />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-1">

                    <u><button type="submit" className="btn btn-outline-secondary">Cancel</button></u>

                    <u> <button type="submit" className="btn btn-primary " >Continue</button></u>

                </div>
                <br />
                <p className="small">Video:<a href="/#" className=" text-decoration-none">Need Help Logging In? </a></p>
            </form>
        </div>
    )
}

export default ForgetPassForm