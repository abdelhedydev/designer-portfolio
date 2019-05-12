import React from 'react';
import { Query } from 'react-apollo';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import CATEGORIES from '../../graphql/querries';
import CategoriesStyle from './CategoriesStyle';

const Categories = ({ className }) => (
  <div className={className}>
    <h2 className="categories__title">Work</h2>
    <ul className="categories__list">
      <Query query={CATEGORIES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return map(data.categorieses, (category, index) => (
            <li key={index}>{category.name}</li>
          ));
        }}
      </Query>
    </ul>
  </div>
);

Categories.propTypes = {
  className: PropTypes.string,
};

export default CategoriesStyle(Categories);
