
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Register from '../Register/Register';
import Login from '../Login/Login';
import BlogsList from '../BlogsList/BlogsList';
import CreateEditPost from '../CreateEditPost/CreateEditPost';

function App() {
  return (
    <div className='min-h-screen h-[100%] bg-[#dcdcdc]'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogsList" element={<BlogsList />} />
          <Route path="/blog/:blogId?" element={<CreateEditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
