import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ohio-preview", destination: "/", permanent: true },
      { source: "/ohio-preview/second", destination: "/", permanent: true },
      { source: "/ohio-preview/explore/:slug", destination: "/:slug", permanent: true },
      { source: "/ohio-preview/:slug", destination: "/:slug", permanent: true },
      { source: "/packages-journey", destination: "/detailing", permanent: true },
      { source: "/packages", destination: "/detailing", permanent: true },
      { source: "/automods", destination: "/auto-mods", permanent: true },
      { source: "/autotuning", destination: "/auto-mods", permanent: true },
      { source: "/coatings-gallery", destination: "/coatings", permanent: true },
      { source: "/detailing-menu", destination: "/detailing", permanent: true },
      { source: "/shop-care-shelf", destination: "/shop", permanent: true },
      { source: "/about-ohio", destination: "/about-us", permanent: true },
      { source: "/car-care-planner", destination: "/car-care", permanent: true },
      { source: "/warranty-care-hub", destination: "/warranty", permanent: true },
      { source: "/customisation-build", destination: "/auto-mods", permanent: true },
      { source: "/detail-journal", destination: "/journal", permanent: true },
    ];
  },
};

export default nextConfig;
