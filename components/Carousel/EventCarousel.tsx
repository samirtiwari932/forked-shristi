import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

export default function EventAnimatedCarousel({ events, onJoinClick }: any) {
  const [index, setIndex] = useState(0);
  const total = events.length;

  const getIndex = (i: number) => (i + total) % total;

  const cards = [
    { pos: "left", data: events[getIndex(index - 1)] },
    { pos: "center", data: events[index] },
    { pos: "right", data: events[getIndex(index + 1)] },
  ];

  const variants = {
    left: {
      x: -220,
      scale: 0.9,
      opacity: 0.6,
      zIndex: 1,
    },
    center: {
      x: 0,
      scale: 1.1,
      opacity: 1,
      zIndex: 2,
    },
    right: {
      x: 220,
      scale: 0.9,
      opacity: 0.6,
      zIndex: 1,
    },
  };

  return (
    <div className="relative h-[420px] flex items-center justify-center">
      <AnimatePresence initial={false}>
        {cards.map(({ pos, data }) => (
          <motion.div
            key={data.id}
            className="absolute w-72 bg-white rounded-xl shadow-xl"
            variants={variants}
            animate={pos}
            initial={false}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
          >
            <img
              src={data.coverImage.url}
              className="h-40 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-semibold text-gray-800 line-clamp-1">
                {data.name}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {data.description}
              </p>

              <div className="text-xs text-gray-500 space-y-1 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-500" />
                  {new Date(data.startDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-500" />
                  {data.city.name}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-500" />
                  {data.participantsCount} going
                </div>
              </div>

              <button
                onClick={() => onJoinClick(data.id)}
                className="w-full py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600"
              >
                Join
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={() => setIndex((i) => getIndex(i - 1))}
        className="absolute left-0 bg-white p-3 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setIndex((i) => getIndex(i + 1))}
        className="absolute right-0 bg-white p-3 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
