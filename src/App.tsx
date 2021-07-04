import React from 'react';
import cn from 'classnames';

import logo from './logo.svg';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <header className={s.App_header}>
        <img src={logo} className={s.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={cn(s.App_link, s.color_text)}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
