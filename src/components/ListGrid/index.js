import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@mln-layouts';
import { StarButton } from '@mln-components';
import './styles.scss';

export default function ListGrid(props){
  const { title } = props;
  return (
    <Separator withPadding>
      <h2 className="title mb-3">{title}</h2>
      <div className="d-flex flex-row grid-content flex-wrap">
        {Array.from(Array(5)).map((i,index) => (
          <div key={index} className="d-flex flex-column mt-4 grid-item">
              <div className="img star-img" style={{backgroundImage: `url('https://obs.line-scdn.net/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL')`}}>
                <StarButton />
              </div>
            <Link className="hyperlink" to="/">
              <h2>This is Title</h2>
              <span>This is Caption</span>
            </Link>
          </div>
        )) }
      </div>
    </Separator>
  )
}