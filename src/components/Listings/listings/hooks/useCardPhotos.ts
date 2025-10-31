import {useMemo} from "react";

export const useCardPhotos = (link?: string | null): string => {
  return useMemo(() => {
    if (!link)
      return "https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg";

    // Google Drive file
    const matchDriveFile = link.match(/\/file\/d\/([^/]+)/);
    if (matchDriveFile) return `https://drive.google.com/uc?id=${matchDriveFile[1]}`;

    // Dropbox folder or file link — try to force raw
    if (link.includes("dropbox.com"))
      return link.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");

    // Google Photos, InvestorLift, Zillow, etc. → fallback
    return "https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg";
  }, [link]);
};
