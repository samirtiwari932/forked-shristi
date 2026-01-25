import { EventResponse } from "@/types/event";
import { Calendar, Camera, ImageIcon, MapPin, Users } from "lucide-react";
import { useState } from "react";

export default function EventSiteCard({
  event,
  onClick,
  onViewMap,
  onJoinClick,
}: {
  event: EventResponse;
  onClick: () => void;
  onViewMap?: (event: EventResponse) => void;
  onJoinClick?: (event: EventResponse) => void;
}) {
  const [imgError, setImgError] = useState(false);
  const coverImage =
    event.coverImage || event.medias.find((m) => m.type === "IMAGE");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col border border-gray-100">
        {/* Image container with gradient overlay */}
        <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
          {coverImage && !imgError ? (
            <>
              <img
                src={coverImage.url}
                alt={event.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setImgError(true)}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              {event.medias.filter((m) => m.type === "IMAGE").length > 1 && (
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                  <ImageIcon className="h-3 w-3" />+
                  {event.medias.filter((m) => m.type === "IMAGE").length - 1}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              <Camera className="h-12 w-12 opacity-50" />
            </div>
          )}

          {/* Event Type Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
            <div className="flex items-center gap-1.5">
              {event.type === "PUBLIC" ? (
                <span className="text-xs font-medium text-blue-600">
                  Public
                </span>
              ) : (
                <span className="text-xs font-medium text-purple-600">
                  Private
                </span>
              )}
            </div>
          </div>

          {/* Location badge */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-xs font-medium text-gray-800">
                {event.city?.name || "Unknown"}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors">
              {event.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {event.description.substring(0, 100)}...
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>{formatDate(event.startDate)}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Users className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium">
              {event.participantsCount}{" "}
              {event.participantsCount === 1 ? "participant" : "participants"}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onJoinClick?.(event);
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                event.going
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {event.going ? (
                <>
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Going
                </>
              ) : (
                "Join Event"
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewMap?.(event);
              }}
              className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
