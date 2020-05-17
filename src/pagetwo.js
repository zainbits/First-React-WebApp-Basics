import React, { Component } from 'react';

class PageTwo extends Component {
    render(){
        //console.log(this.props);
        const users = this.props.users;
        const userList = users.map(user => {
            return (
                <div className="page" key={user.id}>
                    <div>ID: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Age:{user.age}</div>
                    <div>Course: {user.course}</div>
                </div>
            )
        })
        return(
            <div className="user-list">
                {userList}
            </div>
        )
    }
}

export default PageTwo