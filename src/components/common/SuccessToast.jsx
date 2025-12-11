import { CheckCircle, X } from "lucide-react";
import { useEffect } from "react";

/**
      {showSuccessToast && (
        <SuccessToast
          message={successMessage}
          onClose={() => setShowSuccessToast(false)}
        />
      )}
 */

const SuccessToast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-white rounded-lg shadow-2xl border border-green-200 p-4 flex items-center gap-3 min-w-[300px]">
        <div className="shrink-0">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-bounce-in">
            <CheckCircle className="w-7 h-7 text-green-600 animate-check" />
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">Success!</h4>
          <p className="text-sm text-gray-600">{message}</p>
        </div>

        <button
          onClick={onClose}
          className="shrink-0 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SuccessToast;
