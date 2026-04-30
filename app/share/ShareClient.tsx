"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaGooglePlay, FaTimes } from "react-icons/fa";

export default function ShareClient({
  redirectUrl,
  metadata,
}: {
  redirectUrl: string;
  metadata: any;
}) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [os, setOs] = useState<"android" | "ios" | "other">("other");

  useEffect(() => {
    // Detect OS
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf("android") > -1;
    const isIos = /iphone|ipad|ipod/.test(ua);

    if (isAndroid || isIos) {
      setIsMobile(true);
      setOs(isAndroid ? "android" : "ios");
      // Show modal after a short delay on mobile
      setTimeout(() => setShowModal(true), 1000);
    }

    const timer = setTimeout(() => {
      // If modal is closed or user is on desktop, redirect
      if (!isAndroid && !isIos) {
        router.push(redirectUrl);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [redirectUrl, router]);

  const storeLinks = {
    android:
      "https://play.google.com/store/apps/details?id=com.shristi.universe",
    ios: "https://apps.apple.com/us/app/srishti-universe/id6751426376",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        fontFamily: "'Inter', sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background Animated Orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "rgba(102, 126, 234, 0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "rgba(118, 75, 162, 0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <div style={{ zIndex: 1, textAlign: "center" }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            width: "60px",
            height: "60px",
            border: "3px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #667eea",
            borderRadius: "50%",
            margin: "0 auto 24px",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.4, 1, 0.4], y: 0 }}
          transition={{
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 0.5, ease: "easeOut" },
          }}
          style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}
        >
          Preparing your content
        </motion.h2>
        
        {/* Animated Progress Bar */}
        <div style={{ 
          width: "200px", 
          height: "4px", 
          background: "rgba(255,255,255,0.1)", 
          borderRadius: "10px", 
          margin: "16px auto 0",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.05)"
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{ 
              height: "100%", 
              background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 0 10px rgba(102, 126, 234, 0.5)"
            }}
          />
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 100,
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                background: "#1f1f3a",
                borderRadius: "24px",
                padding: "32px",
                width: "100%",
                maxWidth: "400px",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <button
                onClick={() => {
                  setShowModal(false);
                  router.push(redirectUrl);
                }}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <FaTimes size={14} />
              </button>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "18px",
                    margin: "0 auto 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "32px",
                    boxShadow: "0 10px 20px rgba(102, 126, 234, 0.3)",
                  }}
                >
                  S
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  Get the Full Experience
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "32px",
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  Download the Shristi app for a faster and more immersive
                  experience.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {(os === "android" || os === "other") && (
                    <a
                      href={storeLinks.android}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        background: "#fff",
                        color: "#000",
                        padding: "14px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      <FaGooglePlay size={20} /> Get it on Google Play
                    </a>
                  )}
                  {(os === "ios" || os === "other") && (
                    <a
                      href={storeLinks.ios}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        background: "rgba(255,255,255,0.1)",
                        color: "#fff",
                        padding: "14px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <FaApple size={22} /> Download on App Store
                    </a>
                  )}

                  <button
                    onClick={() => {
                      setShowModal(false);
                      router.push(redirectUrl);
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "rgba(255,255,255,0.5)",
                      marginTop: "12px",
                      fontSize: "14px",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Continue to website
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
