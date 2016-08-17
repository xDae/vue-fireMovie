import firebasedb from '../firebaseConfig';

const getMovies = () => (
  new Promise((resolve) => (
    firebasedb.ref('movies')
      .on('value', (snapshot) => resolve(snapshot.val()))
  ))
);

export default getMovies;
