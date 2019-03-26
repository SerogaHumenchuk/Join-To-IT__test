import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getQoutesCategories } from '../../../modules/quotesSelectors';
import { fetchSuccessQoutes } from '../../../modules/quotesOperations';
import QuotesCategoriesView from './QuotesCategoriesView';

class QuotesCategoriesContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchSuccessQoutes();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <QuotesCategoriesView categories={categories} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: getQoutesCategories(state),
});

const mapDispatchToProps = { fetchSuccessQoutes };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuotesCategoriesContainer);
