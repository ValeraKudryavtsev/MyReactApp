import './App.css';

function App() {
  const name = 'Valera';

  return (
    <div className="App">
      <header className="App-header">
        <Message name={name}></Message>
      </header>
    </div>
  );
}

export default App;

const Message = ({ name }) => {
  return (
    <div>
      My First React App
      <h3 className='testClass'>Hello, {name}!</h3>
    </div>
  );
}