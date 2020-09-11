import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import './Forms.css'
import { useDispatch } from 'react-redux';
import { filterUserArray } from '../../redux/actions';


function FilterForm() {

    const dispatch = useDispatch();

    const initialValues = {
        filter: ''
    }

    const onSubmit = (values, submitProps) => { 
        dispatch(filterUserArray(values.filter));
        submitProps.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {
                (formik) => (
                    <Form className="filter-form">
                        <FormikControl className="form-control w-50" control="input" type="text" label="Найти пользователей" name="filter"/>
                        <button type="submit" className="btn btn-primary">Поиск</button>
                    </Form>
                )
            }
        </Formik>
    );
}

export default FilterForm;
