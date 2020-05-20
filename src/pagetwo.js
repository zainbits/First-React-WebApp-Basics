import React from 'react';

const Users = ({users9989, deleteUser112}) => {
    
    return(
        <div className="user-list">
            {
             users9989.
             map(user767 => {
                    return (
                            <div className="page" key={user767.id}>
                                <div>Name: {user767.name}</div>
                                <div>Age:{user767.age}</div>
                                <div>Course: {user767.course}</div>
                                <button onClick={() => {deleteUser112(user767.id)}}>DeleteUser</button>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
}

export default Users;