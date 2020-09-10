import React from 'react';
import { connect } from 'react-redux';
import { showUsers } from '../../../redux/actions';


const TablePagination = function ({page, showUsers, active}) {
    return (<span className={active ? "table__bullet_active" : "table__bullet"} onClick={() => {showUsers(page)}}>{page}</span>)
}

const mapDispatchToProps = {
    showUsers
}


export default connect(null, mapDispatchToProps)(TablePagination)

