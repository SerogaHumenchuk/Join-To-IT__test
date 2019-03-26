import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getRandomQoute,
  getRandomAuthorQoute,
  getQoutesCategories,
} from '../../../modules/quotesSelectors';
import {
  fetchRandomQoute,
  fetchRandomQouteByAuthor,
} from '../../../modules/quotesOperations';
import QuoteView from './QuoteView';

class QuoteContainer extends Component {
  state = {
    category: null,
  };

  componentDidMount() {
    this.setState({
      category: this.filterCategories(`${this.props.match.params.qoute}`),
    });
  }

  filterCategories = author =>
    this.props.categories.find(el => el.whom.toLowerCase() === author);

  OnRandomQouteBtnClick = () => this.props.fetchRandomQoute();

  // onRandomAuthorQouteBtnClick = author =>
  //   this.props.fetchRandomQouteByAuthor(author);

  render() {
    const { randomQoute } = this.props;
    const { category } = this.state;
    return (
      <div>
        <QuoteView
          qouteByCategory={category}
          randomQouteBtn={this.OnRandomQouteBtnClick}
          randomQoute={randomQoute}
          // randomAuthorQoute={this.onRandomAuthorQouteBtnClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  randomQoute: getRandomQoute(state),
  qouteByCategory: getRandomAuthorQoute(state),
  categories: getQoutesCategories(state),
});

const mapDispatchToProps = {
  fetchRandomQoute,
  fetchRandomQouteByAuthor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuoteContainer);
