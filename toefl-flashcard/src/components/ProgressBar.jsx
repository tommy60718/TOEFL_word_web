export default function ProgressBar({ label, current, total }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="mb-6">
      <p className="text-white mb-2 font-medium">
        {label} {current} out of {total} words
      </p>
      <div className="w-full bg-white rounded-full h-4 overflow-hidden shadow">
        <div
          className="bg-green-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
