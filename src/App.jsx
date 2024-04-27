import Header from './components/Header';
import Profile from './components/Profile';

import NewsList from './components/NewsList';
import Logo from './components/Logo';

function App() {
  return (
    <div className="app-wrapper">
      <Profile />
      <NewsList />
      <Logo />
    </div>
  );
}

export default App;
