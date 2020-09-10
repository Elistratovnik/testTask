import React from 'react';
import { connect } from 'react-redux';

const UserCard = ({user}) => {
    const {firstName, lastName, address, description} = user;
    return (
        <article className="user">
            <h2 className="user__title">{'Выбран пользователь ' + firstName + ' ' + lastName}</h2>
            <h5 className="user__info">Описание:</h5>
            <p className="user__info">
                <textarea className="form-control" defaultValue={description}></textarea>
            </p>
            <p className="user__info">Адрес проживания: <b>{address.streetAddress}</b></p>
            <p className="user__info">Город: <b>{address.city}</b></p>
            <p className="user__info">Провинция/штат: <b>{address.state}</b></p>
            <p className="user__info">Индекс: <b>{address.zip}</b></p>
        </article>
        )
}

const mapStateToProps = (state) => { 
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserCard)