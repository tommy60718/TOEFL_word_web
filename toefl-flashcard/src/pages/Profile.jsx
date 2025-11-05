import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-teal-blue-gradient pt-20 pb-12">
      <Header />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card shadow-xl p-8 md:p-10">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-accent-500 to-blue-accent-400 bg-clip-text mb-8">
            Profile
          </h1>

          {user && (
            <div className="space-y-8">
              {/* User Avatar */}
              <div className="flex justify-center mb-8">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || user.email}
                    className="w-32 h-32 rounded-full border-4 border-green-accent-500 shadow-xl"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-accent-500 to-blue-accent-400 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                    {(user.displayName || user.email)?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
              </div>

              {/* User Information */}
              <div className="space-y-6 border-t border-gray-200 pt-8">
                <div>
                  <label className="text-gray-600 text-xs font-bold uppercase tracking-wider">
                    Name
                  </label>
                  <p className="text-gray-900 text-lg mt-2 font-semibold">
                    {user.displayName || 'Not provided'}
                  </p>
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-bold uppercase tracking-wider">
                    Email
                  </label>
                  <p className="text-gray-900 text-lg mt-2 font-medium">
                    {user.email}
                  </p>
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-bold uppercase tracking-wider">
                    Account Created
                  </label>
                  <p className="text-gray-900 text-lg mt-2 font-medium">
                    {formatDate(user.metadata?.creationTime)}
                  </p>
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-bold uppercase tracking-wider">
                    Last Login
                  </label>
                  <p className="text-gray-900 text-lg mt-2 font-medium">
                    {formatDate(user.metadata?.lastSignInTime)}
                  </p>
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-bold uppercase tracking-wider">
                    Authentication Method
                  </label>
                  <div className="mt-2">
                    <span className="inline-block px-4 py-2 bg-green-accent-100 text-green-accent-800 rounded-full text-sm font-semibold">
                      {user.providerData[0]?.providerId === 'google.com'
                        ? 'Google'
                        : user.providerData[0]?.providerId === 'github.com'
                        ? 'GitHub'
                        : 'Unknown'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 pt-8 flex gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
                  Back to Home
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-accent-400 to-blue-accent-600 hover:shadow-lg hover:-translate-y-1 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
