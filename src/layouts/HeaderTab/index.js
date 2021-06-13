import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.scss';

export default function HeaderTab(){

  const mainResponse = useSelector((state) => state.main.mainResponse);
  const location = useLocation();
  const history = useHistory();
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    // return () => {
    //   onHeaderDropDownClicked();
    // }
  },[])

  const catId = useMemo(() => {
    const pathname = location.pathname;
    const splitPathName = pathname.split('/');
    return splitPathName[splitPathName.length - 1];
  },[location]);
  // console.log({location, catId});

  function onListItemClicked(d){
    history.push(`/category/${d.id}`);
    onHeaderDropDownClicked();
    setShowDropDown(false);
  }

  function onHeaderDropDownClicked(){
    let overflowY;
    if(!showDropDown){
      overflowY = 'hidden';
    }
    else{
      overflowY = 'scroll';
    }
    document.body.style.overflowY = overflowY;
    setShowDropDown(!showDropDown)
  }

  const { categoryList } = mainResponse;
  return (
    <>
      <header className="d-flex flex-row">
        <div className="d-flex flex-row header-tab">
          {!showDropDown ? categoryList.map((d, index) => (
            <Link to={`/category/${d.id}`} key={d.id} className={`child-tab ${Number(catId) === d.id ? 'active' : ''}`}>
              {d.name}
            </Link>
          )) : (
            <h6 className="header-dropdown-label">Kategori</h6>
          )}
        </div>
        <div className="header-dropdown" onClick={onHeaderDropDownClicked}>
          <svg data-v-36aeedd8="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path data-v-36aeedd8="" fill="currentColor" fillRule="evenodd" d="M16.168 10.022l-4.583 4.583a.825.825 0 01-1.083.074l-.084-.074-4.583-4.583L7 8.855l4 4 4-4 1.167 1.167z"></path>
          </svg>
        </div>
      </header>
      <header className={`d-flex flex-row header-dropdown-content ${!showDropDown ? 'hidden' : ''}`}>
      {showDropDown && categoryList.map((d) => (
        <button key={d.id} onClick={() => onListItemClicked(d)} className={`list-item ${Number(catId) === d.id ? 'active' : ''}`}>{d.name}</button>
      ))}
      </header>
      {showDropDown && <div onClick={onHeaderDropDownClicked} className="backdrop-dropdown"></div>}
    </>
  )
}