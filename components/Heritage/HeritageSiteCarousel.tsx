import { HeritageResponse } from "@/types/heritage";
import { ArrowRight, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import CreateHeritageCard from "./CreateHeritageCard";
import HeritageSiteCard from "./HeritageSiteCard";

export default function HeritageSiteCarousel({
  sites,
  onCreateClick,
  onSiteClick,
  onViewMap,
}: {
  sites: HeritageResponse[];
  onCreateClick: () => void;
  onSiteClick: (site: HeritageResponse) => void;
  onViewMap?: (site: HeritageResponse) => void;
}) {
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
    </div>
  );
}
