import { useState } from 'react';
import './App.css';
import AdminLayout from './admin/AdminLayout';
import Login from './login/Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <AdminLayout>
          <div>
            <h2>Welcome to Hotel Management System</h2>
            <p>Select an option from the sidebar to get started.</p>
          </div>
        </AdminLayout>
      )}
    </div>
  );
}

export default App;
