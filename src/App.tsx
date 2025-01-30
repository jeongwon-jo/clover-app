import React from 'react';
import Router from 'router/Router';

function App() {
  return (
    <div id='wrap'>
      <div className="contents__wrap">
        <div className="clover__info">
        </div>
        <div className="clover__contents">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
