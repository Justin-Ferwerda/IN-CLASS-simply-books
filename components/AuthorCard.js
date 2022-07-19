/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj }) {
  return (
    <>
      <div>{ authorObj.email }</div>
      <div>First Name: {authorObj.first_name}</div>
      <div>Last Name: {authorObj.last_name}</div>
      <div>Favorite: {authorObj.favorite}</div>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
