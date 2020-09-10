import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import './Forms.css'
import { useDispatch } from 'react-redux';
import {addUser} from '../../redux/actions'


function AddForm() {

    const dispatch = useDispatch()

    const initialValues = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    const validate = (values) => {
        let errors = {}
        if (!values.id) {
            errors.id = 'Обязательное поле'
        }

        if (!values.firstName) {
            errors.firstName = 'Обязательное поле'
        }

        if (!values.lastName) {
            errors.lastName = 'Обязательное поле'
        }

        if (!values.email) {
            errors.email = 'Обязательное поле'
        } else if (!/(([a-z][a-z0-9\-\.]*[a-z0-9])|[a-z])@(([a-z0-9][a-z0-9\-]*[a-z0-9])|[a-z])\.[a-z]{2,63}(\.[a-z]{2,63})?/.test(values.email)) {
            errors.email = 'Неправильный формат почты'
        }

        if (!values.phone) {
            errors.phone = 'Обязательное поле'
        }
        return errors
    }

    const onSubmit = (values, props) => { 
        console.log(props)
        dispatch(addUser(values))
        props.resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            {
                (formik) => (
                    <Form className="add-form">
                        <FormikControl className="form-control w-50" control="input" type="text" label="ID Пользователя" name="id"/>
                        <FormikControl className="form-control w-50" control="input" type="text" label="Имя" name="firstName"/>
                        <FormikControl className="form-control w-50" control="input" type="text" label="Фамилия" name="lastName"/>
                        <FormikControl className="form-control w-50" control="input" type="email" label="Электронная почта" name="email"/>
                        <FormikControl className="form-control w-50" control="input" type="tel" label="Телефон" name="phone"/>
                        <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>Добавить в таблицу</button>
                    </Form>
                )
            }
        </Formik>
    );
}

export default AddForm;
