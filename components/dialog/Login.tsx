// LoginDialog.tsx
interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  onRegister: () => void;
  message?: string;
  feature?: string;
}

export default function LoginDialog({
  isOpen,
  onClose,
  onLogin,
  onRegister,
  message = "You need to login to access this feature",
  feature = "this feature",
}: LoginDialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with icon */}
        <div className="bg-linear-to-r from-[#5d87ff] to-[#4c73e6] p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Login Required</h3>
          <p className="text-white/90 text-sm">{message}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Please login to {feature}. Join our community to preserve cultural
            heritage.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                onLogin();
              }}
              className="w-full px-6 py-3 bg-linear-to-r from-[#5d87ff] to-[#4c73e6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all duration-200"
            >
              Go to Login
            </button>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Maybe Later
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Don't have an account?{" "}
            <button
              onClick={() => {
                onClose();
                onRegister();
              }}
              className="text-[#5d87ff] font-semibold hover:underline"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
