import React from 'react';
import ReactDOM from 'react-react-dom';

function App() {
  return (
    <div className="container">
      <div className="flag">
        <div className="green" />
        <div className="white">
          <div className="crescent" />
          <div className="star" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  flag: {
    width: 300,
    height: 200,
    display: 'flex',
  },
  green: {
    backgroundColor: '#2E8B57',
    width: '70%',
    height: '100%',
  },
  white: {
    backgroundColor: '#FFFFFF',
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crescent: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#2E8B57',
    position: 'relative',
    top: 20,
    left: 20,
  },
  star: {
    width: 20,
    height: 20,
    backgroundColor: '#2E8B57',
    position: 'relative',
    top: 40,
    left: 40,
  },
};

ReactDOM.render(<App />, document.getElementById('root'));