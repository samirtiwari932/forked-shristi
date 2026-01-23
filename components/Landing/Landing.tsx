"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Familytree from "@/public/assets/images/Familytree.jpg";

import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Cloud,
  Camera,
  Bell,
  MapPin,
  TreePine,
} from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import logo from "@/public/assets/images/shristi_logo.png";
import family from "@/public/assets/images/family.png";
import Footer from "./Footer";
import Feedback from "@/components/ContactUs/feedback";
import { Button } from "@/components/ui/button";
import shristimob from "@/public/assets/images/shristimob.jpeg";
import royalFamilyTree from "@/public/assets/images/RoyalFamilyTree.jpg";
import bouddhanathStupa from "@/public/assets/images/bouddhanath-stupa.jpg";

import { HeritageResponse } from "@/types/heritage";
import { usePopularHeritages } from "@/lib/hooks/usePopularHeritage";
import { FamilyTreeSearchResponse } from "@/types/family";
import { familyApi } from "@/lib/api/family";
import FamilySearchDialog from "./FamilyTreeSearch/FamilyTreeSearchDialog";
import AdBsConverter from "@/components/common/DateConverter";
import { GoogleMapEmbed } from "../Heritage/Maps";
import Image, { StaticImageData } from "next/image";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold dark:text-white">
            {heritage.title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="relative">
              <img
                src={images[currentImageIndex].url}
                alt={heritage.title}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/800x600?text=Image+Unavailable";
                }}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev - 1 + images.length) % images.length,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) => (prev + 1) % images.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Details */}
          <div className="p-6 space-y-4">
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="h-5 w-5" />
              <span>
                {heritage.city?.name}, {heritage.country?.countryName}
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-lg mb-2 dark:text-white">
                About
              </h4>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {showFullDesc || !isLong
                  ? heritage.description
                  : heritage.description.slice(0, MAX_LENGTH) + "..."}
              </p>
              {isLong && (
                <button
                  onClick={() => setShowFullDesc((prev) => !prev)}
                  className="mt-2 text-sm font-medium text-[#5d87ff] hover:underline"
                >
                  {showFullDesc ? "Read less" : "Read more"}
                </button>
              )}
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👍</span>
                <span className="text-gray-600 dark:text-gray-300">
                  {heritage.likes?.length || 0} Likes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💬</span>
                <span className="text-gray-600 dark:text-gray-300">
                  {heritage.comments?.length || 0} Comments
                </span>
              </div>
            </div>

            {/* Videos if any */}
            {videos.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold text-lg mb-3 dark:text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#5d87ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Videos ({videos.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videos.map((video, index) => (
                    <div key={video.id} className="relative group">
                      <video
                        src={video.url}
                        controls
                        className="w-full h-56 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        preload="metadata"
                      />
                      <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                        Video {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ADD THIS MAP SECTION */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-semibold text-lg mb-3 dark:text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#5d87ff]" />
                Location
              </h4>
              <div className="rounded-lg overflow-hidden">
                <GoogleMapEmbed
                  lat={heritage.latitude ?? 0}
                  lng={heritage.longitude ?? 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.shristi.universe";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/shristi-universe/id6751426376"; // replace when ready
const DESKTOP_LANDING_URL = ""; // optional

// ---------- Helpers (SSR-safe) ----------
function isAndroidUA() {
  if (typeof navigator === "undefined") return false;
  return /Android/i.test(navigator.userAgent || "");
}
function isIOSUA() {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent || "");
}
function isSmallViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches; // tailwind md
}
type Platform = "android" | "ios" | "desktop";
const getPlatform = (): Platform => {
  if (typeof navigator === "undefined" || typeof window === "undefined")
    return "desktop";
  if (isAndroidUA()) return "android";
  if (isIOSUA()) return "ios";
  return "desktop";
};

type Feature = {
  title: string;
  description: string;
  icon: string;
  image: StaticImageData | string;
  alt: string;
};

const features: Feature[] = [
  {
    title: "Family Tree Builder",
    description:
      "Build and expand your family tree with ease. Connect generations, document relationships, and keep your ancestry alive.",
    icon: "🌳",
    image: royalFamilyTree,
    alt: "Family tree illustration with generations",
  },
  {
    title: "Heritage Preservation",
    description:
      "Preserve cultural and family heritage sites. Safeguard stories, photos, and history for future generations to explore.",
    icon: "📜",
    image: bouddhanathStupa,
    alt: "Historic temple architecture symbolizing heritage",
  },
  {
    title: "Event Planning",
    description:
      "Plan family gatherings, reunions, and celebrations. Keep memories alive with organized and documented events.",
    icon: "📖",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop&auto=format&q=80",
    alt: "Beautifully decorated event celebration table",
  },
  {
    title: "Finance Management",
    description:
      "Manage family funds transparently. Track budgets, contributions, and expenses for group events and shared programs.",
    icon: "💰",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&auto=format&q=80",
    alt: "Calculator and financial planning documents",
  },
  {
    title: "Story & Document Vault",
    description:
      "Securely store and share important documents, stories, and photos. Access them anytime to keep your legacy safe.",
    icon: "📦",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=600&fit=crop&auto=format&q=80",
    alt: "Old archive library with books and documents",
  },
];

const HeritageSiteCard = ({
  site,

  onClick,
  onViewMap,
}: {
  site: HeritageResponse;
  onCreateClick: () => void;
  onClick: () => void;
  onViewMap?: (site: HeritageResponse) => void;
}) => {
  const [imgError, setImgError] = useState(false);
  const firstImage = site.medias.find((m) => m.type === "IMAGE");

  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 h-full flex flex-col">
        <div className="aspect-4/3 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
          {firstImage && !imgError ? (
            <>
              <img
                src={firstImage.url}
                alt={site.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={() => setImgError(true)}
              />
              {site.medias.filter((m) => m.type === "IMAGE").length > 1 && (
                <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                  +{site.medias.filter((m) => m.type === "IMAGE").length - 1}{" "}
                  photos
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400 text-sm">
              Image unavailable
            </div>
          )}
        </div>

        {/* Content – takes remaining height */}
        <div className="p-4 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 mb-1">
              {site.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{site.city?.name || "Unknown"}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mt-4 text-xs text-gray-600 dark:text-gray-300">
            <span>Like {site.likes?.length || 0}</span>
            <span>Comment {site.comments?.length || 0}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewMap?.(site);
              }}
              className="flex items-center gap-1 text-[#5d87ff] hover:underline ml-auto"
            >
              <MapPin className="h-3.5 w-3.5" />
              Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Heritage Site Carousel Component - Add this after HeritageSiteCard
export const HeritageSiteCarousel = ({
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
      const scrollAmount = 350;
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
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No heritage sites available
      </div>
    );
  }

  return (
    <div className="relative group/carousel">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-12 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Create Heritage Card - Always first */}
        <div className="shrink-0 w-75">
          <CreateHeritageCard onClick={onCreateClick} />
        </div>

        {/* Existing Heritage Sites */}
        {sites.map((site) => (
          <div key={site.id} className="shrink-0 w-75 ">
            <HeritageSiteCard
              site={site}
              onCreateClick={onCreateClick}
              onClick={() => onSiteClick(site)}
              onViewMap={onViewMap}
            />
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};

const CreateHeritageCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 h-full flex flex-col">
        {/* Top section with plus icon */}
        <div className="aspect-4/3 bg-linear-to-br from-[#5d87ff]/5 to-transparent dark:from-[#5d87ff]/10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#5d87ff]/10 dark:bg-[#5d87ff]/20 flex items-center justify-center group-hover:bg-[#5d87ff]/20 dark:group-hover:bg-[#5d87ff]/30 transition-colors">
              <svg
                className="w-9 h-9 text-[#5d87ff] group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <span className="text-[#5d87ff] font-semibold text-sm">
              Add Heritage Site
            </span>
          </div>
        </div>

        {/* Bottom text */}
        <div className="p-4 flex-1 flex flex-col justify-center">
          <h3 className="text-base font-semibold text-[#5d87ff] dark:text-[#7da3ff] text-center mb-2">
            Create Your Heritage
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
            Share and preserve your cultural heritage with the community
          </p>
        </div>
      </div>
    </div>
  );
};

const Landing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedHeritage, setSelectedHeritage] =
    useState<HeritageResponse | null>(null);
  const [isHeritageDialogOpen, setIsHeritageDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    FamilyTreeSearchResponse[]
  >([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchTypeMenu, setShowSearchTypeMenu] = useState(false);
  const [searchType, setSearchType] = useState<"familyTree" | "person">(
    "familyTree",
  );
  const [selectedHeritageForMap, setSelectedHeritageForMap] =
    useState<HeritageResponse | null>(null);

  const handleViewOnMap = (heritage: HeritageResponse) => {
    setSelectedHeritageForMap(heritage);
  };

  // ---------- Routing handlers ----------

  // const toggleDarkMode = () => setIsDarkMode((v) => !v);

  const handleFamilySearch = async () => {
    const query = searchQuery.trim();
    if (!query) return;

    setIsSearching(true);
    try {
      let results;
      if (searchType === "familyTree") {
        results = await familyApi.searchFamilyTree({ name: query });
      } else {
        // Person search
        results = await familyApi.searchFamilyTree({
          person: { name: query },
        });
      }
      setSearchResults(results);
      setIsSearchOpen(true);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
      setIsSearchOpen(true);
    } finally {
      setIsSearching(false);
    }
  };

  // ---------- Auto-slide (desktop-only) ----------
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % features.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % features.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + features.length) % features.length);

  // ---------- Store CTA + QR ----------
  const [showQr, setShowQr] = useState(false);
  const [qrPlay, setQrPlay] = useState<string>("");
  const [qrApp, setQrApp] = useState<string>("");

  const handleStoreCta = async () => {
    const platform = getPlatform();
    if (platform === "android") {
      // use assign so user can back-navigate if needed
      window.location.assign(PLAY_STORE_URL);
      return;
    }
    if (platform === "ios") {
      window.location.assign(APP_STORE_URL);
      return;
    }

    // Desktop: open QR modal and (optionally) also navigate to a landing page
    setShowQr(true);
    try {
      const QR = await import("qrcode");
      const [playDataUrl, appDataUrl] = await Promise.all([
        QR.toDataURL(PLAY_STORE_URL, { errorCorrectionLevel: "H", width: 240 }),
        QR.toDataURL(APP_STORE_URL, { errorCorrectionLevel: "H", width: 240 }),
      ]);
      setQrPlay(playDataUrl);
      setQrApp(appDataUrl);
    } catch (e) {
      console.error("QR generation failed:", e);
    }

    if (DESKTOP_LANDING_URL) {
      // window.open(DESKTOP_LANDING_URL, "_blank", "noopener,noreferrer")
    }
  };

  // ---------- NEW: Auto-redirect Android + small screens ----------
  useEffect(() => {
    if (isSmallViewport() && isAndroidUA()) {
      // replace avoids creating an extra history entry (no back-loop)
      window.location.replace(PLAY_STORE_URL);
    }
  }, []);

  // Fetch popular heritages
  const { heritages, loading, error } = usePopularHeritages();

  const handleHeritageClick = (heritage: HeritageResponse) => {
    setSelectedHeritage(heritage);
    setIsHeritageDialogOpen(true);
  };

  return (
    <div className="min-h-screen  bg-linear-to-b from-[#5D87FF33] to-white">
      {/* Navbar */}
      <nav className="container mx-auto px-4 md:px-12 lg:px-24 flex items-center justify-between py-4 md:py-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Shristi Logo"
            width={160}
            height={80}
            className="h-12 w-auto md:h-20 object-contain"
            priority
          />
        </div>
        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full bg-[#5d87ff] text-white shadow-lg">
          <a
            href="/about"
            className="relative font-semibold text-base tracking-wide transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About Us
          </a>
          <a
            href="/features"
            className="relative font-semibold text-base tracking-wide transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Features
          </a>
          <a
            href="https://shristiuniverse.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="relative font-semibold text-base tracking-wide transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Login
          </a>
          <a
            href="https://shristiuniverse.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="relative font-semibold text-base tracking-wide transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Sign Up
          </a>
          {/* <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </button> */}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="text-3xl cursor-pointer" />
          ) : (
            <Menu className="text-3xl cursor-pointer" />
          )}
        </button>
      </nav>
      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-4 bg-primary text-white shadow-lg rounded-lg mt-2 p-3">
          <a
            href="https://shristiuniverse.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center hover:bg-blue-600 rounded-md border py-2 px-3 shadow-lg font-semibold transition-colors duration-300 mb-2 dark:bg-gray-700 dark:text-white dark:hover:bg-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </a>
          <a
            href="https://shristiuniverse.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center hover:bg-green-600 rounded-md border py-2 px-3 shadow-lg font-semibold transition-colors duration-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            SignUp
          </a>
          <a
            href="/about"
            className="block w-full text-center hover:bg-purple-600 rounded-md border py-2 px-3 shadow-lg font-semibold transition-colors duration-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-purple-600 mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          {/* <button
            onClick={() => {
              setIsMenuOpen(false);
              toggleDarkMode();
            }}
            className="block w-full text-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 mt-2 dark:bg-gray-700 dark:text-gray-100"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
        </div>
      )}
      {/* Hero */}
      <main className="container mx-auto px-4 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between py-10 md:py-12">
        <div className="lg:w-1/2 w-full text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ">
            Build Your Family Tree <br className="hidden sm:block" /> Online
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg">
            Uncover your ancestry, trace family roots, and preserve your
            heritage with easy-to-use tools. From documenting family trees and
            stories to planning events and managing family finances, our
            platform helps you protect and share your family’s history for
            future generations.
          </p>
          <button
            className="mt-6 px-5 py-2.5 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
            onClick={() =>
              window.open("https://shristiuniverse.com/login", "_blank")
            }
          >
            Connect Now
          </button>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-300 rounded-full shadow-md shadow-gray-500 w-64 h-64 sm:w-80 sm:h-80">
            <Image
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white shadow-lg"
              src={family || "/placeholder.svg"}
              alt="Family"
            />
          </div>
        </div>
      </main>
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-blue-50">
        {/* dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950/30" */}
        {/* Subtle animated background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-linear-to-br from-[#5d87ff]/20 to-purple-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-linear-to-tr from-blue-400/20 to-cyan-400/10 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6 py-15  max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text + Search */}
            <div className="space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/90  backdrop-blur-md border border-gray-200/50 dark:border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold text-[#5d87ff] shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Search Your Family Tree in Seconds
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight text-gray-900 ">
                Build & Explore Your
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#5d87ff] to-indigo-600">
                  Family Tree
                </span>
                in One Place
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600  leading-relaxed max-w-2xl">
                Start exploring your lineage now and uncover the connections,
                stories, and generations that shaped your family. Build your
                family tree effortlessly and keep your heritage preserved for
                the future.
              </p>

              {/* PROMINENT SEARCH BAR with Filter */}
              <div className="max-w-xl">
                <div className="group relative">
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-[#5d87ff] to-indigo-600 rounded-2xl blur-xl opacity-35 group-hover:opacity-50 transition-opacity duration-400"></div>

                  {/* Create Your Family Tree CTA - Compact Version */}
                  <div className="mt-8 max-w-3xl mx-auto">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-linear-to-r from-[#5d87ff] to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                          {/* Horizontal Layout */}
                          <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="shrink-0 w-12 h-12 bg-lienar-to-br from-[#5d87ff] to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                              <TreePine className="w-7 h-7 text-white" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                Create Your Family Tree
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Build your legacy, preserve stories, connect
                                relatives.
                              </p>
                            </div>

                            <div className="shrink-0 flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                              <button
                                onClick={() => setIsLoginOpen(true)}
                                className="px-5 py-2.5 bg-linear-to-r from-[#5d87ff] to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                              >
                                Start Now
                              </button>
                            </div>
                          </div>

                          {/* Trust indicators */}
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1.5">
                              <svg
                                className="w-3.5 h-3.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Private & Secure
                            </div>
                            <div className="flex items-center gap-1.5">
                              <svg
                                className="w-3.5 h-3.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Free to Start
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Search Bar Container */}
                  <div className="relative bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl ring-1 ring-gray-200/60 dark:ring-white/20 mt-6">
                    <div className="flex items-center gap-2 p-3 pl-5">
                      {/* Search Type Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() =>
                            setShowSearchTypeMenu(!showSearchTypeMenu)
                          }
                          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {searchType === "familyTree" ? (
                            <>
                              <TreePine className="w-4 h-4" />
                              <span>Family</span>
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span>Person</span>
                            </>
                          )}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {showSearchTypeMenu && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 py-2 z-10">
                            <button
                              onClick={() => {
                                setSearchType("familyTree");
                                setShowSearchTypeMenu(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                            >
                              <TreePine className="w-4 h-4 text-[#5d87ff]" />
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  Family Tree
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Search by family name
                                </div>
                              </div>
                            </button>
                            <button
                              onClick={() => {
                                setSearchType("person");
                                setShowSearchTypeMenu(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                            >
                              <svg
                                className="w-4 h-4 text-[#5d87ff]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  Person
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Search by person name
                                </div>
                              </div>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Vertical Divider */}
                      <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>

                      {/* Search Icon */}
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>

                      {/* Input */}
                      <input
                        type="text"
                        placeholder={
                          searchType === "familyTree"
                            ? "Search family name, gotra..."
                            : "Search person name, ancestor..."
                        }
                        className="flex-1 bg-transparent text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleFamilySearch()
                        }
                      />

                      {/* Button */}
                      <button
                        onClick={handleFamilySearch}
                        className="px-6 py-2.5 bg-linear-to-r from-[#5d87ff] to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[#5d87ff]/40 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        disabled={isSearching || !searchQuery.trim()}
                      >
                        {isSearching ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>Search</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Updated suggestions based on search type */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Try:
                  </span>
                  {searchType === "familyTree" ? (
                    <>
                      {[
                        "Subedi",
                        "Royal Family",
                        "Gurung Pariwar",
                        "Shah",
                        "Rana",
                      ].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs font-medium"
                        >
                          {term}
                        </button>
                      ))}
                    </>
                  ) : (
                    <>
                      {["Ram Sharma", "Sita Devi", "Krishna Prasad"].map(
                        (term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs font-medium"
                          >
                            {term}
                          </button>
                        ),
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Family Tree Image – Floating & Elegant */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow backdrop */}
                <div className="absolute inset-0 bg-linear-to-br from-[#5d87ff]/25 to-indigo-500/15 rounded-3xl blur-3xl scale-90"></div>

                {/* Main card */}
                <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 ring-1 ring-gray-200/50 dark:ring-white/10">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-3 bg-linear-to-r from-[#5d87ff] to-indigo-600 text-white font-bold rounded-full shadow-xl text-sm">
                      Your Family Legacy Lives Here
                    </div>
                  </div>

                  <Image
                    src={Familytree}
                    alt="Interactive Family Tree Visualization"
                    className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
                    style={{ maxHeight: "600px", objectFit: "contain" }}
                  />
                </div>

                {/* Floating mini cards */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FamilySearchDialog
        results={searchResults}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        query={searchQuery}
        onRequireLogin={() => setIsLoginOpen(true)}
      />

      {/* Features */}
      <section
        id="about"
        className="py-12 md:py-16 bg-linear-to-br from-gray-50 to-blue-50 "
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">
              <span className="text-[#5d87ff]">Family Tree</span>, Heritage,
              Events <br /> <span> & Finance Management </span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600  max-w-3xl mx-auto">
              Tools to uncover, preserve, and share your family's unique story.
            </p>
          </div>

          {/* Mobile: minimal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-md active:scale-[0.99]"
              >
                <span className="text-2xl leading-none">{f.icon}</span>
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-gray-900 ">
                    {f.title}
                  </h4>
                  <p className="text-xs text-gray-600  line-clamp-2">
                    {f.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop: carousel */}
          <div className="relative hidden md:block">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                      {/* Text */}
                      <div className="space-y-4 relative z-10">
                        <div className="text-6xl">{feature.icon}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 ">
                          {feature.description}
                        </p>
                        <div className="flex gap-3 pt-2">
                          <Button className="bg-[#5d87ff] hover:bg-[#4c73e6] text-white px-5 py-3 text-sm rounded-lg shadow transition-all">
                            Explore Feature
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#5d87ff] text-[#5d87ff] hover:bg-[#5d87ff] hover:text-white px-5 py-3 text-sm rounded-lg"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>

                      {/* Image + nav */}
                      <div className="hidden md:block">
                        <div className="relative group">
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            width={800} // any reasonable value
                            height={480}
                            className="w-full h-72 object-cover rounded-xl"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://placehold.co/1200x600?text=Image+Unavailable";
                            }}
                          />
                          <button
                            onClick={prevSlide}
                            aria-label="Previous feature"
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow hover:shadow-md transition pointer-events-auto"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={nextSlide}
                            aria-label="Next feature"
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow hover:shadow-md transition pointer-events-auto"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to feature ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#5d87ff] w-8"
                      : "bg-gray-300 dark:bg-gray-600 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdBsConverter />

      {/* Heritage Sites Section - NEW */}
      <section className="py-12 md:py-16 bg-white ">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold  mb-2 md:mb-4">
              Discover{" "}
              <span className="text-[#5d87ff]">Nepal's Heritage Sites</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600  max-w-3xl mx-auto">
              Explore and preserve Nepal's rich cultural and natural heritage
              for future generations.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#5d87ff]"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">{error}</div>
          ) : (
            <HeritageSiteCarousel
              sites={heritages}
              onCreateClick={() => setIsLoginOpen(true)}
              onSiteClick={handleHeritageClick}
              onViewMap={handleViewOnMap}
            />
          )}
        </div>
      </section>
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
      {/* Mobile App Section */}
      <section className="container mx-auto px-4 md:px-12 lg:px-24 py-12 md:py-20 max-w-7xl">
        <div
          className={`${
            // isDarkMode ? "bg-gray-800" :
            "bg-white"
          } rounded-2xl md:rounded-3xl shadow-xl overflow-hidden`}
        >
          {/* Mobile minimal */}
          <div className="md:hidden p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#5d87ff]/10 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-[#5d87ff]" />
            </div>

            <div className="flex-1">
              <h3 className="text-base font-semibold">
                Also available on mobile
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Full experience on any device. Cloud sync, instant uploads, and
                alerts.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <button
                onClick={handleStoreCta}
                aria-label="Get it on Google Play"
                className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5d87ff]"
              >
                <FaGooglePlay className="text-sm" />
                <span>Google Play</span>
              </button>

              <button
                onClick={handleStoreCta}
                aria-label="Download on the App Store"
                className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5d87ff]"
              >
                <FaApple className="text-sm" />
                <span>App Store</span>
              </button>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex flex-col lg:flex-row items-center">
            {/* Left: content */}
            <div className="lg:w-1/2 w-full p-10 lg:p-14 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span
                    className={
                      // isDarkMode ? "text-gray-100" :
                      "text-gray-900"
                    }
                  >
                    <span className="text-[#5d87ff]">
                      Download the Shristi App{" "}
                    </span>
                    Your Family Tree in Your Pocket
                  </span>
                </h2>
                <p
                  className={`text-base md:text-lg ${
                    // isDarkMode ? "text-gray-300" :
                    "text-gray-600"
                  }`}
                >
                  Access your family tree anywhere with our mobile app. Preserve
                  heritage, plan events, and manage family finances seamlessly
                  on the go.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-6">
                <div className="group">
                  <div className="w-10 h-10 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mb-3">
                    <Smartphone className="w-5 h-5 text-[#5d87ff]" />
                  </div>
                  <h3
                    className={`font-semibold mb-1 ${
                      // isDarkMode ? "text-gray-100" :
                      "text-gray-900"
                    }`}
                  >
                    Mobile Optimized
                  </h3>
                  <p
                    className={`text-sm ${
                      // isDarkMode ? "text-gray-300" :
                      "text-gray-600"
                    }`}
                  >
                    Full-featured on any device
                  </p>
                </div>
                <div className="group">
                  <div className="w-10 h-10 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mb-3">
                    <Cloud className="w-5 h-5 text-[#5d87ff]" />
                  </div>
                  <h3
                    className={`font-semibold mb-1 ${
                      // isDarkMode ? "text-gray-100" :
                      "text-gray-900"
                    }`}
                  >
                    Cloud Sync
                  </h3>
                  <p
                    className={`text-sm ${
                      // isDarkMode ? "text-gray-300" :
                      "text-gray-600"
                    }`}
                  >
                    Seamless sync across devices
                  </p>
                </div>
                <div className="group">
                  <div className="w-10 h-10 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mb-3">
                    <Camera className="w-5 h-5 text-[#5d87ff]" />
                  </div>
                  <h3
                    className={`font-semibold mb-1 ${
                      // isDarkMode ? "text-gray-100" :
                      "text-gray-900"
                    }`}
                  >
                    Instant Upload
                  </h3>
                  <p
                    className={`text-sm ${
                      // isDarkMode ? "text-gray-300" :
                      "text-gray-600"
                    }`}
                  >
                    Capture & share instantly
                  </p>
                </div>
                <div className="group">
                  <div className="w-10 h-10 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mb-3">
                    <Bell className="w-5 h-5 text-[#5d87ff]" />
                  </div>
                  <h3
                    className={`font-semibold mb-1 ${
                      // isDarkMode ? "text-gray-100" :
                      "text-gray-900"
                    }`}
                  >
                    Smart Alerts
                  </h3>
                  <p
                    className={`text-sm ${
                      // isDarkMode ? "text-gray-300" :
                      "text-gray-600"
                    }`}
                  >
                    Get notified of discoveries
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-3">
                  {/* Google Play */}
                  <button
                    onClick={handleStoreCta}
                    aria-label="Get it on Google Play"
                    className="group bg-linear-to-r from-[#3CB371] to-[#4CAF50] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-3 shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5d87ff] cursor-pointer"
                  >
                    <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <FaGooglePlay className="text-base group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] opacity-80 group-hover:opacity-100 transition-opacity">
                        Get it on
                      </div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </button>

                  {/* App Store */}
                  <button
                    onClick={handleStoreCta}
                    aria-label="Download on the App Store"
                    className="group bg-linear-to-r from-[#2C2C2C] to-[#1A1A1A] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-3 shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5d87ff] cursor-pointer"
                  >
                    <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <FaApple className="text-base group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] opacity-80 group-hover:opacity-100 transition-opacity">
                        Download on the
                      </div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: phone mock */}
            <div
              className={`lg:w-1/2 w-full ${
                // isDarkMode? "bg-gray-700":
                "bg-linear-to-br from-[#5d87ff]/5 to-[#5d87ff]/20"
              } p-10 lg:p-14 flex justify-center items-center`}
            >
              <div className="relative">
                <div className="relative w-60 h-130 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-4xl overflow-hidden relative">
                    <Image
                      src={shristimob || "/placeholder.svg"}
                      alt="App Screenshot"
                      className="w-full h-full object-cover rounded-4xl"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent rounded-4xl pointer-events-none"></div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#5d87ff] rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-[#5d87ff]/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback Section */}
      <Feedback />
      {/* QR Modal */}
      {showQr && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowQr(false)}
        >
          <div
            className={`w-full max-w-3xl rounded-2xl shadow-2xl ${
              // isDarkMode ? "bg-gray-900" :
              "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10">
              <h3 className="text-lg font-semibold">Open on your phone</h3>
              <button
                onClick={() => setShowQr(false)}
                className="rounded-lg px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 text-center">
                <div className="font-semibold mb-2">Google Play</div>
                {qrPlay ? (
                  <img
                    src={qrPlay}
                    alt="QR to Google Play"
                    className="w-48 h-48 mx-auto"
                  />
                ) : (
                  <div className="w-48 h-48 mx-auto animate-pulse rounded-xl bg-black/5 dark:bg-white/10" />
                )}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-[#3CB371] underline"
                >
                  Open link
                </a>
              </div>

              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 text-center">
                <div className="font-semibold mb-2">App Store</div>
                {qrApp ? (
                  <img
                    src={qrApp}
                    alt="QR to App Store"
                    className="w-48 h-48 mx-auto"
                  />
                ) : (
                  <div className="w-48 h-48 mx-auto animate-pulse rounded-xl bg-black/5 dark:bg-white/10" />
                )}
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  // ⬇️ FIX: ensure readable in both themes
                  className={`mt-3 inline-block text-sm font-semibold underline ${
                    // isDarkMode ? "text-white/90" :
                    "text-gray-800"
                  }`}
                >
                  Open link
                </a>
              </div>
            </div>

            <div className="px-6 pb-6 text-center text-xs text-gray-600 dark:text-gray-300">
              Tip: Open your camera and point it at a QR to jump straight to the
              store.
            </div>
          </div>
        </div>
      )}
      {/* Login Dialog */}

      {isLoginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setIsLoginOpen(false)}
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
              <h3 className="text-2xl font-bold text-white mb-2">
                Login Required
              </h3>
              <p className="text-white/90 text-sm">
                You need to login to access this feature
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                Please login to create and manage Nepal heritage sites. Join our
                community to preserve cultural heritage.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://shristiuniverse.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsLoginOpen(false)}
                  className="w-full px-6 py-3 bg-linear-to-r from-[#5d87ff] to-[#4c73e6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all duration-200 text-center block"
                >
                  Go to Login
                </a>
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Maybe Later
                </button>
              </div>

              {/* Sign up link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                Don't have an account?{" "}
                <a
                  href="https://shristiuniverse.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsLoginOpen(false)}
                  className="text-[#5d87ff] font-semibold hover:underline"
                >
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Map Modal */}
      {selectedHeritageForMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedHeritageForMap(null)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">
                  {selectedHeritageForMap.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1 mt-1">
                  <MapPin className="h-4 w-4" />
                  {selectedHeritageForMap.city?.name},{" "}
                  {selectedHeritageForMap.country?.countryName}
                </p>
              </div>
              <button
                onClick={() => setSelectedHeritageForMap(null)}
                className="rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <GoogleMapEmbed
                lat={selectedHeritageForMap.latitude ?? 0}
                lng={selectedHeritageForMap.longitude ?? 0}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Landing;
