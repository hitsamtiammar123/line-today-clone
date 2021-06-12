import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

export default function HeaderTab(){
  const mainResponse = useSelector((state) => state.main.mainResponse);
  const [showDropDown, setShowDropDown] = useState(false);

  const { categoryList } = mainResponse;
  return (
    <>
      <header className="d-flex flex-row">
        <div className="d-flex flex-row header-tab">
          {!showDropDown ? categoryList.map((d) => (
            <a key={d.id} className="child-tab">{d.name}</a>
          )) : (
            <h6 className="header-dropdown-label">Kategori</h6>
          )}
        </div>
        <div className="header-dropdown" onClick={() => setShowDropDown(!showDropDown)}>
          <svg data-v-36aeedd8="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path data-v-36aeedd8="" fill="currentColor" fill-rule="evenodd" d="M16.168 10.022l-4.583 4.583a.825.825 0 01-1.083.074l-.084-.074-4.583-4.583L7 8.855l4 4 4-4 1.167 1.167z"></path>
          </svg>
        </div>
      </header>
      <header className={`d-flex flex-row header-dropdown-content ${!showDropDown ? 'hidden' : ''}`}>
      {showDropDown && categoryList.map((d) => (
        <button key={d.id} className="list-item">{d.name}</button>
      ))}
      </header>
    </>
  )
}