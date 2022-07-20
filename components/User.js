/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Email: {email}
          </Card.Text>
          <Card.Text>
            Last Login: {lastLogin}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lastLogin: PropTypes.string.isRequired,
};

export default User;
