/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <img src={image} alt={name} />
      <div>Last Login: {lastLogin} </div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'Justin',
  email: 'justin.ferwerda@gmail.com',
  image: 'https://picshttps://pixabay.com/images/search/typhoon+eye/um.photos/200',
  lastLogin: '7/16/21, 2:34:34 PM',
};

export default User;
