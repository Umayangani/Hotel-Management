import './App.css';
import AdminLayout from './admin/AdminLayout';

function App() {
  return (
    <div className="App">
      <AdminLayout>
        <div>
          <h2>Welcome to Hotel Management System</h2>
          <p>Select an option from the sidebar to get started.</p>
        </div>
      </AdminLayout>
    </div>
  );
}

export default App;
