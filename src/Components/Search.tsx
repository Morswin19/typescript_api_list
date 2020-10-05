import React from "react";

import '../styles/Search.sass'

//component with title and search
const Search = (props: any) => {
  return (
    <div id="header">
      <div id="headerTextContainer">
        <h1>MY LIST</h1>
        <form className="search info">
          <input
            type="text"
            autoComplete="off"
            name="search"
            onChange={props.function}
            placeholder="search..."
          ></input>
          {/* magnifier picture i consists of two divs*/}
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
