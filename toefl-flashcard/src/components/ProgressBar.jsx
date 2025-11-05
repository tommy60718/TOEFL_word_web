export default function ProgressBar({ label, current, total }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <p className="text-white font-semibold">
          {label}
        </p>
        <span className="text-white text-sm font-medium">
          {current} / {total}
        </span>
      </div>
      <div className="progress-bar h-2 bg-white/20">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-2 text-white/75 text-xs font-medium">
        {percentage}% completed
      </div>
    </div>
  );
}
