import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './Profile';

function Authorized() {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />} />
      <Route path="*" element={<Navigate to='/profile' />} />
    </Routes>
  )
}

export default Authorized;