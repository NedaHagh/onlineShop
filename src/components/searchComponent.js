import React, { useContext } from "react";
import styles from "./base.module.scss";
import "../../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdSearch } from "react-icons/md";
import context from "../context";

export default function SearchComponent() {
//   const {data} = useContext(context);
//   const title = data.title ? data.title : "همه آگهی ها";
//   const placeHolder = data.title ?`جستجو در ${data.title} ...` : "جستجو در همه آگهی ها ...";
  const handleSubmit = e => {
    e.preventDefault(); 
  };
  const onSearch = e => {
    let inputValue=e.target.value;
    
  };

  return (
    <form className={styles.search} action="" onSubmit={handleSubmit}>
      <div className={styles.dropdown}>
        <div
          className="btnFilter btnSecondary"
          id="dropdownMenu2"
        >
         <MdSearch/>
        </div>
      </div>
      <input
        type="text"
        // placeholder={placeHolder}
        name="search2"
        onChange={onSearch}
        className={styles.InputSearch}
      />
    </form>
  );
}
