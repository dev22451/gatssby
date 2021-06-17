import React from 'react'

import { GiCheckMark } from "react-icons/gi";
import ForgetPassForm from "./ForgetPassForm"


function ForgetPassPage() {
    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10 shadow-lg offset-md-1 bg-white rounded main-container">
                    <div className="row h-100 d-flex align-items-center">
                        <div className="col-md-7 first-containers justify-content-center bg-light d-flex align-items-center">
                            <div className="steps">
                                <p className="stepshead text-dark">steps to reset password</p>
                                <hr />
                                <ol className="steps">
                                    <li className="d-flex text-dark"><GiCheckMark className="checkmark" /> &nbsp; Enter your E-mail</li>
                                    <li className="d-flex text-dark"><GiCheckMark className="checkmark" /> &nbsp; Check your email</li>
                                    <li className="d-flex text-dark"><GiCheckMark className="checkmark" /> &nbsp; Find the link</li>
                                    <li className="d-flex text-dark"><GiCheckMark className="checkmark" /> &nbsp; Update your password</li>
                                </ol>
                                <hr />
                                <p className="text-muted small steps-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum natus
                                itaque voluptatum nisi voluptas commodi aspernatur
                                molestias eos recusandae alias, illo eius error
                                    repellat nobis tempore fugit.</p>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <ForgetPassForm />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ForgetPassPage