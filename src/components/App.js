import Header from './Header.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

import css from './App.module.css';

function App() {
  return (
    <div className={css.container}>
      <Header/>
      <main className={css.content}>
        <Home/>
      </main>
      <Navbar/>
    </div>
  );
}

export default App;
