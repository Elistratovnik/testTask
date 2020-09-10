import React from 'react';
  
export default ({user, updateUserContainer, activeStyle}) => {
    const {id,  firstName, lastName, email, phone} = user;

    const style = {
        background: 'white'
    }

    if(activeStyle) {
       style.background = activeStyle
    }

    return (
        <div className="table__row table__row_user" style={style} onClick={() => updateUserContainer(user)}>
            <div className="table__cell table__cell_user">{id}</div>
            <div className="table__cell table__cell_user">{firstName}</div>
            <div className="table__cell table__cell_user">{lastName}</div>
            <div className="table__cell table__cell_user">{email}</div>
            <div className="table__cell table__cell_user">{phone}</div>
        </div>
        )
}

