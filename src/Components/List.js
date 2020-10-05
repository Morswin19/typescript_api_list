import React from 'react';
import { NavLink } from 'react-router-dom';

import Item from './Item';
import Search from './Search';

import '../styles/List.sass'

class List extends React.Component {
    //page tells us about page we are on, search keeps value of the current search, change variable is set to change component when window width is more or less than 500px
    state = {
        page: 1,
        search: '',
        change: false
    }

    //function after site number click, change page of site
    handlePaginationClick = (e) => {
        this.setState({
            page: parseInt(e.target.innerHTML)
        })
    }

    //function after arrow click in pagination, next site or earlier site
    handlePaginationArrowClick = (a) => {
        console.log(a);
        console.log(this.state.page);
        if ((this.state.page > 1 && a === (-1)) || (this.state.page < 3 && a === 1)) {
            this.setState({
                page: this.state.page + a
            })
        }
    }

    //function start when search value is entered
    handleSearchChange = (e) => {
        let val = e.target.value;
        this.setState({
            search: val,
        })
    }

    render() {
        //destructuring from state and props
        const { data } = this.props;
        const { page, search } = this.state;
        let listData = [...data];
        let pages = 0;
        let list = [];

        //making of list items

        if (search === '') {
            //without search value version
            list = listData
                .filter((item, index) => (index >= (page * 5 - 5) && index < (page * 5)))
                .map((item, index) => <Item key={index} number={page === 1 ? (index + 1) : page === 2 ? (index) + 1 * 6 : (index + 1) * 7} name={item.full_name} division={item.division} abbreviation={item.abbreviation} />)
        } else {
            list = listData
                //with search value version
                .filter(item => item.full_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.division.toLowerCase().includes(search.toLowerCase()) ||
                    item.abbreviation.toLowerCase().includes(search.toLowerCase()))
                .map((item, index) => <Item key={index} number={index} name={item.full_name} division={item.division} abbreviation={item.abbreviation} />)
        }

        //making of pagination list items
        if (listData.length % 5 === 0) {
            pages = listData.length / 5
        } else {
            pages = Math.floor(listData.length / 5 + 1)
        }
        let pageList = [];
        for (let i = 1; i <= pages; i++) {
            pageList.push(i);
        }
        pageList = pageList
            .map((item, index) => <li key={index} className={item === page ? 'active' : ''} onClick={this.handlePaginationClick}><NavLink to={`/${item}`}>{item}</NavLink></li>);

        return (
            <div id="list">
                <Search function={this.handleSearchChange} />
                {list}
                { !search &&
                    <div id="pages">
                        <span>-</span>
                        <ul >
                            {pageList}
                        </ul>
                        <span>-</span>
                    </div>
                }
            </div >
        );
    }
}

export default List;