import React from 'react';
import './styles.scss';

const listCategories = [
  {
    id: 1,
    name: 'TOP'
  },
  {
    id: 2,
    name: 'Showbiz'
  },
  {
    id: 3,
    name: 'News'
  },
  {
    id: 4,
    name: 'News'
  },
]

export default function HeaderTab(){
  return (
    <header className="d-flex flex-row header-tab">
      {listCategories.map((d) => (
        <a key={d.id} className="child-tab">{d.name}</a>
      ))}
    </header>
  )
}