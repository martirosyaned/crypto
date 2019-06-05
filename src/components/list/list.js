import React from 'react';
import {APP_URL} from '../../Config'
import {handleResponse} from '../../Helpers'
import './Table.css';



class List extends React.Component {
    constructor(){
                super()
                this.state={
                    loading: false,
                    currencies: [],
                    error: '',
                }
            }

    componentDidMount(){
        this.setState ({
            loading: true
        })
        fetch(`${APP_URL}/cryptocurrencies?page=1&perPage=20`)
        .then(handleResponse)
        .then(data => {
            this.setState ({
                currencies: data.currencies,
                loading: false,
            })
        })
        .catch(error=>{
            this.setState ({
                error: error.errorMessage,
                loading: false,
            })
        })
    }
    
    renderChangePercent(percent){
        if(percent > 0){
            return <span className='percent-raised'>{percent} % &uarr; </span>
        }else if (percent < 0){
            return <span className='percent-fallen'>{percent} % &darr;</span>
        }else{
            return <span>0</span>
        }
    }

    render(){
        if(this.state.loading){
            return (
                <div>loading ...</div>
            )
        }
        if(this.state.error){
            return (
                <div>{this.state.error}</div>
            )
        }
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
                        {this.state.currencies.map(currencie =>(
                            <tr key={currencie.id}>
                               <td><span className='Table-rank'>{currencie.rank} {currencie.name}</span></td>
                               <td><span className='Table-dollar'>$</span>{currencie.price}</td>
                               <td><span className='Table-dollar'>$</span>{currencie.marketCap}</td>
                               <td>{this.renderChangePercent(currencie.percentChange24h)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default List