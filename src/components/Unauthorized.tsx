import { Navigate, Route, Routes } from 'react-router-dom';
import { Body } from '../styles/body';
import Login from './Login';


function Unauthorized() {
  return (
    <Body>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Navigate to='/login' />} />
      </Routes>
    </Body>
  )
}

export default Unauthorized;

