import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/1d84c0d927677fe6785e95cc8878531704dadea9?width=2880')`,
        }}
      />

      {/* Register Form */}
      <div className="relative z-10 w-full max-w-[529px] p-6 sm:p-10 flex flex-col items-center gap-6 sm:gap-9 rounded-2xl bg-chill-background/84 backdrop-blur-md border border-chill-border">
        {/* Logo */}
        <div className="flex h-11 items-center gap-1">
          <svg
            width="50"
            height="44"
            viewBox="0 0 50 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.4164 3.99658L35.2289 5.42658L40.9372 11.9166L45.0414 11.1832L43.4164 3.99658ZM29.1039 6.48992L24.9997 7.20492L30.7289 13.6766L34.8122 12.9616L29.1039 6.48992ZM18.8956 8.24992L14.7914 9.00158L20.5206 15.4732L24.6039 14.7582L18.8956 8.24992ZM8.66641 10.0832L6.62474 10.4316C5.5422 10.6219 4.58974 11.1825 3.97649 11.9903C3.36324 12.7981 3.13932 13.787 3.35391 14.7399L4.16641 18.3332L14.3747 16.5549L8.66641 10.0832ZM4.16641 18.3332V36.6666C4.16641 38.7016 6.04141 40.3333 8.33307 40.3333H41.6664C43.9789 40.3333 45.8331 38.7016 45.8331 36.6666V18.3332H4.16641Z"
              fill="white"
            />
          </svg>
          <div className="font-londrina text-[40px] sm:text-[50px] font-normal leading-[110%] text-white">
            CHILL
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-center text-[28px] sm:text-[32px] font-bold leading-[110%] font-lato">
            Daftar
          </h1>
          <p className="text-white text-center text-base font-normal leading-[140%] tracking-[0.2px] font-lato">
            Selamat datang!
          </p>
        </div>

        {/* Username Field */}
        <div className="flex flex-col items-start gap-1.5 w-full">
          <label className="text-white text-lg font-medium leading-[140%] tracking-[0.2px] font-lato">
            Username
          </label>
          <div className="flex px-5 py-3.5 items-start gap-2.5 w-full rounded-3xl border border-chill-border">
            <input
              type="text"
              placeholder="Masukkan username"
              className="bg-transparent text-chill-text-secondary text-base font-normal leading-[140%] tracking-[0.2px] font-lato w-full outline-none placeholder:text-chill-text-secondary"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <label className="text-white text-lg font-medium leading-[140%] tracking-[0.2px] font-lato">
              Kata Sandi
            </label>
            <div className="flex h-[47px] px-5 py-3.5 justify-between items-center w-full rounded-3xl border border-chill-border">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                className="bg-transparent text-chill-text-secondary text-base font-normal leading-[140%] tracking-[0.2px] font-lato w-full outline-none placeholder:text-chill-text-secondary"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="text-chill-text-disabled"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85801 8L12.4997 10.6333C12.4997 10.5917 12.4997 10.5417 12.4997 10.5C12.4997 9.83696 12.2363 9.20107 11.7674 8.73223C11.2986 8.26339 10.6627 8 9.99967 8C9.94967 8 9.90801 8 9.85801 8ZM6.27467 8.66667L7.56634 9.95833C7.52467 10.1333 7.49967 10.3083 7.49967 10.5C7.49967 11.163 7.76307 11.7989 8.23191 12.2678C8.70075 12.7366 9.33663 13 9.99967 13C10.183 13 10.3663 12.975 10.5413 12.9333L11.833 14.225C11.2747 14.5 10.658 14.6667 9.99967 14.6667C8.89461 14.6667 7.8348 14.2277 7.0534 13.4463C6.272 12.6649 5.83301 11.6051 5.83301 10.5C5.83301 9.84167 5.99967 9.225 6.27467 8.66667ZM1.66634 4.05833L3.56634 5.95833L3.94134 6.33333C2.56634 7.41667 1.48301 8.83333 0.833008 10.5C2.27467 14.1583 5.83301 16.75 9.99967 16.75C11.2913 16.75 12.5247 16.5 13.6497 16.05L14.008 16.4L16.4413 18.8333L17.4997 17.775L2.72467 3M9.99967 6.33333C11.1047 6.33333 12.1646 6.77232 12.946 7.55372C13.7274 8.33512 14.1663 9.39493 14.1663 10.5C14.1663 11.0333 14.058 11.55 13.8663 12.0167L16.308 14.4583C17.558 13.4167 18.558 12.05 19.1663 10.5C17.7247 6.84167 14.1663 4.25 9.99967 4.25C8.83301 4.25 7.71634 4.45833 6.66634 4.83333L8.47467 6.625C8.94967 6.44167 9.45801 6.33333 9.99967 6.33333Z"
                    fill="#9D9EA1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <label className="text-white text-lg font-medium leading-[140%] tracking-[0.2px] font-lato">
              Konfirmasi Kata Sandi
            </label>
            <div className="flex h-[47px] px-5 py-3.5 justify-between items-center w-full rounded-3xl border border-chill-border">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                className="bg-transparent text-chill-text-secondary text-base font-normal leading-[140%] tracking-[0.2px] font-lato w-full outline-none placeholder:text-chill-text-secondary"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-chill-text-disabled"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85801 8L12.4997 10.6333C12.4997 10.5917 12.4997 10.5417 12.4997 10.5C12.4997 9.83696 12.2363 9.20107 11.7674 8.73223C11.2986 8.26339 10.6627 8 9.99967 8C9.94967 8 9.90801 8 9.85801 8ZM6.27467 8.66667L7.56634 9.95833C7.52467 10.1333 7.49967 10.3083 7.49967 10.5C7.49967 11.163 7.76307 11.7989 8.23191 12.2678C8.70075 12.7366 9.33663 13 9.99967 13C10.183 13 10.3663 12.975 10.5413 12.9333L11.833 14.225C11.2747 14.5 10.658 14.6667 9.99967 14.6667C8.89461 14.6667 7.8348 14.2277 7.0534 13.4463C6.272 12.6649 5.83301 11.6051 5.83301 10.5C5.83301 9.84167 5.99967 9.225 6.27467 8.66667ZM1.66634 4.05833L3.56634 5.95833L3.94134 6.33333C2.56634 7.41667 1.48301 8.83333 0.833008 10.5C2.27467 14.1583 5.83301 16.75 9.99967 16.75C11.2913 16.75 12.5247 16.5 13.6497 16.05L14.008 16.4L16.4413 18.8333L17.4997 17.775L2.72467 3M9.99967 6.33333C11.1047 6.33333 12.1646 6.77232 12.946 7.55372C13.7274 8.33512 14.1663 9.39493 14.1663 10.5C14.1663 11.0333 14.058 11.55 13.8663 12.0167L16.308 14.4583C17.558 13.4167 18.558 12.05 19.1663 10.5C17.7247 6.84167 14.1663 4.25 9.99967 4.25C8.83301 4.25 7.71634 4.45833 6.66634 4.83333L8.47467 6.625C8.94967 6.44167 9.45801 6.33333 9.99967 6.33333Z"
                    fill="#9D9EA1"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Already have account link */}
          <div className="flex items-center gap-1.5">
            <span className="text-chill-text-secondary text-base font-medium leading-[140%] tracking-[0.2px] font-lato">
              Sudah punya akun?
            </span>
            <Link
              to="/login"
              className="text-white text-base font-medium leading-[140%] tracking-[0.2px] font-lato hover:underline"
            >
              Masuk
            </Link>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          {/* Register Button */}
          <button className="flex px-5 py-3.5 justify-center items-center gap-2.5 w-full rounded-3xl border border-chill-border bg-chill-extra hover:bg-chill-extra/80 transition-colors">
            <span className="text-white text-base font-semibold leading-[140%] tracking-[0.2px] font-lato">
              Daftar
            </span>
          </button>

          {/* Or Divider */}
          <span className="text-chill-text-disabled text-sm font-medium leading-[140%] tracking-[0.2px] font-lato">
            Atau
          </span>

          {/* Google Sign In */}
          <button className="flex h-[47px] px-5 py-3.5 justify-center items-center gap-5 w-full rounded-3xl border border-chill-border hover:bg-white/5 transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/96275df5c840c30398d95dff011c971813718581?width=36"
              alt="Google"
              className="w-[18px] h-[18px]"
            />
            <span className="text-white text-base font-semibold leading-[140%] tracking-[0.2px] font-lato">
              Daftar dengan Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
