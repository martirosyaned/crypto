import React from 'react'
import './Pagination.css'
import PropTypes from 'prop-types'

function Pagination(props){
    const {handlePaginationClick, page, totalPages} = props

    return(
        <div className='Pagination'>
            <button className='Pagination-button' onClick={()=>handlePaginationClick('back')} disabled={page === 1} >&larr;</button>
            <span className='Pagination-info'> {page} of {totalPages}</span>
            <button className='Pagination-button' onClick={()=>handlePaginationClick('next')} disabled= {page === totalPages}>&rarr;</button>
        </div>
    )
}

Pagination.propTypes={
    page: PropTypes.number.isRequired,
    handlePaginationClick: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,

}

export default Pagination 