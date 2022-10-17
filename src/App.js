import './reset.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import AppNav from './components/AppNav';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile'
import Chats from './components/Chats';

function App() {
  return (
    <div className="App">
      <AppNav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='profile' element={<Profile userName={"Valera"} userAge={20} />} />
        <Route path='chats' element={<Chats />}>
          <Route path=':chatId' element={<Chats />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;