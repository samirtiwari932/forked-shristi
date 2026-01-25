import { EventResponse } from "@/types/event";
import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function EventDetailsDialog({
  event,
  isOpen,
  onClose,
  onViewMap,
}: {
  event: EventResponse;
  isOpen: boolean;
  onClose: () => void;
  onViewMap?: (event: EventResponse) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const images = event.medias.filter((m) => m.type === "IMAGE");
  const [showFullDesc, setShowFullDesc] = useState(false);
  const MAX_LENGTH = 250;
  const isLong = event.description.length > MAX_LENGTH;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{event.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">
                  {event.city?.name}, {event.city?.countryName}
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
                  alt={event.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
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

                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Details */}
          <div className="p-8 space-y-6">
            {/* Event Times */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Start</span>
                </div>
                <p className="text-sm text-gray-700">
                  {formatDate(event.startDate)}
                </p>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-gray-900">End</span>
                </div>
                <p className="text-sm text-gray-700">
                  {formatDate(event.endDate)}
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                About This Event
              </h4>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {showFullDesc || !isLong
                    ? event.description
                    : event.description.slice(0, MAX_LENGTH) + "..."}
                </p>
                {isLong && (
                  <button
                    onClick={() => setShowFullDesc((prev) => !prev)}
                    className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    {showFullDesc ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">
                  {event.participantsCount}
                </div>
                <div className="text-sm text-blue-600 font-medium flex items-center justify-center gap-1">
                  <Users className="h-4 w-4" />
                  Participants
                </div>
              </div>
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">
                  {event.type}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  Event Type
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
            </div>

            {/* Organizer */}
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-semibold text-lg mb-4 text-gray-900">
                Organized By
              </h4>
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4">
                {event.owner.picture ? (
                  <img
                    src={event.owner.picture.url}
                    alt={event.owner.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {event.owner.name}
                  </p>
                  <p className="text-sm text-gray-600">{event.owner.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
