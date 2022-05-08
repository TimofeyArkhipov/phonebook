import React, {useState, useEffect} from "react";
import AddContact from "../components/AddContact";
import UserItem from "../components/ListItem";
import { useFetch } from "../hooks/api-client";

const Contacts = () => {

    const [users, fetchComplete, setUsers] = useFetch('https://jsonplaceholder.typicode.com/users');
    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState();

    const handleAddContact = async (name, tel) =>{
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name:name,
                phone:tel,
                id: Math.random()*(1000 - 11)+11,
            }),
            headers:{'Content-type': 'application/json; charset=utf-8'}
        })
        .then((res)=> res.json())
        .then((data)=> 
        setUsers([
            ...users,
            data
        ]),
        ).catch((error)=>{
            console.log(error)
        });
    }

    
    const handleDeleteContact = async (id) =>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        })
        .then((res)=> {
            setUsers(users.filter((user) => user.id!==id))
        }
        
        ).catch((error)=>{
            console.log(error)
        });
    }

    const handleEditContact = async (name, tel, id) =>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name:name,
                phone:tel,
            }),
            headers:{'Content-type': 'application/json; charset=utf-8'}
        })
        .then((res)=> res.json())
        .then((data)=> {
        setUsers(users.map((user) =>
        user.id === data.id ? data : user));
    }).catch((error)=>{
            console.log(error)
        });
    }

    function searchUser(val){
        setSearchText(val)

        const filterData = users.filter((user)=> {
            return user.name.toLowerCase().includes(val.toLowerCase()) || user.phone.toLowerCase().includes(val.toLowerCase())
        })
        setFilter(filterData);
    }



    return (
        <div className="main">
            <h1>Contacts</h1>
            
                <AddContact handleAddContact={handleAddContact} />
                <div className="contacts__search">
                    <h3>search:</h3>
                    <input type='text' placeholder='Search contact...' onChange={(e)=>searchUser(e.target.value)}/>
                </div>
                {
                    fetchComplete ? <div>Loading...</div> :
                    searchText ? 
                    <ul className="contacts__list">
                       {filter.map((user) => 
                            <UserItem key={user.id} img={`https://i.pravatar.cc/150?img=${user.id}`} id={user.id} userName={user.name} tel={user.phone} handleEditContact={handleEditContact} handleDeleteContact={handleDeleteContact}/>
                        )}
                    </ul>
                    :
                    <ul className="contacts__list">
                        {users.map((user) => (
                            <UserItem key={user.id} img={`https://i.pravatar.cc/150?img=${user.id}`} id={user.id} userName={user.name} tel={user.phone} handleEditContact={handleEditContact} handleDeleteContact={handleDeleteContact}/>
                        ))}
                    </ul>
                }
          
           
        </div>
    )
}

export default Contacts;