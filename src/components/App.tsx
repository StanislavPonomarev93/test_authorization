import { useState } from 'react';
import Authorized from './Authorized';
import Unauthorized from './Unauthorized';
import { Auth } from '../contexts/AuthContext';


function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem('password'));

  return (
    <Auth.Provider value={[auth, setAuth]}>
      {auth && <Authorized />}
      {!auth && <Unauthorized />}
    </Auth.Provider>
  )
}

export default App;
