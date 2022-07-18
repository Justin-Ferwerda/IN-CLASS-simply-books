/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({
  email, firebaseKey, firstName, lastName, image, favorite,
}) {
  return (
    <>
      <div>Email: {email}</div>
      <div>Firebase Key: { firebaseKey }</div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Favorite: {favorite}</div>
      <img src={image} alt={firstName} />
    </>
  );
}

AuthorCard.propTypes = {
  email: PropTypes.string,
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  favorite: PropTypes.bool,
};

AuthorCard.defaultProps = {
  email: 'justin.ferwerda@gmail.com',
  firebaseKey: 'A5uoiO4Fhiew8Mjkw',
  firstName: 'Justin',
  lastName: 'Ferwerda',
  image: 'https://pixabay.com/images/search/typhoon+eye/',
  favorite: true,
};
