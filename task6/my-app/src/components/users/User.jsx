import React from "react";

let User = (user) => {

    return(
        <div className="UserElement" id={user.index}>
            <div className="avatar"><img src={user.user.avatar} /></div>
            <div className="name">{user.user.email}</div>
            <div className="lastname">{user.user.first_name}</div>
            <div className="email">{user.user.last_name}</div>
        </div>
    )

}
export default User;