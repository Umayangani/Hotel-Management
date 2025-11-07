import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import './AdminSidebar.css';

export default function AdminLayout({ children }) {
  const [active, setActive] = useState('dashboard-overview');

  function handleNavigate(id) {
    if (id === 'logout') {
      // simple example behaviour; replace with real logout flow
      alert('Logging out...');
      return;
    }
    setActive(id);
    // integration: you might want to use react-router's navigate here
  }

  // Convert kebab-case to Title Case
  const formatPageTitle = (id) => {
    return id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AdminSidebar active={active} onNavigate={handleNavigate} />
      <main style={{ flex: 1, padding: 24 }}>
        <h1>{formatPageTitle(active)}</h1>
        <div>{children}</div>
      </main>
    </div>
  );
}