export const GoogleMapEmbed = ({ lat, lng }: { lat: number; lng: number }) => {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&t=k&z=14&output=embed`;

  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="450"
      style={{ border: 0, borderRadius: 10 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};
