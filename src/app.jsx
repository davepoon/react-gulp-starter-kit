import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import PublisherSearch from './components/PublisherSearch.jsx'

/*
Component hierarchy
-PublisherSearch
  -SearchBar
  -SiteList
*/
// Mocks
let sites = [
  {
    "id": 1,
    "siteName": "SurferMag",
    "siteUrl": "www.surfermag.com",
    "description": "This is the description for SurferMag",
    "categoryIds": [
      2
    ]
  },
  {
    "id": 2,
    "siteName": "Ebay",
    "siteUrl": "www.ebay.com.au",
    "description": "This is the description for ebay",
    "categoryIds": [
      1
    ]
  },
  {
    "id": 3,
    "siteName": "Robs UI Tips",
    "siteUrl": "www.awesomeui.com.au",
    "description": "This is the description for the best site in the world. It is the best:)",
    "categoryIds": [
      4, 3
    ]
  },
  {
    "id": 4,
    "siteName": "Table Tennis Tips - How to not come runners up",
    "siteUrl": "www.ttt.com",
    "description": "This is the description for Table Tennis Tips",
    "categoryIds": [
      1, 2, 3, 4
     ]
  }
];

let categories = [
  {
    id: 1,
    description: "Arts & Entertainment"
  },
  {
    id: 2,
    description: "Automotive"
  },
  {
    id: 3,
    description: "Business"
  },
  {
    id: 4,
    description: "Careers"
  }
];

// Initialise and merge the JSON objects for data retrieval
categories.lookup = {};
for (let i = 0; i < categories.length; i++) {
    categories.lookup[categories[i].id] = categories[i];
}
for (let i = 0; i < sites.length; i++) {
  for (let j = 0; j < sites[i].categoryIds.length; j++) {
    sites[i].categoryIds[j] = categories.lookup[sites[i].categoryIds[j]];
    }
}

ReactDOM.render(<PublisherSearch sites={sites}/>, document.querySelector('.main'));
