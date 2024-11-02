import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';
// import { authActions } from './store';

// const dispatch = useDispatch();

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isAuthenticated? <UserProfile /> : <Auth /> }
      <Counter />
    </Fragment>
  );
}

export default App;
