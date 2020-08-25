import React from 'react';
import { Provider } from 'react-redux'

import Scroller from './containers/scroller/scroller'
import Footer from './containers/footer/footer'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Snackbar from './components/snackbar/snackbar'
import store from './redux/configureStore'
import style from './appStyles.module.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  showReminder() {
    this.setState({ isVisible: true });

    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 1100)
  }

  render() {
    return (
      <Provider store={store}>
        <div className={style.app}>
          <Header />
          <Banner />
          <Scroller />
          <Footer triggered={() => this.showReminder()} />
          <Snackbar isVisible={this.state.isVisible} />
        </div>
      </Provider>
    );
  }
}

export default App;
