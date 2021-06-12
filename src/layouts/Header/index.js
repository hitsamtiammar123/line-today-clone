import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@mln-svg/linetoday.svg';
import './styles.scss';

export default function Header(){
  return (
    <header className="d-flex flex-row header justify-content-between">
      <Link to="/">
       <img alt="Logo Header" className="logo-header" src={logo} />
      </Link>
      <Link className="show-bookmark">Show bookmark</Link>
    </header>
  )
}