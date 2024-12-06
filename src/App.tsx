import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header />
      <main style={{ padding: '1rem' }}>
        <p>타이머 페이지를 만들어 봅시다!</p>
      </main>
    </div>
  );
};

export default App;