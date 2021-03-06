import React from 'react';

import './App.css';

import AppBar from 'material-ui/AppBar'
import SwipeableViews from 'react-swipeable-views'
import Welcome from '../Welcome'
import HomeButton from '../HomeButton'
import TabMenu from '../TabMenu'

const App = ({ children, location, }) => {

  const pageDisplayed = location.pathname === '/app/new_report' ? 1 : 2

  const styles = {
    appBar: {
      height: 50,
    }
  }

  return(

    <div className="app">
      <AppBar
        iconElementLeft={<HomeButton/>}
        style={styles.appBar}
        />
      <TabMenu
        pageDisplayed={pageDisplayed}/>
      <SwipeableViews>

        { children || <Welcome /> }

      </SwipeableViews>
    </div>
  )
}

export default App;
