import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Item from "./Item";
import Search from "./Search";

import "../styles/List.sass";

type Props = {
  data: any[];
};

const List: React.FC<Props> = ({ data }) => {
  //page tells us about page we are on, search keeps value of the current search
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  //function after site number click, change page of site
  const handlePaginationClick = (e: any) => {
    let pageNumber = e.target.innerHTML;
    setPage(parseInt(pageNumber));
  };

  //function start when search value is entered
  const handleSearchChange = (e: any) => {
    let val = e.target.value;
    setSearch(val);
  };

  //destructuring from state variables and props
  let listData = [...data];
  let pages = 0;
  let list: any[] = [];

  //making of list items

  if (search === "") {
    //without search value version
    list = listData
      .filter((item, index) => index >= page * 5 - 5 && index < page * 5)
      .map((item, index) => (
        <Item
          key={index}
          number={
            page === 1
              ? index + 1
              : page === 2
              ? index + 1 * 6
              : (index + 1) * 7
          }
          name={item.full_name}
          division={item.division}
          abbreviation={item.abbreviation}
        />
      ));
  } else {
    list = listData
      //with search value version
      .filter(
        item =>
          item.full_name.toLowerCase().includes(search.toLowerCase()) ||
          item.division.toLowerCase().includes(search.toLowerCase()) ||
          item.abbreviation.toLowerCase().includes(search.toLowerCase())
      )
      .map((item, index) => (
        <Item
          key={index}
          number={index}
          name={item.full_name}
          division={item.division}
          abbreviation={item.abbreviation}
        />
      ));
  }

  //making of pagination list items
  if (listData.length % 5 === 0) {
    pages = listData.length / 5;
  } else {
    pages = Math.floor(listData.length / 5 + 1);
  }
  let pageList: any[] = [];
  for (let i = 1; i <= pages; i++) {
    pageList.push(i);
  }
  pageList = pageList.map((item, index) => (
    <li
      key={index}
      className={item === page ? "active" : ""}
      onClick={handlePaginationClick}
    >
      <NavLink to={`/${item}`}>{item}</NavLink>
    </li>
  ));

  return (
    <div id="list">
      <Search function={handleSearchChange} />
      {list}
      {!search && (
        <div id="pages">
          <span>-</span>
          <ul>{pageList}</ul>
          <span>-</span>
        </div>
      )}
    </div>
  );
};

export default List;
