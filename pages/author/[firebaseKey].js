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
  }, [firebaseKey]);

  return (
    <>
      <AuthorCard key={firebaseKey} authorObj={authorDetails} onUpdate={() => null} />
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={() => null} />
        ))}
      </div>

    </>
  );
}
