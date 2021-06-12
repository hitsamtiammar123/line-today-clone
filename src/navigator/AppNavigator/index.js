import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loading from '@mln-svg/loading.svg'
import { HeaderTab, Padder, Header } from '@mln-layouts';
import { onLoad, onLoadSuccess, onLoadFailed } from '@mln-redux/actions'
import Thunk from '@mln-thunk';
import './styles.scss';


function AppNavigator({ loadData, mainFetch, mainAction }){
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
      <>
        <Header />
        <HeaderTab />
      </>
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