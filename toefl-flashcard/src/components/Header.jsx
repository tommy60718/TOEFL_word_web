import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setShowMenu(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="header-sticky shadow-soft border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-bold text-xl text-transparent bg-gradient-to-r from-green-accent-500 to-blue-accent-400 bg-clip-text hover:opacity-80 transition-opacity"
          >
            TOEFL Flashcards
          </Link>

          {/* User Menu */}
          {user && (
            <div className="flex gap-4 items-center relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || user.email}
                    className="w-8 h-8 rounded-full border-2 border-green-accent-500"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-accent-500 to-blue-accent-400 flex items-center justify-center text-white text-sm font-semibold">
                    {(user.displayName || user.email)?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
                <span className="hidden sm:inline text-sm font-medium text-gray-900">
                  {user.displayName || user.email?.split('@')[0] || 'User'}
                </span>
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-card shadow-lg-soft py-2 top-full border border-gray-100 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-50 transition-colors text-gray-900 font-medium"
                    onClick={() => setShowMenu(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-red-500 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
