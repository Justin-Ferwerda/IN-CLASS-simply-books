import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import AuthorCard from '../../components/AuthorCard';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey)
      .then(setAuthorDetails);
    console.warn(authorDetails);
  }, [authorDetails, firebaseKey]);

  return (
    <>
      <AuthorCard authorObj={authorDetails} />
      <BookCard bookObj={authorDetails.books} />
    </>
  );
}
