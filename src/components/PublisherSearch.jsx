import React from 'react';
import SearchBar from './SearchBar.jsx'
import SiteList from './SiteList.jsx'
export default class PublisherSearch extends React.Component {

  constructor() {
    super();
    this.state = {filterText: ''}
  }

  _handleSearchInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  _submit() {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onSearchInput={this._handleSearchInput.bind(this)}
        />
        <SiteList
          sites={this.props.sites}
          filterText={this.state.filterText}
        />
      </div>
    )
  }
}
