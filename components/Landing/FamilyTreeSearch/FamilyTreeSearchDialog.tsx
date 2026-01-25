// components/FamilySearchDialog.tsx
import { X, Users, Calendar, Search, Lock, TreePine } from "lucide-react";

import { FamilyTreeSearchResponse } from "@/types/family";

interface FamilySearchDialogProps {
  results: FamilyTreeSearchResponse[];
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onRequireLogin: () => void;
}

const getDefaultTreeImage = () => {
  return "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
};

export default function FamilySearchDialog({
  results,
  isOpen,
  onClose,
  query,
  onRequireLogin,
}: FamilySearchDialogProps) {
  if (!isOpen) return null;

  const handleItemClick = () => {
    onClose();
    onRequireLogin();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-70 flex items-start justify-center overflow-y-auto pt-16 pb-10 px-4">
        <div
          className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <Search className="w-6 h-6 text-[#5d87ff]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  "{query}"
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {results.length} family tree{results.length !== 1 ? "s" : ""}{" "}
                  found
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[70vh] overflow-y-auto">
            {results.length === 0 ? (
              <div className="p-20 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                  <TreePine className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  No family trees found for "
                  <span className="font-medium">{query}</span>"
                </p>
              </div>
            ) : (
              <div className="grid gap-4 p-6">
                {results.map((item) => {
                  const imageUrl = item.treeImage?.url || getDefaultTreeImage();

                  return (
                    <button
                      key={item.id}
                      onClick={handleItemClick}
                      className="group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-left"
                    >
                      <div className="flex gap-5 p-5">
                        {/* Tree Image */}
                        <div className="shrink-0">
                          <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/50">
                            <img
                              src={imageUrl}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  getDefaultTreeImage();
                              }}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                            {item.name}
                          </h3>

                          {item.gotra && (
                            <p className="text-sm font-medium text-[#5d87ff] mt-1">
                              Gotra: {item.gotra}
                            </p>
                          )}

                          {item.description ? (
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                              {item.description}
                            </p>
                          ) : (
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
                              No description available
                            </p>
                          )}

                          <div className="flex items-center gap-5 mt-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              {item.memberCount} members
                            </span>
                            <span className="flex items-center gap-2">
                              <TreePine className="w-4 h-4" />
                              {item.personCount} ancestors
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(item.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  year: "numeric",
                                },
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Lock Icon on Hover */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-2xl shadow-lg">
                            <Lock className="w-6 h-6 text-[#5d87ff]" />
                          </div>
                        </div>
                      </div>

                      {/* Subtle bottom indicator */}
                      <div className="h-1 bg-linear-to-r from-[#5d87ff] to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 bg-linear-to-r from-[#5d87ff]/5 to-indigo-600/5 dark:from-[#5d87ff]/10 dark:to-indigo-600/10 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Login required to view full family tree details
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
