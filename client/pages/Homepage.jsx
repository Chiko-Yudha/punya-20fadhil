import { useState } from "react";

const MovieCard = ({ image, title, rating, badge = null, className = "" }) => (
  <div
    className={`relative flex w-[180px] sm:w-[234px] lg:w-[302px] flex-col gap-2.5 flex-shrink-0 ${className}`}
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-[280px] sm:h-[365px] lg:h-[162px] object-cover rounded-lg"
      />
      {badge && (
        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-3xl bg-chill-primary-dark border border-chill-primary-dark">
          <span className="text-white text-sm font-bold leading-[140%] tracking-[0.2px] font-lato">
            {badge}
          </span>
        </div>
      )}
    </div>
    {title && rating && (
      <div className="flex justify-between items-center px-4 py-2">
        <h3 className="text-white text-lg font-bold leading-[120%] font-lato">
          {title}
        </h3>
        <div className="flex items-center gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99967 11.513L12.1197 13.9997L11.0263 9.31301L14.6663 6.15967L9.87301 5.74634L7.99967 1.33301L6.12634 5.74634L1.33301 6.15967L4.96634 9.31301L3.87967 13.9997L7.99967 11.513Z"
              fill="white"
            />
          </svg>
          <span className="text-white text-sm font-normal leading-[140%] tracking-[0.2px] font-lato">
            {rating}
          </span>
        </div>
      </div>
    )}
  </div>
);

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex w-full px-4 sm:px-8 lg:px-20 py-4 lg:py-6 justify-between items-center bg-chill-background relative z-50">
      {/* Left side - Logo and Nav Links */}
      <div className="flex items-center gap-20">
        {/* Logo */}
        <div className="flex h-11 items-center gap-1">
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6548 2.36182L20.8168 3.20682L24.1899 7.04182L26.6151 6.60848L25.6548 2.36182ZM17.1974 3.83515L14.7723 4.25765L18.1577 8.08182L20.5705 7.65932L17.1974 3.83515ZM11.1652 4.87515L8.74006 5.31932L12.1255 9.14348L14.5384 8.72098L11.1652 4.87515ZM5.12075 5.95848L3.91431 6.16432C3.27463 6.27679 2.71181 6.60805 2.34943 7.08537C1.98706 7.56269 1.85474 8.14705 1.98154 8.71015L2.46166 10.8335L8.49385 9.78265L5.12075 5.95848ZM2.46166 10.8335V21.6668C2.46166 22.8693 3.56961 23.8335 4.92378 23.8335H24.6207C25.9872 23.8335 27.0829 22.8693 27.0829 21.6668V10.8335H2.46166Z"
              fill="white"
            />
          </svg>
          <div className="font-londrina text-[32px] font-normal leading-[110%] text-white">
            CHILL
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <a
            href="#"
            className="text-white text-lg font-medium leading-[140%] tracking-[0.2px] font-lato hover:text-chill-primary transition-colors"
          >
            Series
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium leading-[140%] tracking-[0.2px] font-lato hover:text-chill-primary transition-colors"
          >
            Film
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium leading-[140%] tracking-[0.2px] font-lato hover:text-chill-primary transition-colors"
          >
            Daftar Saya
          </a>
        </div>
      </div>

      {/* Right side - User Avatar */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2"
        >
          <div
            className="w-10 h-10 rounded-full bg-gray-600 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face)",
            }}
          ></div>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.645 10.0215L14 15.3648L19.355 10.0215L21 11.6665L14 18.6665L7 11.6665L8.645 10.0215Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute right-0 top-12 w-[156px] py-1 bg-chill-background rounded border border-chill-border shadow-lg">
            <div className="flex px-3 py-2 items-center gap-1.5 hover:bg-chill-body cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                  fill="#3254FF"
                />
              </svg>
              <span className="text-chill-primary text-sm font-medium font-lato">
                Profil Saya
              </span>
            </div>
            <div className="flex px-3 py-2 items-center gap-1.5 hover:bg-chill-body cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-sm font-medium font-lato">
                Ubah Premium
              </span>
            </div>
            <div className="flex px-3 py-2 items-center gap-1.5 hover:bg-chill-body cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.89 3 3 3.89 3 5V9H5V5H19V19H5V15H3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM10.08 15.58L11.5 17L16.5 12L11.5 7L10.08 8.41L12.67 11H3V13H12.67L10.08 15.58Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-sm font-medium font-lato">
                Keluar
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[587px] flex items-end">
    {/* Background Image */}
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/84bfaac522f65e27b66c727d843df2a3b715f248?width=2880"
      alt="Duty After School"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Content Overlay */}
    <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20 pb-8 sm:pb-16 lg:pb-20">
      <div className="flex flex-col gap-3 sm:gap-5 max-w-[668px]">
        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold leading-[110%] font-lato">
          Duty After School
        </h1>
        <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-[140%] tracking-[0.2px] font-lato">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-3 sm:mt-5 gap-4 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {/* Play Button */}
            <button className="flex px-7 py-2.5 items-center rounded-full bg-chill-primary-dark hover:bg-chill-primary-dark/80 transition-colors">
              <span className="text-white text-base font-bold leading-[140%] tracking-[0.2px] font-lato">
                Mulai
              </span>
            </button>

            {/* Info Button */}
            <button className="flex px-7 py-2.5 items-center gap-2 rounded-full bg-chill-paper hover:bg-chill-paper/80 transition-colors">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.5H13V7.5H11M12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5ZM12 2.5C10.6868 2.5 9.38642 2.75866 8.17317 3.2612C6.95991 3.76375 5.85752 4.50035 4.92893 5.42893C3.05357 7.3043 2 9.84784 2 12.5C2 15.1522 3.05357 17.6957 4.92893 19.5711C5.85752 20.4997 6.95991 21.2362 8.17317 21.7388C9.38642 22.2413 10.6868 22.5 12 22.5C14.6522 22.5 17.1957 21.4464 19.0711 19.5711C20.9464 17.6957 22 15.1522 22 12.5C22 11.1868 21.7413 9.88642 21.2388 8.67317C20.7362 7.45991 19.9997 6.35752 19.0711 5.42893C18.1425 4.50035 17.0401 3.76375 15.8268 3.2612C14.6136 2.75866 13.3132 2.5 12 2.5ZM11 17.5H13V11.5H11V17.5Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-base font-bold leading-[140%] tracking-[0.2px] font-lato">
                Selengkapnya
              </span>
            </button>

            {/* Age Rating */}
            <div className="px-2.5 py-2 rounded-3xl border border-chill-text-secondary">
              <span className="text-chill-text-secondary text-lg font-normal leading-[140%] tracking-[0.2px] font-lato">
                18+
              </span>
            </div>
          </div>

          {/* Volume Button */}
          <button className="p-2.5 rounded-3xl border border-chill-text-secondary hover:bg-white/10 transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73M19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.62 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.5 12.43 16.5 12.21 16.5 12Z"
                fill="#C1C2C4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ContentSection = ({ title, children }) => (
  <section className="w-full px-4 sm:px-8 lg:px-20 py-6 lg:py-10">
    <div className="flex flex-col gap-4 lg:gap-8">
      <h2 className="text-white text-xl sm:text-2xl lg:text-[32px] font-bold leading-[110%] font-lato">
        {title}
      </h2>
      <div className="relative">{children}</div>
    </div>
  </section>
);

const ScrollableRow = ({ children }) => (
  <div className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4">
    {children}
  </div>
);

const Footer = () => (
  <footer className="w-full px-4 sm:px-8 lg:px-20 py-8 lg:py-15 border-t border-chill-border bg-chill-background">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
      {/* Left Column - Logo and Copyright */}
      <div className="flex flex-col gap-6">
        <div className="flex h-11 items-center gap-1">
          <svg
            width="50"
            height="45"
            viewBox="0 0 50 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.4164 4.49658L35.2289 5.92658L40.9372 12.4166L45.0414 11.6832L43.4164 4.49658ZM29.1039 6.98992L24.9997 7.70492L30.7289 14.1766L34.8122 13.4616L29.1039 6.98992ZM18.8956 8.74992L14.7914 9.50158L20.5206 15.9732L24.6039 15.2582L18.8956 8.74992ZM8.66641 10.5832L6.62474 10.9316C5.5422 11.1219 4.58974 11.6825 3.97649 12.4903C3.36324 13.2981 3.13932 14.287 3.35391 15.2399L4.16641 18.8332L14.3747 17.0549L8.66641 10.5832ZM4.16641 18.8332V37.1666C4.16641 39.2016 6.04141 40.8333 8.33307 40.8333H41.6664C43.9789 40.8333 45.8331 39.2016 45.8331 37.1666V18.8332H4.16641Z"
              fill="white"
            />
          </svg>
          <div className="font-londrina text-[50px] font-normal leading-[110%] text-white">
            CHILL
          </div>
        </div>
        <p className="text-chill-text-secondary text-base font-normal font-lato">
          @2023 Chill All Rights Reserved.
        </p>
      </div>

      {/* Right Columns - Links */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 lg:gap-40">
        {/* Genre Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-base font-bold font-lato">Genre</h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Aksi
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Anak-anak
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Anime
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Britania
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Drama
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Fantasi Ilmiah & Fantasi
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Kejahatan
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                KDrama
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Komedi
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Petualangan
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Perang
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Romantis
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Sains & Alam
              </a>
              <a
                href="#"
                className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
              >
                Thriller
              </a>
            </div>
          </div>
        </div>

        {/* Help Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-base font-bold font-lato">Bantuan</h3>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
            >
              Kontak Kami
            </a>
            <a
              href="#"
              className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
            >
              Privasi
            </a>
            <a
              href="#"
              className="text-chill-text-secondary text-base font-medium font-lato hover:text-white"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Homepage = () => {
  return (
    <div className="min-h-screen bg-chill-background">
      <Navigation />
      <HeroSection />

      {/* Continue Watching Section */}
      <ContentSection title="Melanjutkan Tonton Film">
        <ScrollableRow>
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/196aa4a590dc66dc33eab3548f37be8b07184885?width=604"
            title="Don't Look Up"
            rating="4.5/5"
          />
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/e56ae7b0d09da0d3858de9f8511e2aba3a915e1e?width=604"
            title="The Batman"
            rating="4.2/5"
          />
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/92021a0f2c13911d3854ddfa7a8785f48b84c6e1?width=604"
            title="Blue Lock"
            rating="4.6/5"
            badge="Episode Baru"
          />
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/e29c1a71930718076c6811eac7f5652b2d8e9831?width=604"
            title="A Man Called Otto"
            rating="4.4/5"
          />
        </ScrollableRow>
      </ContentSection>

      {/* Top Rating Section */}
      <ContentSection title="Top Rating Film dan Series Hari ini">
        <ScrollableRow>
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/d0edf59cd2c8549e141bfa9a5c54860a8ca406e1?width=468"
            badge="Episode Baru"
          />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/7eb4d1a2a148efccdccd99093968f5dcd9316bf0?width=468" />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/5f0fba8aed94e4d02a837c0e8d4fc99247318507?width=468" />
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/ff0e7aa920dc164373001e2ef78aa1874767bdc1?width=468"
            badge="Episode Baru"
          />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/1075a485b17cfef0b042216d4e0d0edf57f7893f?width=468" />
        </ScrollableRow>
      </ContentSection>

      {/* Trending Films Section */}
      <ContentSection title="Film Trending">
        <ScrollableRow>
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/738e71a2903cb2b771583023713598589ba29931?width=468" />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/1e46cd09c2a17d0f651a64b0dffa1ff58a2b7e74?width=468" />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/6d0e52a87b1e30af3ffe0e5d20d78733636fb80d?width=468" />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/790e61077ddb8249825963553e9c65ebaaa01a9f?width=468" />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/88c2d63a30237991ca8d18d8d001158226811595?width=468" />
        </ScrollableRow>
      </ContentSection>

      {/* New Releases Section */}
      <ContentSection title="Rilis Baru">
        <ScrollableRow>
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/88c2d63a30237991ca8d18d8d001158226811595?width=468" />
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/c2a710e640ab2a634eba7384c7341c6a52224281?width=468"
            badge="Episode Baru"
          />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/1075a485b17cfef0b042216d4e0d0edf57f7893f?width=468" />
          <MovieCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/ff0e7aa920dc164373001e2ef78aa1874767bdc1?width=468"
            badge="Episode Baru"
          />
          <MovieCard image="https://api.builder.io/api/v1/image/assets/TEMP/433b69ba411022747be3a778771529d7a7db879e?width=468" />
        </ScrollableRow>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default Homepage;
