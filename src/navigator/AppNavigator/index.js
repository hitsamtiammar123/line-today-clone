import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import loading from '@mln-svg/loading.svg'
import { HeaderTab, Padder, Header, Content, Bookmarks} from '@mln-layouts';
import { onLoad, onLoadSuccess, onLoadFailed } from '@mln-redux/actions'
import Thunk from '@mln-thunk';
import './styles.scss';

let URL;

if(process.env.NODE_ENV && process.env.NODE_ENV === 'development'){
  URL = 'http://localhost:3010/portaljson';
}
else{
  URL = 'https://ancient-beyond-19443.herokuapp.com/portaljson';
}

function AppNavigator({ loadData, mainFetch, mainAction, mainResponse }){
  const { categoryList, categories } = mainResponse || {};
  
  useEffect(() => {
    // dispatch(loadDataProps());
    loadData();
  },[]);

  function getMainData(index){
    if(Array.isArray(categories)){
      return categories[index];
    }
    return [];
  }


  function loadingContent(){
    return (
      <div className="d-flex justify-content-center align-items-center">
        <img src={loading} alt="Data is Loading"/>
      </div>
    )
  }

  function mainContent(){
    if(mainAction === 'MAIN_FAILED' || !Array.isArray(categoryList)){
      return (
        <div className="d-flex justify-content-center align-items-center loading-content">
          <h2>Sorry there is error when loading page click <span className="try-again" onClick={() => loadData()}>here</span> to load again </h2>
        </div>
      )
    }

    return (
      <BrowserRouter basename="/">
        <header className="main-header">
          <Header />
          <HeaderTab />
        </header>
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Redirect to={categoryList.length ? `/category/${categoryList[0].id}` : '#'}/>
            </Route>
            {categoryList?.map((d, index) => (
              <Route key={d.id} path={`/category/${d.id}`}>
                <Content data={d} mainData={getMainData(index)} />
              </Route>
            ))}
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
          </Switch>
         
        </div>
      </BrowserRouter>
    )
  }

  return (
    <div className="App">
      <Padder>
        {mainFetch ? loadingContent() : mainContent()}
      </Padder>
    </div>
  );
}

const mapStatesToProps = (state) => ({
  mainFetch: state.main.mainFetch,
  mainResponse: state.main.mainResponse,
  mainAction: state.main.action,
});

const mapDispatchToProps = {
  loadData: (payload) => Thunk.get(URL, payload, onLoad, onLoadSuccess, onLoadFailed),
}

export default connect(mapStatesToProps, mapDispatchToProps)(AppNavigator);