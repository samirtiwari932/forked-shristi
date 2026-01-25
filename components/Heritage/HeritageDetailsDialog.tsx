import { HeritageResponse } from "@/types/heritage";
import {
  BookOpen,
  Building2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Video,
} from "lucide-react";
import { useState } from "react";
import { GoogleMapEmbed } from "./Maps";

export default function HeritageDetailsDialog({
  heritage,
  isOpen,
  onClose,
}: {
  heritage: HeritageResponse;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const images = heritage.medias.filter((m) => m.type === "IMAGE");
  const videos = heritage.medias.filter((m) => m.type === "VIDEO");
  const [showFullDesc, setShowFullDesc] = useState(false);
  const MAX_LENGTH = 250;
  const isLong = heritage.description.length > MAX_LENGTH;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl bg-white overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-linear-to-r from-blue-50 to-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {heritage.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">
                  {heritage.city?.name}, {heritage.country?.countryName}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close"
          >
            <div className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700 text-xl">
              ✕
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="relative bg-gray-50">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={images[currentImageIndex].url}
                  alt={heritage.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/api/placeholder/800/600";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev - 1 + images.length) % images.length,
                      )
                    }
                    className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 flex items-center justify-center"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) => (prev + 1) % images.length)
                    }
                    className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 flex items-center justify-center"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>

                  {/* Image counter and thumbnails */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-200 ${
                          idx === currentImageIndex
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Image counter */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Details */}
          <div className="p-8 space-y-6">
            {/* Description */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                About This Heritage Site
              </h4>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {showFullDesc || !isLong
                    ? heritage.description
                    : heritage.description.slice(0, MAX_LENGTH) + "..."}
                </p>
                {isLong && (
                  <button
                    onClick={() => setShowFullDesc((prev) => !prev)}
                    className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    {showFullDesc ? "Show Less" : "Read More"}
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${showFullDesc ? "rotate-90" : ""}`}
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">
                  {heritage.likes?.length || 0}
                </div>
                <div className="text-sm text-blue-600 font-medium">Likes</div>
              </div>
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">
                  {heritage.comments?.length || 0}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  Comments
                </div>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-purple-700 mb-1">
                  {images.length}
                </div>
                <div className="text-sm text-purple-600 font-medium">
                  Photos
                </div>
              </div>
              <div className="bg-linear-to-br from-amber-50 to-amber-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-1">
                  {videos.length}
                </div>
                <div className="text-sm text-amber-600 font-medium">Videos</div>
              </div>
            </div>

            {/* Videos if any */}
            {videos.length > 0 && (
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                  <Video className="h-5 w-5 text-blue-600" />
                  Video Tour ({videos.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className="group relative rounded-2xl overflow-hidden bg-gray-900"
                    >
                      <video
                        src={video.url}
                        controls
                        className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                        poster="/api/placeholder/400/225"
                        preload="metadata"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
                        Video {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map Section */}
            {heritage.latitude && heritage.longitude && (
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Location on Map
                </h4>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <GoogleMapEmbed
                    lat={heritage.latitude}
                    lng={heritage.longitude}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
