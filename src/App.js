import './App.css';
import { Routes, Route } from 'react-router-dom';

import UserList from './components/UserList/UserList';
import AlbumList from './components/AlbumList/AlbumList';
import PhotosList from './components/PhotosList/PhotosList';

function App() {
  return (
    <div className='main-wraper'>
    <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/albums/:userId' element={<AlbumList />} />
        <Route path='/photos/:albumId' element={<PhotosList />} />
      </Routes>
      </div>
  );
}

export default App;
