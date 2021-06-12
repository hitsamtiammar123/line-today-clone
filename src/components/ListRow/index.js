import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@mln-layouts';
import Star from '@mln-svg/star.svg'
import './styles.scss';


export default function ListRow(props){
  const { title } = props;
  return (
    <Separator>
      <div className="d-flex flex-column">
        <h2 className="title mb-3">{title}</h2>
        {Array.from(Array(3)).map((i, index) => (
          <div key={index} className="d-flex flex-row item mb-3">
            <div className="item-img me-3" style={{backgroundImage: `url('https://obs.line-scdn.net/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL')`}}>
              <div onClick={() => {
                console.log('bookmark clicked')
              }} className="bookmark-btn">
                <img src={Star} alt="Star"/>
              </div>
            </div>
            <Link to="/" className="d-flex flex-column black">
              <h4 className="item-title">This is Item</h4>
              <p>Sub Title</p>
            </Link>
          </div>
        ))}
      </div>
    </Separator>
  )
}