import React, {useEffect,useState } from "react";
import User from "../users/User";
import {ReactComponent as CloseBtnSvg} from '../../close.svg';

const userUrl = `https://reqres.in/api/users?per_page=12`;

 function Users() {

        const [users, setUser] = useState(null);
        const [newAvatar, setNewAvatar] = useState(null);
        const [newEmail, setNewEmail] = useState(null);
        const [newFirstName, setNewFirstName] = useState(null);
        const [newLastNAme, setNewLastNAme] = useState(null);

     useEffect(() => {
             fetch(userUrl)
                 .then((res) => res.json())
                 .then((data) => {
                     console.log(data)
                     setUser(data.data);
                 })
                 .catch(err => console.log("нету данных"))

         }, []);
    function removeUser(id){
        const newList = users.filter((item) => item.id !== id);
        setUser(newList);
    }
     const addNewUser = event => {
         setUser([
             ...users,
             {
                 avatar: newAvatar,
                 email: newEmail,
                 first_name: newFirstName,
                 id: users.length + 1,
                 last_name: newLastNAme
             },
         ])
                setNewAvatar('');
                setNewEmail('');
                setNewFirstName('');
                setNewLastNAme('');
     }

    return (
        <div className="user-container container">
            {   users ? users.map((user) => (
               <div className="User-wrap" key={user.id}>
                   <button onClick={() =>removeUser(user.id)} className="close_btn"><CloseBtnSvg/></button>
                   <User
                        user={user}
                    />
               </div>
            )) : <h3>Нету</h3> }
            <div className="form-wrap">
                <>
                    <div className="row-wrap">
                       <div className="row">
                           <input placeholder="Ссылка для фото" value={newAvatar} onChange={event => setNewAvatar(event.target.value)}/>
                       </div>
                        <div className="row">
                          <input placeholder="Email"  value={newEmail} onChange={event => setNewEmail(event.target.value)}/>
                        </div>
                        <div className="row">
                         <input placeholder="Имя"  value={newFirstName} onChange={event => setNewFirstName(event.target.value)}/>
                        </div>
                        <div className="row">
                            <input placeholder="Фамилия"  value={newLastNAme} onChange={event => setNewLastNAme(event.target.value)}/>
                        </div>
                        <div className="row">
                            <button type="submit" onClick={addNewUser}>Добавить</button>
                        </div>
                    </div>
              </>
            </div>
        </div>
    );
}

export default Users;