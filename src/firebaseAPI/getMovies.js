import firebasedb from '../firebaseConfig';
import _ from 'lodash';

const getMovies = () => (
  new Promise(resolve => (
    firebasedb.ref('movies')
      .on('value', (snapshot) => resolve(_.toArray(snapshot.val())))
  ))
);

export default getMovies;
