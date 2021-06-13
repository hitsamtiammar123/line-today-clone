import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Carousel, ListRow, ListGrid, ListSlide } from '@mln-components';
import templates_config, { CAROUSEL, GRID_VIEW, LIST_VIEW, SLIDE_VIEW} from './templates';
import AnimatedContainer from '@mln-layouts/AnimatedContainer';
import './styles.scss';

export default function Content({ data, mainData}){
  const location = useLocation();
  const bookmarks = useSelector((state) => state.bookmark.list);
  const content = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[location.pathname]);

  function mappedTemplates(t){
    const sections = t.sections;
    let result = [];
    for(let i = 0; i < sections.length; i++){
      const section = sections[i];
      result = result.concat(Array.isArray(section.articles) ? section.articles : []);
    }
    return result;
  }

  function renderContent(){
    const templates = mainData.templates;
    const conf = templates_config[data.id];
    if(Array.isArray(templates) && conf){
      return templates.map((d) => {
        const id = d.id;
        const type = conf[id];
        if(type){
          const renderJSON = mappedTemplates(d);
          switch(type){
            case CAROUSEL:
              return <Carousel key={id} data={renderJSON} />
            case LIST_VIEW:
              return <ListRow key={id} bookmarks={bookmarks} title={d.title || ''} data={renderJSON}/>;
            case GRID_VIEW:
              return <ListGrid key={id} bookmarks={bookmarks} title={d.title || ''} data={renderJSON}/>
            case SLIDE_VIEW:
              return <ListSlide key={id} bookmarks={bookmarks} title={d.title || ''} data={renderJSON}/>
            default:
          }
        }
        return null;
      });
    }
    return null;
  }

  return (
    <AnimatedContainer>
      <div ref={content} className="content">
        {renderContent()}
      </div>
    </AnimatedContainer>
  )
}