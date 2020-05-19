import React from 'react';

const Users = (props) => {
    //console.log(this.props);
    // const users = props.users;
    // const userList = users.map(user => {
    //     if(user.age > 21){
    //         return (
    //             <div className="page" key={user.id}>
    //                 <div>ID: {user.id}</div>
    //                 <div>Name: {user.name}</div>
    //                 <div>Age:{user.age}</div>
    //                 <div>Course: {user.course}</div>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //         }
    // })

    const users = props.users9989;
    
    return(
        <div className="user-list">
            {
            users.map(user => {
                return user.age > 21 ? (
                    <div className="page" key={user.id}>
                        <div>ID: {user.id}</div>
                        <div>Name: {user.name}</div>
                        <div>Age:{user.age}</div>
                        <div>Course: {user.course}</div>
                    </div>
        ) : null;
    })}
        </div>
    )
}

export default Users