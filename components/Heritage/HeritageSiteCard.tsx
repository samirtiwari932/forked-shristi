import { HeritageResponse } from "@/types/heritage";
import { Camera, Heart, ImageIcon, Map, MapPin, Users } from "lucide-react";
import { useState } from "react";

export default function HeritageSiteCard({
  site,
  onClick,
  onViewMap,
}: {
  site: HeritageResponse;
  onClick: () => void;
  onViewMap?: (site: HeritageResponse) => void;
  onJoinClick?: (site: HeritageResponse) => void;
}) {
  const [imgError, setImgError] = useState(false);
  const firstImage = site.medias.find((m) => m.type === "IMAGE");

  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col border border-gray-100">
        {/* Image container with gradient overlay */}
        <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
          {firstImage && !imgError ? (
            <>
              <img
                src={firstImage.url}
                alt={site.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setImgError(true)}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              {site.medias.filter((m) => m.type === "IMAGE").length > 1 && (
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                  <ImageIcon className="h-3 w-3" />+
                  {site.medias.filter((m) => m.type === "IMAGE").length - 1}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              <Camera className="h-12 w-12 opacity-50" />
            </div>
          )}

          {/* Location badge */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-xs font-medium text-gray-800">
                {site.city?.name || "Unknown"}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors">
              {site.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {site.description.substring(0, 100)}...
            </p>
          </div>

          {/* Stats and actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-600">
                <Heart className="h-4 w-4 text-red-400 fill-red-400" />
                <span className="text-sm font-medium">
                  {site.likes?.length || 0}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium">
                  {site.comments?.length || 0}
                </span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewMap?.(site);
              }}
              className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 px-3 py-1.5 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Map className="h-4 w-4" />
              View Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
