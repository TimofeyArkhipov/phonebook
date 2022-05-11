import React, {useState} from "react";

export default function UserItem({userName, id, tel, img, handleEditContact, handleDeleteContact}){
    const [isEdit, setIsEdit] = useState(false);
    const[edtVal1, setEditVal1] = useState(userName);
    const[edtVal2, setEditVal2] = useState(tel);

  


    function finishEdit(userVal, telVal, id){
        setIsEdit(false);
        handleEditContact(userVal, telVal, id)
    }

    const inputStyle = {
        fontSize: '1em',
        border: 'none',
        borderBottom: isEdit ? '1px solid rgb(160, 27, 187)' : 'none',
    };



    return (
        <li className='contacts__item'>
            <div className='contacts__pic'>
                <img src={img}/>
            </div>
            <div  className='contacts__info' >
                <input readOnly={!isEdit} style={inputStyle} defaultValue={userName} onChange={(e) =>setEditVal1(e.target.value)}/>
                <input readOnly={!isEdit} style={inputStyle} defaultValue={tel} onChange={(e) =>setEditVal2(e.target.value)}/>
            </div>
            <div className="contacts__btn-container">
                {isEdit ? 
                <button className='contacts__btn contacts__ok' onClick={()=>finishEdit(edtVal1, edtVal2, id)}>OK</button> 
                : 
                <button className='contacts__btn' onClick={()=>setIsEdit(true)}  disabled={isEdit}>edit</button> 
                }
                <button className='contacts__btn' onClick={()=>handleDeleteContact(id)}>delete</button>
            </div>
        </li>
    )
}


// ()=>handleEditContact