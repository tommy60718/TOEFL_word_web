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
    <div className="min-h-screen bg-purple-gradient pt-20 pb-12">
      <Header />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Profile</h1>

          {user && (
            <div className="space-y-8">
              {/* User Avatar */}
              <div className="flex justify-center mb-6">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || user.email}
                    className="w-24 h-24 rounded-full border-4 border-purple-600"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-white text-4xl">
                    {(user.displayName || user.email)?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
              </div>

              {/* User Information */}
              <div className="space-y-4 border-t pt-6">
                <div>
                  <label className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                    Name
                  </label>
                  <p className="text-gray-900 text-lg mt-1">
                    {user.displayName || 'Not provided'}
                  </p>
                </div>

                <div>
                  <label className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                    Email
                  </label>
                  <p className="text-gray-900 text-lg mt-1">{user.email}</p>
                </div>

                <div>
                  <label className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                    Account Created
                  </label>
                  <p className="text-gray-900 text-lg mt-1">
                    {formatDate(user.metadata?.creationTime)}
                  </p>
                </div>

                <div>
                  <label className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                    Last Login
                  </label>
                  <p className="text-gray-900 text-lg mt-1">
                    {formatDate(user.metadata?.lastSignInTime)}
                  </p>
                </div>

                <div>
                  <label className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                    Authentication Method
                  </label>
                  <p className="text-gray-900 text-lg mt-1">
                    {user.providerData[0]?.providerId === 'google.com'
                      ? 'Google'
                      : user.providerData[0]?.providerId === 'github.com'
                      ? 'GitHub'
                      : 'Unknown'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t pt-6 flex gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition"
                >
                  Back to Home
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
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
