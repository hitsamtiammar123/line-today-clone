import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@mln-layouts';
import { StarButton } from '@mln-components'; 
import './styles.scss';


export default function ListRow(props){
  const { title } = props;
  return (
    <Separator withPadding>
      <div className="d-flex flex-column">
        <h2 className="title mb-3">{title}</h2>
        {Array.from(Array(3)).map((i, index) => (
          <div key={index} className="d-flex flex-row item mb-3">
            <div className="item-img star-img me-3" style={{backgroundImage: `url('https://obs.line-scdn.net/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL')`}}>
              <StarButton />
            </div>
            <Link to="/" className="d-flex flex-column black text-overflow-hidden flex-1">
              <h4 className="item-title">This is Item</h4>
              <p className="item-sub-title">Sub Title</p>
            </Link>
          </div>
        ))}
      </div>
    </Separator>
  )
}