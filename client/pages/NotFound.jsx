import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-chill-background">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex h-11 items-center gap-1">
            <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.4164 3.99658L35.2289 5.42658L40.9372 11.9166L45.0414 11.1832L43.4164 3.99658ZM29.1039 6.48992L24.9997 7.20492L30.7289 13.6766L34.8122 12.9616L29.1039 6.48992ZM18.8956 8.24992L14.7914 9.00158L20.5206 15.4732L24.6039 14.7582L18.8956 8.24992ZM8.66641 10.0832L6.62474 10.4316C5.5422 10.6219 4.58974 11.1825 3.97649 11.9903C3.36324 12.7981 3.13932 13.787 3.35391 14.7399L4.16641 18.3332L14.3747 16.5549L8.66641 10.0832ZM4.16641 18.3332V36.6666C4.16641 38.7016 6.04141 40.3333 8.33307 40.3333H41.6664C43.9789 40.3333 45.8331 38.7016 45.8331 36.6666V18.3332H4.16641Z" fill="white"/>
            </svg>
            <div className="font-londrina text-[50px] font-normal leading-[110%] text-white">
              CHILL
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-4 text-white font-lato">404</h1>
        <p className="text-xl text-chill-text-secondary mb-8 font-lato">
          Oops! Halaman yang Anda cari tidak ditemukan
        </p>
        <Link 
          to="/" 
          className="inline-flex px-8 py-3 rounded-full bg-chill-primary hover:bg-chill-primary-dark transition-colors text-white font-semibold font-lato"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
