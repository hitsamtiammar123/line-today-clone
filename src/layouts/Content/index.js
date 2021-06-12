import React from 'react';
import { Carousel, ListRow, ListGrid } from '@mln-components';
import './styles.scss';

export default function Content({data}){

  return (
    <div className="content">
      <h1>
        This is main content id = {data.id}
      </h1>
      <Carousel title="This is ListPage" />
      <ListRow title="This is Title"/>
      <ListGrid title="This is Title"/>
    </div>
  )
}