export default function CreateEventCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-linear-to-br from-blue-50 via-white to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col border-2 border-dashed border-blue-200 hover:border-blue-300">
        {/* Top section with plus icon */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" />
            </div>
            <div className="text-center">
              <span className="text-blue-700 font-bold text-lg">
                Create Event
              </span>
              <p className="text-sm text-gray-600 mt-1 max-w-xs">
                Bring your community together
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="bg-linear-to-r from-blue-50 to-blue-100 p-5 text-center">
          <p className="text-sm text-blue-700 font-medium">
            Click to start planning your event
          </p>
        </div>
      </div>
    </div>
  );
}
