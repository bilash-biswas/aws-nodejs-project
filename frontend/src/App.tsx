import React, { useState } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { User } from './types/user';
import './App.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header onAddClick={handleAddUser} />
      
      <main className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                User Management
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Manage your team members and their information in one place.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-2xl text-indigo-700 text-sm font-semibold border border-indigo-100">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                System Operational
              </div>
            </div>
          </div>
        </div>

        <UserList onEdit={handleEditUser} />
      </main>

      <UserForm 
        user={selectedUser} 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
      />

      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100 mt-10">
        <p>&copy; 2026 UserHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
