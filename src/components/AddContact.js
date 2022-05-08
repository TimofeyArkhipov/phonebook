import React, { useState } from "react";


export default function AddContact({handleAddContact}){
    const [newName, setNewName] = useState('');
    const [newTel, setNewTel] = useState('');
    
    return(
        <div className="add-contact">
            <h3>Add Contact</h3>
            <div className="contacts__block">
                <div className="contacts__name">name:</div>
                <input className="contacts__input" type='text' onChange={(e)=>setNewName(e.target.value)}/>
            </div>
            <div className="contacts__block">
                <div className="contacts__name">phone number:</div>
                <input className="contacts__input" type='text' onChange={(e)=> setNewTel(e.target.value)}/>
            </div>
            <button className="contacts__btn" onClick={()=>handleAddContact(newName, newTel)}>Add</button>
        </div>
    )
}
