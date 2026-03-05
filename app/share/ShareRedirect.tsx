"use client";

import { useEffect } from "react";

interface ShareRedirectProps {
  redirectUrl: string;
}

export default function ShareRedirect({ redirectUrl }: ShareRedirectProps) {
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   window.location.replace(redirectUrl);
    // }, 100);
    // return () => clearTimeout(timer);
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
        background: "#ffffff",
      }}
    >
      <img
        src="/assets/images/shristi_logo-2.png"
        alt="Srishti Universe"
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
      <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
        Redirecting you...
      </p>
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
