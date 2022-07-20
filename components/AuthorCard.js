/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { deleteAuthorBooks } from '../api/mergedData';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name} ${authorObj.last_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ authorObj.email }</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{ authorObj.favorite ? 'Favorite' : '' }</Card.Subtitle>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
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
  onUpdate: PropTypes.func.isRequired,
};
