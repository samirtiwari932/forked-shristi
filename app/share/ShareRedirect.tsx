"use client";

import { useEffect } from "react";

interface ShareRedirectProps {
  redirectUrl: string;
}

export default function ShareRedirect({ redirectUrl }: ShareRedirectProps) {
  useEffect(() => {
    window.location.replace(redirectUrl);
  }, [redirectUrl]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
        gap: "16px",
      }}
    >
      {/* Simple loading screen users see for a brief moment before redirect */}
      <img
        src="/assets/images/shristi_logo-2.png"
        alt="Srishti Universe"
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
      <p style={{ color: "#6b7280", fontSize: "14px" }}>Redirecting you...</p>
      {/* Fallback link in case JS redirect is slow */}
      <a
        href={redirectUrl}
        style={{
          color: "#3b82f6",
          fontSize: "13px",
          textDecoration: "underline",
        }}
      >
        Click here if you are not redirected
      </a>
    </div>
  );
}
