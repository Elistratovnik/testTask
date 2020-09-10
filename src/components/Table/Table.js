import React from 'react';
import './Table.css'
import TableHeading from './TableHeading/TableHeading';
import TableRow from './TableRow/TableRow';
import { connect } from 'react-redux';
import { fetchedUsers, showAddForm, updateUserContainer, showUsers } from '../../redux/actions';
import TablePagination from './TablePagination/TablePagination';
import AddForm from '../Forms/AddForm';
import Spinner from '../Spinner/Spinner';
import pagesToArray from '../../utils/pagesToArray';


const Table = ({usersForDisplay, fetchedUsers, pages, loaded, showAddForm, addFormVisible, updateUserContainer, loading, selectUserId, fetchBtnDisabled, currentPage}) => {
    return (
    <section className="table">
        <button className="btn btn-success mb-3" onClick={() => {showAddForm()}}>Добавить пользователя</button>
        {addFormVisible && <AddForm />}
        <TableHeading />
        {usersForDisplay && usersForDisplay.map((user, index, arr) => {
            return <TableRow updateUserContainer={updateUserContainer} user={arr[arr.length - (index + 1)]}  activeStyle={selectUserId == arr[arr.length - (index + 1)].id && '#28a745'}/>
        })}
        {loading && <Spinner />}
        {!loaded && <button className="btn btn-outline-danger mr-3 mt-3" disabled={fetchBtnDisabled} onClick={() => {fetchedUsers()}}>Загрузить 32 пользователя</button>}
        {!loaded && <button className="btn btn-outline-danger mt-3" disabled={fetchBtnDisabled} onClick={() => {fetchedUsers('big')}}>Загрузить 1000 пользователей</button>}
        <div className="table__pagination">
            {pages > 1 && pagesToArray(pages).map((page) => {
                return <TablePagination page={page}  showUsers={showUsers} active={currentPage === page}/>
            })}
        </div>
    </section>)
}

const mapDispatchToProps = {
    fetchedUsers,
    showAddForm,
    updateUserContainer
}

const mapStateToProps = (state) => {
    return {
        usersForDisplay: state.usersForDisplay,
        pages: state.pages,
        loaded: state.loaded,
        loading: state.loading,
        addFormVisible: state.addFormVisible,
        selectUserId: state.user.id,
        fetchBtnDisabled: state.fetchBtnDisabled,
        currentPage: state.currentPage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

