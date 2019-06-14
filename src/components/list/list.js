import React from 'react';
import { APP_URL } from '../../Config'
import { handleResponse } from '../../Helpers'
import Loading from '../common/Loading'
import Table from './Table'
import Pagination from './Pagination'





class List extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            currencies: [],
            error: '',
            page: 1,
            totalPages: 0
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
    }



    componentDidMount() {
        this.fetchCurrencies()
    }

    fetchCurrencies() {
        this.setState({
            loading: true,
        });

        fetch(`${APP_URL}/cryptocurrencies?page=${this.state.page}&perPage=20`)
            .then(handleResponse)
            .then(data => {
                const { currencies, totalPages } = data
                this.setState({
                    currencies,
                    loading: false,
                    totalPages

                })
            })
            .catch(error => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                })
            })


    }


    handlePaginationClick(direction) {
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1
        this.setState({ page: nextPage }, () => { this.fetchCurrencies() })

    }


    renderChangePercent(percent) {
        if (percent > 0) {
            return <span className='percent-raised'>{percent} % &uarr; </span>
        } else if (percent < 0) {
            return <span className='percent-fallen'>{percent} % &darr;</span>
        } else {
            return <span>0</span>
        }
    }

    render() {
        console.log(this.state.page)
        const { loading, error, currencies, totalPages, page } = this.state
        if (loading) {
            return (
                <div className='loading-container'>
                    <Loading />
                </div>
            )
        }
        if (error) {
            return (
                <div className='error'>{error}</div>
            )
        }
        return (<div>
            <Table currencies={currencies} renderChangePercent={this.renderChangePercent} />
            <Pagination handlePaginationClick={this.handlePaginationClick} page={page} totalPages={totalPages} />
        </div>
        )
    }
}

export default List