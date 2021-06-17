import React from 'react'

import { map } from "lodash"

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>loading..</h2>;
    }
    const renderPostTable = () => {
        return map(posts, post => (
            <tr key={post.id} className="table-border">
                <th scope="row">{post.id}</th>
                <td>{post.service_name}</td>
                <td>{post.parent_category}</td>
                <td>{post.image}</td>
                <td>{post.rate_per_min}</td>
                <td>{post.avg_time_taken}</td>
                <td>{post.mode}</td>
                <td>{post.level}</td>
                <td>{post.created_at} </td>
            </tr>
        ))

    }

    return (
        <div className="row">
            <div className="container">
                <div className="col-md-10 offset-md-1">
                    <div className="table-responsive mt-5">
                        <table className="table table-sm table-hover table-bordered caption-top">
                            <thead className="table-light ">
                                <tr>
                                    <th scope="col" >Id</th>
                                    <th scope="col">Service_name</th>
                                    <th scope="col">Parent_category</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Rate_per_min</th>
                                    <th scope="col">Avg_time_taken</th>
                                    <th scope="col">Mode</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Created_at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderPostTable()}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Posts
