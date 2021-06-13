import React from 'react';
import { Separator } from '@mln-layouts';
import { StarButton } from '@mln-components';
import { getImageSrc, getUrl, checkBookmark } from '@mln-utils';
import './styles.scss';


export default function ListRow(props){
  const { title, data, bookmarks } = props;
  return (
    <Separator withPadding>
      <div className="d-flex flex-column">
        <h2 className="title mb-3">{title}</h2>
        {data.map((d) => (
          <div key={d.id} className="d-flex flex-row item mb-3">
            <div className="item-img star-img me-3" style={{backgroundImage: `url('${getImageSrc(d)}')`}}>
              <StarButton isBookmark={checkBookmark(d, bookmarks)} data={d} />
            </div>
            <a href={getUrl(d)} className="d-flex flex-column black text-overflow-hidden flex-1">
              <h4 className="item-title">{d.title}</h4>
              <p className="item-sub-title">{d.publisher}</p>
            </a>
          </div>
        ))}
      </div>
    </Separator>
  )
}