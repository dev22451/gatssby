import React from "react"
// import _ from "lodash"

import { map } from "lodash"

const SignupInfo = () => {

    const data = JSON.parse(localStorage.getItem('userData'));

    const renderPostItem = () => {
        return map(data, post => (
            <tr key={post.id} className="table-border">

                <th scope="row">{post.firstName}</th>
                <td>{post.lastName}</td>
                <td>{post.email}</td>
                <td>{post.jobType}</td>
                <td>{post.company}</td>
                <td>{post.phone}</td>
                <td>{post.password}</td>
                <td>{post.confirmpassword}</td>
                <td>{post.employees} </td>
            </tr>
        ))


    }
    return (
        <div className="row">
            <div className="table-responsive mt-5">
                <table className="table table-sm table-hover table-bordered caption-top">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col" >firstName</th>
                            <th scope="col">lastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">jobType</th>
                            <th scope="col">company</th>
                            <th scope="col">phone</th>
                            <th scope="col">Password</th>
                            <th scope="col">confirmpassword</th>
                            <th scope="col">employees</th>
                        </tr>
                    </thead>
                    {renderPostItem()}
                </table>
            </div>
        </div>


    )
}
export default SignupInfo