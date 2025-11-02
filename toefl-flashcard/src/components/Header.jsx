export default function Header() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            TOEFL Flashcards
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition">
              Log in
            </a>
            <a href="#" className="bg-purple-magoosh-700 px-4 py-2 rounded hover:bg-purple-magoosh-600 transition">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
