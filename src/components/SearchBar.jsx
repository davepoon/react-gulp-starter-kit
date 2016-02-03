import React from 'react';
import _ from 'lodash';

export default class SearchBar extends React.Component {

  _handleChange() {
    this.props.onSearchInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    return (
      <div className="form-group form-group-lg">
        <div className="search-bar">
          <input
            autoFocus
            type="text"
            placeholder="Search Publishers"
            className="search-bar-input"
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this._handleChange.bind(this)}
            />
          <button className="search-button" alt="Search"><i className="glyphicon glyphicon-search"></i></button>
        </div>
      </div>
    )
  }
}
