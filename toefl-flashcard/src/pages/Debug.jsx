// Debug page to verify environment variables
export default function Debug() {
  return (
    <div className="min-h-screen bg-purple-gradient pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Firebase Config Debug</h1>
        
        <div className="space-y-4 font-mono text-sm bg-gray-100 p-4 rounded">
          <p><strong>API Key:</strong> {import.meta.env.VITE_FIREBASE_API_KEY || 'NOT SET'}</p>
          <p><strong>Auth Domain:</strong> {import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'NOT SET'}</p>
          <p><strong>Project ID:</strong> {import.meta.env.VITE_FIREBASE_PROJECT_ID || 'NOT SET'}</p>
          <p><strong>Storage Bucket:</strong> {import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'NOT SET'}</p>
          <p><strong>Messaging Sender ID:</strong> {import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'NOT SET'}</p>
          <p><strong>App ID:</strong> {import.meta.env.VITE_FIREBASE_APP_ID || 'NOT SET'}</p>
        </div>

        <div className="mt-6 p-4 bg-blue-100 text-blue-700 rounded">
          <p className="text-sm">
            If all values show "NOT SET", the environment variables are not configured in Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}
