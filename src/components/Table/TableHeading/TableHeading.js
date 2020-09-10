import React from 'react';
import { connect } from 'react-redux';
import { sortById } from '../../../redux/actions';
import Up from '../../DirectionIcons/Up';
import Down from '../../DirectionIcons/Down';


const TableHeading = ({sortById, sortIdFlag}) => {
    return (
        <div className="table__row table__row_heading">
            <div className="table__cell table__cell_heading table__cell_id" onClick={() => {sortById()}}>{sortIdFlag ? <Up/> : <Down />} id</div>
            <div className="table__cell table__cell_heading">firstName</div>
            <div className="table__cell table__cell_heading">lastName</div>
            <div className="table__cell table__cell_heading">email</div>
            <div className="table__cell table__cell_heading">phone</div>
        </div>
        )
}


const mapDispatchToProps = {
    sortById,
}

const mapStateToProps = (state) => {
    return {
        sortIdFlag: state.sortIdFlag
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeading);

