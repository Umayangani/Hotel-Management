import React, { useState } from 'react';
import './AdminSidebar.css';

const items = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    submenu: [
      { id: 'dashboard-overview', label: 'Overview' },
      { id: 'dashboard-occupancy', label: 'Occupancy Stats' },
      { id: 'dashboard-revenue', label: 'Revenue Summary' }
    ]
  },
  {
    id: 'rooms',
    label: 'Room Management',
    submenu: [
      { id: 'room-add', label: 'Add Room' },
      { id: 'room-edit', label: 'Edit Room' },
      { id: 'room-delete', label: 'Delete Room' },
      { id: 'room-list', label: 'View Room List' }
    ]
  },
  {
    id: 'bookings',
    label: 'Booking Management',
    submenu: [
      { id: 'booking-create', label: 'Create Booking' },
      { id: 'booking-view', label: 'View Bookings' },
      { id: 'booking-checkin', label: 'Check-in / Check-out' }
    ]
  },
  {
    id: 'customers',
    label: 'Customer Management',
    submenu: [
      { id: 'customer-add', label: 'Add Customer' },
      { id: 'customer-view', label: 'View Customers' },
      { id: 'customer-history', label: 'Booking History' }
    ]
  },
  {
    id: 'payments',
    label: 'Payment Management',
    submenu: [
      { id: 'payment-record', label: 'Record Payment' },
      { id: 'payment-view', label: 'View Payments' },
      { id: 'payment-invoice', label: 'Generate Invoice' }
    ]
  },
  {
    id: 'cleaning',
    label: 'Cleaning Tasks',
    submenu: [
      { id: 'cleaning-assign', label: 'Assign Cleaning' },
      { id: 'cleaning-status', label: 'View Task Status' },
      { id: 'cleaning-update', label: 'Update Task' }
    ]
  },
  {
    id: 'kitchen',
    label: 'Kitchen Dashboard',
    submenu: [
      { id: 'kitchen-orders', label: 'Active Orders' },
      { id: 'kitchen-staff', label: 'Staff Assignment' },
      { id: 'kitchen-performance', label: 'Kitchen Performance' }
    ]
  },
  {
    id: 'menu',
    label: 'Menu Management',
    submenu: [
      { id: 'menu-add', label: 'Add Menu Item' },
      { id: 'menu-edit', label: 'Edit/Delete Item' },
      { id: 'menu-toggle', label: 'Toggle Availability' }
    ]
  },
  {
    id: 'users',
    label: 'User Management',
    submenu: [
      { id: 'user-create', label: 'Create User' },
      { id: 'user-edit', label: 'Edit Role' },
      { id: 'user-list', label: 'View User List' }
    ]
  },
  {
    id: 'reports',
    label: 'Reports & Analytics',
    submenu: [
      { id: 'report-daily', label: 'Daily Summary' },
      { id: 'report-revenue', label: 'Revenue Reports' },
      { id: 'report-occupancy', label: 'Occupancy Trends' }
    ]
  },
  {
    id: 'profile',
    label: 'Profile',
    submenu: [
      { id: 'profile-view', label: 'View Profile' },
      { id: 'profile-password', label: 'Change Password' }
    ]
  },
  { id: 'logout', label: 'Logout' }
];

export default function AdminSidebar({ active = 'dashboard', onNavigate }) {
  const [expandedMenus, setExpandedMenus] = useState([]);

  const toggleSubmenu = (id) => {
    setExpandedMenus(prev => 
      prev.includes(id) 
        ? prev.filter(menuId => menuId !== id)
        : [...prev, id]
    );
  };

  const isSubmenuExpanded = (id) => expandedMenus.includes(id);

  const renderMenuItem = (item) => {
    const isActive = active.startsWith(item.id);
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
      <li key={item.id} className={`admin-sidebar__item ${isActive ? 'active' : ''}`}>
        <button
          type="button"
          className={`admin-sidebar__link ${hasSubmenu ? 'has-submenu' : ''}`}
          onClick={() => {
            if (hasSubmenu) {
              toggleSubmenu(item.id);
            } else {
              onNavigate && onNavigate(item.id);
            }
          }}
        >
          <span className="link-text">{item.label}</span>
          {hasSubmenu && (
            <span className={`submenu-arrow ${isSubmenuExpanded(item.id) ? 'expanded' : ''}`}>
              ▾
            </span>
          )}
        </button>
        
        {hasSubmenu && isSubmenuExpanded(item.id) && (
          <ul className="admin-sidebar__submenu">
            {item.submenu.map(subItem => (
              <li key={subItem.id} className={active === subItem.id ? 'active' : ''}>
                <button
                  type="button"
                  className="admin-sidebar__sublink"
                  onClick={() => onNavigate && onNavigate(subItem.id)}
                >
                  {subItem.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="admin-sidebar" aria-label="Admin sidebar">
      <div className="admin-sidebar__brand">Admin Panel</div>
      <ul className="admin-sidebar__list">
        {items.map(renderMenuItem)}
      </ul>
      <div className="admin-sidebar__footer">
        <small>v1.0</small>
      </div>
    </nav>
  );
}