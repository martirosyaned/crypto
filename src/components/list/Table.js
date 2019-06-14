import React from 'react'
import './Table.css'
import PropTypes from 'prop-types'


const Table = (props)=>{
   const {currencies, renderChangePercent} = props
    return(
        
        <div className='Table-container'>
        <table className='Table'>
            <thead className='Table-head'>
                <tr>
                    <th>Cryptocurrency</th>
                    <th>Price</th>
                    <th>Market Cup</th>
                    <th>24 Houre Change</th>
                </tr>
            </thead>
            <tbody className='Table-body'>
                {currencies.map(currencie =>(
                    <tr key={currencie.id}>
                       <td><span className='Table-rank'>{currencie.rank} {currencie.name}</span></td>
                       <td><span className='Table-dollar'>$</span>{currencie.price}</td>
                       <td><span className='Table-dollar'>$</span>{currencie.marketCap}</td>
                       <td>{renderChangePercent(currencie.percentChange24h)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    )
}

Table.propTypes = {
      currencies: PropTypes.array.isRequired,
      renderChangePercent: PropTypes.func.isRequired
}

export default Table;