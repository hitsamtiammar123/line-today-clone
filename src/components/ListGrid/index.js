import React from 'react';
import { Separator } from '@mln-layouts';
import { StarButton } from '@mln-components';
import { getImageSrc, getUrl } from '@mln-utils';
import './styles.scss';

export default function ListGrid(props){
  const { title, data} = props;
  return (
    <Separator withPadding>
      <h2 className="title mb-3">{title}</h2>
      <div className="d-flex flex-row grid-content flex-wrap">
        {data.map((d) => (
          <div key={d.id} className="d-flex flex-column mt-4 grid-item">
              <div className="img star-img" style={{backgroundImage: `url('${getImageSrc(d)}')`}}>
                <StarButton />
              </div>
            <a className="hyperlink" href={getUrl(d)}>
              <h2>{d.title}</h2>
              <span>{d.publisher}</span>
            </a>
          </div>
        )) }
      </div>
    </Separator>
  )
}