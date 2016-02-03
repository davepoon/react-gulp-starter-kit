import React from 'react';
import _ from 'lodash';

export default class SiteList extends React.Component {

  render() {
    
    if(!!this.props.filterText) {
      let siteList = [];
      let splittedFilterTexts = this.props.filterText.split(',');
      let trimmedSplittedFilterTexts = splittedFilterTexts.map(function(splittedFilterText) {
        return splittedFilterText.toLowerCase().trim();
      });

      this.props.sites.forEach(function(site, index) {
        let categoryList = [];
        let found = false;

        for (let k = 0; k < site.categoryIds.length; k++) {
          categoryList.push(site.categoryIds[k].description);
      	}

        categoryList.map(function(cat) {
          if ( _.includes(trimmedSplittedFilterTexts, cat.toLowerCase() ) === false  ) {
            found = true;
            return false;
          }
          siteList.push(
            <div className="site-list-row" key={site.id}>
              <a href={'http://' + site.siteUrl} title={site.siteName} className="site-list-link">{site.siteUrl}</a>
              <p className="site-list-description">{site.description}</p>
            </div>
          )
        });

        if ( found === false || _.includes(trimmedSplittedFilterTexts, site.siteName.toLowerCase()) === false ) {
          return false;
        }
        siteList.push(
          <div className="site-list-row" key={site.id}>
            <a href={'http://' + site.siteUrl} title={site.siteName} className="site-list-link">{site.siteUrl}</a>
            <p className="site-list-description">{site.description}</p>
          </div>
        )
      }.bind(this))
      return(
        <div>{siteList.length > 0 ? siteList : <div className="alert-message">We currently don't have any results for your search, try another.</div>}</div>
      );
    }

    return(
      <div></div>
    );

  }
}
