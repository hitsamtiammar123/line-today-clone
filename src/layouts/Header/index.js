import React from 'react';
import logo from '@mln-svg/linetoday.svg';
import './styles.scss';

export default function Header(){
  return (
    <header className="d-flex flex-row header justify-content-between">
      <img alt="Logo Header" className="logo-header" src={logo} />
      <a className="show-bookmark" href="#">Show Bookmark</a>
    </header>
  )
}