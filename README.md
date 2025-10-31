# Opendoor Listings Clone

A React-based application for browsing and interacting with property listings. This project is a frontend-focused implementation inspired by Opendoor’s listings page.

## Key Features

- **Browse Listings:** View all available properties from a dedicated API endpoint.
- **Property Sorting & Search:** Sort by newest/oldest, filter by listing status (`sold` / `active`), and search by property address.
- **Banner Display:** Shows the “Make your strongest offer when you buy with Opendoor” banner after the first 2 listings.
- **Responsive Design:** Optimized for mobile and desktop layouts.
- **Image Handling:** All listing images use a fallback if the original image cannot be loaded.
- **Optional Map Integration:** Static map mock included; real map integration possible via Mapbox (code scaffolded but disabled).

## Technologies Used

- **React & React Hooks**
- **TypeScript**
- **Vite**
- **Redux Toolkit & Redux Toolkit Query**
- **SCSS for styling**
- **Optional Mapbox GL JS integration**
- **Responsive design techniques**

## Project Decisions & Notes

- **Images:** Many external links point to Google Drive folders, Dropbox folders, or property pages rather than direct image URLs. Because these require backend logic or authentication to extract image URLs, they cannot be reliably displayed in the frontend. As a result, all invalid or unsupported image links fall back to a placeholder image. While testing all the 500 properties was imposible, from the tests it would look like none of the listings had valid images on `listing.userData?.linkToPhotos` prop that could be redered directly, safe and reliable on FE side. 
- **Map:** A static map image is included. The scaffold for a live Mapbox map exists in the code but was not fully implemented due to time constraints.
- **Time:** The project was implemented under a tight 24-hour deadline, with roughly 6-8 hours of actual development.
- **Design:** Efforts were made to approximate the Opendoor layout, prioritizing functionality and responsiveness over pixel-perfect styling. On my device, Opendoor Tampa looks slightly different than the reference screenshot, but I primarily took inspiration from the screenshot and relied on the actual page only when in doubt.

## Installation & Setup

1. **Clone the repository**

```bash
git clone git@github.com:berci-i/opendoor-listings.git
cd opendoor-listings
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## API Endpoint

Listings data is fetched from:

```
https://u2oyhiwlmc.execute-api.us-east-1.amazonaws.com/production/get-listings
```

This endpoint is configured via `src/api/listingsApi.ts` using Redux Toolkit Query.

## Folder Structure Highlights

- `src/components` – React components (cards, banner, map, etc.)
- `src/hooks` – Custom hooks (e.g., `useCardPhotos` for handling listing images)
- `src/api` – API calls using Redux Toolkit Query
- `src/assets` – Static assets (images, map mock)
- `src/styles` – SCSS files for component styling

## Known Issues / Limitations

- Many listing images from external sources do not load. This includes links to Google Drive folders, Dropbox folders, or property pages. A fallback image is used in all these cases.
- Map integration is not live; currently uses a static placeholder.
- Styling is functional but not fully pixel-perfect due to time constraints.

## Optional Enhancements (Future Work)

- Embed a fully interactive Mapbox map with markers for listings.
- Implement a carousel for multiple listing photos.
- Improve styling for a closer match to Opendoor’s production layout.

## License

All rights reserved. This is a personal project for portfolio and assessment purposes.
