import React from 'react';
import { useSelector } from 'react-redux';
import AnimatedContainer from '@mln-layouts/AnimatedContainer';
import { ListRow } from '@mln-components';

export default function Bookmarks(){

  const bookmarks = useSelector((state) => state.bookmark.list);

  return (
    <AnimatedContainer>
      {bookmarks.length === 0 ? (
        <h2 className="d-flex justify-content-center align-items-center pb-5">You have No Bookmark Yet</h2>
      ): (
        <>
          <h1 className="padding-50">List Bookmarks</h1>
          <ListRow bookmarks={bookmarks} data={bookmarks} title="" />
        </>
      )}
    </AnimatedContainer>
  )
}