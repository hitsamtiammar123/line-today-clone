import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, useLocation, Redirect } from 'react-router-dom';
import loading from '@mln-svg/loading.svg'
import { HeaderTab, Padder, Header, Content } from '@mln-layouts';
import { onLoad, onLoadSuccess, onLoadFailed } from '@mln-redux/actions'
import Thunk from '@mln-thunk';
import './styles.scss';


function AppNavigator({ loadData, mainFetch, mainAction, mainResponse }){
  const { categoryList } = mainResponse;
  
  useEffect(() => {
    // dispatch(loadDataProps());
    loadData();
  },[]);

  function loadingContent(){
    return (
      <div className="d-flex justify-content-center align-items-center">
        <img src={loading} alt="Data is Loading"/>
      </div>
    )
  }

  function mainContent(){
    if(mainAction === 'MAIN_FAILED'){
      return (
        <div className="d-flex justify-content-center align-items-center loading-content">
          <h2>Sorry there is error when loading page click <a href="javascript:void(0)" onClick={() => loadData()}>here</a> to load again </h2>
        </div>
      )
    }

    return (
      <BrowserRouter basename="/">
        <Header />
        <HeaderTab />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Redirect to={categoryList.length ? `/category/${categoryList[0].id}` : '#'}/>
            </Route>
            {categoryList?.map((d) => (
              <Route key={d.id} path={`/category/${d.id}`}>
                <Content data={d} />
              </Route>
            ))}
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
  loadData: (payload) => Thunk.get('http://localhost:3010/portaljson', payload, onLoad, onLoadSuccess, onLoadFailed),
}

export default connect(mapStatesToProps, mapDispatchToProps)(AppNavigator);