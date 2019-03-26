import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import QuotesCategoriesContainer from '../pages/QuotesCategories/QuotesCategoriesContainer';
import QuoteContainer from '../pages/Quote/QuoteContainer';

const App = () => {
  return (
    <div className={styles.wrapp}>
      <div className={styles.container}>
        <Switch>
          <Route path="/qoutes/:qoute" component={QuoteContainer} />
          <Route component={QuotesCategoriesContainer} />
        </Switch>
      </div>
      <footer>
        <p>
          This app was designed by
          <span className={styles.name}> Hymenchuk Serhiy</span> for{' '}
          <span className={styles.company}>Join·To·IT </span>
          in 2019
        </p>
      </footer>
    </div>
  );
};

export default App;
