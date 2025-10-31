import {useMemo} from "react";

export const useCardPhotos = (link?: string | null): string => {
  return useMemo(() => {
    if (!link) return "https://via.placeholder.com/400x250";

    // Google Drive file
    const matchDriveFile = link.match(/\/file\/d\/([^/]+)/);
    if (matchDriveFile) return `https://drive.google.com/uc?id=${matchDriveFile[1]}`;

    // Dropbox folder or file link — try to force raw
    if (link.includes("dropbox.com"))
      return link.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");

    // Google Photos, InvestorLift, Zillow, etc. → fallback
    return "https://via.placeholder.com/400x250";
  }, [link]);
};
