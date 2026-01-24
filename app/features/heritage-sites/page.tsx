"use client";

import { useState, useRef, useEffect } from "react";
import { Metadata } from "next";
import {
  Building2,
  MapPin,
  Camera,
  BookOpen,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  History,
  Castle,
  TreePine,
  Church,
  DollarSign,
  CalendarDays,
  Eye,
  Heart,
  Map,
  ChevronLeft,
  ChevronRight,
  Users,
  Image as ImageIcon,
  Video,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeritageSlider from "@/app/features/heritage-sites/HeritageSlider";
import { GoogleMapEmbed } from "@/components/Heritage/Maps";
import { usePopularHeritages } from "@/lib/hooks/usePopularHeritage";
import { HeritageResponse } from "@/types/heritage";

// Components
const HeritageDetailsDialog = ({
  heritage,
  isOpen,
  onClose,
}: {
  heritage: HeritageResponse;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const images = heritage.medias.filter((m) => m.type === "IMAGE");
  const videos = heritage.medias.filter((m) => m.type === "VIDEO");
  const [showFullDesc, setShowFullDesc] = useState(false);
  const MAX_LENGTH = 250;
  const isLong = heritage.description.length > MAX_LENGTH;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl bg-white overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">
                  {heritage.likes?.length || 0}
                </div>
                <div className="text-sm text-blue-600 font-medium">Likes</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">
                  {heritage.comments?.length || 0}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  Comments
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-purple-700 mb-1">
                  {images.length}
                </div>
                <div className="text-sm text-purple-600 font-medium">
                  Photos
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 text-center">
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
};

const HeritageSiteCard = ({
  site,
  onClick,
  onViewMap,
}: {
  site: HeritageResponse;
  onClick: () => void;
  onViewMap?: (site: HeritageResponse) => void;
}) => {
  const [imgError, setImgError] = useState(false);
  const firstImage = site.medias.find((m) => m.type === "IMAGE");

  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col border border-gray-100">
        {/* Image container with gradient overlay */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {firstImage && !imgError ? (
            <>
              <img
                src={firstImage.url}
                alt={site.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setImgError(true)}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

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
};

const CreateHeritageCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col border-2 border-dashed border-blue-200 hover:border-blue-300">
        {/* Top section with plus icon */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
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
                Add Heritage Site
              </span>
              <p className="text-sm text-gray-600 mt-1 max-w-xs">
                Share and preserve your cultural heritage
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 text-center">
          <p className="text-sm text-blue-700 font-medium">
            Click to start documenting your legacy
          </p>
        </div>
      </div>
    </div>
  );
};

const HeritageSiteCarousel = ({
  sites,
  onCreateClick,
  onSiteClick,
  onViewMap,
}: {
  sites: HeritageResponse[];
  onCreateClick: () => void;
  onSiteClick: (site: HeritageResponse) => void;
  onViewMap?: (site: HeritageResponse) => void;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  if (sites.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <Camera className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <p className="text-lg">No heritage sites available</p>
        <button
          onClick={onCreateClick}
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>Add First Heritage Site</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative group/carousel">
      {/* Navigation buttons */}
      <button
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-xl hover:shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-gray-50 flex items-center justify-center border border-gray-200"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      <button
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-xl hover:shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-gray-50 flex items-center justify-center border border-gray-200"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-2 py-4 scrollbar-hide"
      >
        {/* Create Heritage Card - Always first */}
        <div className="flex-shrink-0 w-[300px]">
          <CreateHeritageCard onClick={onCreateClick} />
        </div>

        {/* Existing Heritage Sites */}
        {sites.map((site) => (
          <div key={site.id} className="flex-shrink-0 w-[300px]">
            <HeritageSiteCard
              site={site}
              onClick={() => onSiteClick(site)}
              onViewMap={onViewMap}
            />
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center gap-1.5 mt-6">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
        <div className="h-1.5 w-6 rounded-full bg-blue-600"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default function HeritagePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedHeritage, setSelectedHeritage] =
    useState<HeritageResponse | null>(null);
  const [selectedHeritageForMap, setSelectedHeritageForMap] =
    useState<HeritageResponse | null>(null);
  const [isHeritageDialogOpen, setIsHeritageDialogOpen] = useState(false);

  const { heritages, loading, error } = usePopularHeritages();

  const handleHeritageClick = (heritage: HeritageResponse) => {
    setSelectedHeritage(heritage);
    setIsHeritageDialogOpen(true);
  };

  const handleViewOnMap = (heritage: HeritageResponse) => {
    setSelectedHeritageForMap(heritage);
  };

  const sisterPages = [
    {
      id: 1,
      title: "Family Groups & Events",
      description:
        "Plan, manage and celebrate family and community events with ease",
      icon: <CalendarDays className="h-6 w-6" />,
      href: "/features/events",
    },
    {
      id: 2,
      title: "Family Finance Management",
      description: "Track treasury, manage puja funds and donations securely",
      icon: <DollarSign className="h-6 w-6" />,
      href: "/features/finance",
    },
    {
      id: 3,
      title: "Family Tree & Connections",
      description:
        "Build and maintain your complete family tree with generations",
      icon: <TreePine className="h-6 w-6" />,
      href: "/features/family-tree",
    },
    {
      id: 4,
      title: "Memory Vault",
      description:
        "Preserve photos, stories and memories in a secure digital vault",
      icon: <Camera className="h-6 w-6" />,
      href: "/features/memory-vault",
    },
  ];

  const heritageTypes = [
    {
      icon: <Castle className="h-6 w-6" />,
      title: "Ancestral Homes",
      description: "Document family homes and ancestral properties",
      features: [
        "Add photos and historical records",
        "Record architectural details",
        "Map family ownership history",
        "Document renovation stories",
      ],
    },
    {
      icon: <Church className="h-6 w-6" />,
      title: "Religious Sites",
      description: "Preserve family temples, churches, and religious landmarks",
      features: [
        "Record religious ceremonies",
        "Document spiritual significance",
        "Track maintenance history",
        "Share pilgrimage stories",
      ],
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Cultural Landmarks",
      description: "Document culturally significant family locations",
      features: [
        "Record festivals and celebrations",
        "Document traditional practices",
        "Map cultural geography",
        "Preserve oral histories",
      ],
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Historical Records",
      description: "Digitize and preserve family documents and artifacts",
      features: [
        "Scan old photographs",
        "Digitize handwritten records",
        "Record family tree connections",
        "Archive important documents",
      ],
    },
  ];

  const heritageFeatures = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Heritage Site Addition",
      description:
        "Add and document your family's heritage sites with rich details",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Preservation Tools",
      description: "Tools to preserve heritage for future generations",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Public Heritage Feed",
      description: "Explore heritage sites from families across the app",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Media Gallery",
      description: "Upload photos, videos, and documents for each site",
    },
  ];

  const heritageFeedFeatures = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Discover Heritage",
      description: "Explore heritage sites from families across India",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Appreciate Culture",
      description: "Like and comment on culturally significant sites",
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Heritage Map",
      description: "View heritage sites on an interactive map",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learn History",
      description: "Read stories and historical context of each site",
    },
  ];

  const benefits = [
    "Preserve family history for future generations",
    "Connect younger family members with roots",
    "Create a digital archive of cultural heritage",
    "Share and celebrate cultural diversity",
    "Document vanishing architectural styles",
    "Build a comprehensive family legacy",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      <Navbar />

      {/* Hero Slider Section */}
      <HeritageSlider />

      {/* Heritage Sites Discovery Section - Added RIGHT AFTER Hero Slider */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 border border-blue-200">
              <Globe className="h-4 w-4" />
              Discover & Explore
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover <span className="text-[#5d87ff]">Nepal's Heritage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore and preserve Nepal's rich cultural and natural heritage
              through community-shared sites, stories, and memories.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading heritage sites...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 inline-block">
                <p className="text-red-600 font-medium">{error}</p>
              </div>
            </div>
          ) : (
            <>
              <HeritageSiteCarousel
                sites={heritages}
                onCreateClick={() => setIsLoginOpen(true)}
                onSiteClick={handleHeritageClick}
                onViewMap={handleViewOnMap}
              />
            </>
          )}
        </div>
      </section>

      {/* Sister Pages Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 border border-blue-200">
              <Users className="h-4 w-4" />
              Explore Features
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Family Management Suite
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sisterPages.map((page) => (
              <a
                key={page.id}
                href={page.href}
                className="group block transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
                  <div className="p-3 bg-blue-50 rounded-xl inline-block mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-blue-50 transition-all duration-300">
                    <div className="text-blue-600">{page.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {page.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Introduction Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 border border-blue-200">
                <History className="h-4 w-4" />
                Cultural Legacy
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Preserving Your Family's Cultural Legacy
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Every family has a story—ancestral homes that witnessed
                generations, temples where prayers echoed for centuries, lands
                that nourished families, and cultural practices that defined
                identities. These heritage sites are more than just physical
                locations; they are living connections to our past.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Shristi Universe's Heritage Management feature helps families
                document, preserve, and share their cultural legacy with future
                generations. From private ancestral properties to public
                cultural landmarks, our platform provides the tools to keep
                family history alive and accessible.
              </p>
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-2xl mt-8 shadow-xl">
                <p className="text-white font-medium leading-relaxed text-lg">
                  Transform memories into a permanent digital legacy that can be
                  passed down through generations, ensuring your family's story
                  is never forgotten.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border-2 border-blue-200 shadow-2xl">
                  <div className="absolute -top-4 -right-4 h-24 w-24 bg-blue-400/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-blue-500/20 rounded-full blur-2xl" />
                  <div className="text-center relative z-10">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl inline-block mb-6 shadow-lg">
                      <Building2 className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-gray-900 font-bold text-2xl mb-2">
                      Heritage Preservation Hub
                    </p>
                    <p className="text-gray-600">
                      Where memories meet technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 border border-blue-200">
                <Shield className="h-4 w-4" />
                Core Features
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Complete Heritage Management System
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Three powerful pillars to document, preserve, and share your
                family's heritage with the world
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {heritageFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl inline-block mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Heritage Site Addition */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Documentation
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6 text-balance">
                Heritage Site Addition & Documentation
              </h2>
              <p className="text-[#64748b] mb-8 leading-relaxed">
                Add your family&apos;s heritage sites with comprehensive
                details, creating a rich digital record that captures both
                physical and cultural aspects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {heritageTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-[#e2ded9] p-5 hover:border-[#5d87ff]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-[#5d87ff]/10 rounded-xl">
                        <div className="text-[#5d87ff]">{type.icon}</div>
                      </div>
                      <h3 className="font-semibold text-[#2d3748]">
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-[#64748b] text-sm mb-3">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[#5d87ff] flex-shrink-0 mt-0.5" />
                          <span className="text-[#64748b] text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#3d4f6f] rounded-3xl h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#5d87ff]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5d87ff]/20 rounded-full blur-3xl" />
                <div className="text-center p-6 relative z-10">
                  <div className="bg-[#5d87ff] p-5 rounded-2xl inline-block mb-4 shadow-lg">
                    <MapPin className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-white font-semibold text-xl mb-2">
                    Add Heritage Sites
                  </p>
                  <p className="text-white/70 text-sm max-w-xs">
                    Document and preserve your family&apos;s cultural landmarks
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Public Heritage Feed */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Heritage Feed
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4 text-balance">
                Public Heritage Feed – Explore Cultural Diversity
              </h2>
              <p className="text-[#64748b] max-w-3xl mx-auto">
                Discover and appreciate heritage sites from families across the
                Shristi Universe community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {heritageFeedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#f1ede8] rounded-2xl p-6 text-center border border-[#e2ded9] hover:border-[#5d87ff]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="bg-[#5d87ff]/10 p-4 rounded-xl inline-block mb-4 group-hover:bg-[#5d87ff] transition-colors duration-300">
                    <div className="text-[#5d87ff] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748b] text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Benefits
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] text-balance">
                Why Heritage Management Matters
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-[#e2ded9] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#f1ede8] transition-colors"
                  >
                    <div className="p-1.5 bg-[#5d87ff]/10 rounded-lg">
                      <Star className="h-4 w-4 text-[#5d87ff]" />
                    </div>
                    <span className="text-[#2d3748] font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-20 text-center">
            <div className="bg-[#3d4f6f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#5d87ff]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5d87ff]/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
                  Get Started
                </span>
                <h2 className="text-3xl font-bold mb-6 text-balance">
                  Start Preserving Your Family&apos;s Legacy Today
                </h2>
                <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
                  Every family has a story worth preserving. From ancestral
                  homes to cultural traditions, your heritage is a precious gift
                  for future generations. Join thousands of families who are
                  building their digital legacy on Shristi Universe.
                </p>
                <button className="bg-[#5d87ff] text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#4a72e6] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Begin Your Heritage Journey
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Heritage Details Dialog */}
      {selectedHeritage && (
        <HeritageDetailsDialog
          heritage={selectedHeritage}
          isOpen={isHeritageDialogOpen}
          onClose={() => {
            setIsHeritageDialogOpen(false);
            setSelectedHeritage(null);
          }}
        />
      )}

      {/* Map Modal */}
      {selectedHeritageForMap && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedHeritageForMap(null)}
        >
          <div
            className="w-full max-w-4xl rounded-3xl shadow-2xl bg-white overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedHeritageForMap.title}
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" />
                  {selectedHeritageForMap.city?.name},{" "}
                  {selectedHeritageForMap.country?.countryName}
                </p>
              </div>
              <button
                onClick={() => setSelectedHeritageForMap(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <div className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700 text-xl">
                  ✕
                </div>
              </button>
            </div>
            <div className="p-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <GoogleMapEmbed
                  lat={selectedHeritageForMap.latitude ?? 0}
                  lng={selectedHeritageForMap.longitude ?? 0}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Showing location of {selectedHeritageForMap.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
