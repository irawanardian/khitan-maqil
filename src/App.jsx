import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import {
  BiEnvelopeOpen,
  BiHomeHeart,
  BiInfoCircle,
  BiImages,
  BiCalendarHeart,
  BiCalendar,
  BiMap,
  BiPlay,
  BiPause,
  BiMusic,
  BiTimeFive,
  BiSkipNext,
} from "react-icons/bi";


const HeroBottomDecor = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-30 ${className}`}>
      {/* Opening: full asset, balon + jerapah */}
      <img
        src="/images/right.png"
        alt=""
        className="absolute bottom-[76px] left-[-18px] w-[128px] pointer-events-none"
      />

      <img
        src="/images/right.png"
        alt=""
        className="absolute bottom-[76px] right-[-18px] w-[128px] pointer-events-none [transform:scaleX(-1)]"
      />
    </div>
  );
};

const SectionBottomDecor = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-30 ${className}`}>
      {/* Section lain: crop asset supaya yang tampil fokus jerapah + bunga bawah */}
      <div className="absolute bottom-[78px] left-[2px] w-[78px] h-[88px] overflow-hidden">
        <img
          src="/images/right.png"
          alt=""
          className="absolute bottom-[-6px] left-[-8px] w-[104px] max-w-none pointer-events-none"
        />
      </div>

      <div className="absolute bottom-[78px] right-[2px] w-[78px] h-[88px] overflow-hidden">
        <img
          src="/images/right.png"
          alt=""
          className="absolute bottom-[-6px] right-[-8px] w-[104px] max-w-none pointer-events-none [transform:scaleX(-1)]"
        />
      </div>
    </div>
  );
};

const SectionCanvas = ({ children, className = "" }) => {
  return (
    <section
      className={`relative w-full h-[var(--app-h,100dvh)] flex justify-center overflow-hidden bg-[#f4e4d3] p-0 ${className}`}
    >
      <div
        className="relative w-[430px] h-[844px] bg-gradient-to-b from-[#f3dfcc] via-[#fff8ef] to-[#f4e1cd] overflow-hidden shadow-2xl origin-top"
        style={{
          transform: "scale(var(--invite-scale, 1))",
        }}
      >
        <img
          src="/images/asset_top_botanical_header_transparent.png"
          alt=""
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-[470px] max-w-none z-10 pointer-events-none"
        />

        <div className="absolute left-1/2 top-[88px] -translate-x-1/2 w-[325px] h-[650px] bg-[#fffdf6]/95 rounded-t-[180px] rounded-b-[24px] z-20 shadow-[0_20px_50px_rgba(117,76,38,0.16)] border border-[#e8c98b]/70 overflow-hidden">
          <img
            src="/images/asset_top_botanical_header_transparent.png"
            alt=""
            className="absolute -top-[58px] left-1/2 -translate-x-1/2 w-[360px] max-w-none opacity-15 pointer-events-none"
          />

          {children}
        </div>

        <SectionBottomDecor />
      </div>
    </section>
  );
};

const sectionEnter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const itemDown = {
  hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const photoPop = {
  hidden: { opacity: 0, scale: 0.72, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.65,
      type: "spring",
      bounce: 0.35,
    },
  },
};

const cardPop = {
  hidden: { opacity: 0, y: 22, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.25,
    },
  },
};

const sectionSwitch = {
  initial: { opacity: 0, y: 18, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -18, scale: 0.98 },
  transition: { duration: 0.45, ease: "easeOut" },
};

// ------------------------------------------------------------
// 8. GALERI – MOMEN KHITANAN
// ------------------------------------------------------------
const CoralGallery = () => {
  const galleryImages = [
    { id: 1, url: "/images/photo-1.jpg", alt: "Galeri 1" },
    { id: 2, url: "/images/photo-2.jpg", alt: "Galeri 2" },
    { id: 3, url: "/images/photo-3.jpg", alt: "Galeri 3" },
    { id: 4, url: "/images/photo-4.jpg", alt: "Galeri 4" },
  ];

  return (
    <SectionCanvas>
      <motion.div
        variants={sectionEnter}
        initial="hidden"
        animate="visible"
        className="relative z-30 h-full flex flex-col items-center text-center px-7 pt-[62px]"
      >
        <motion.div variants={photoPop}>
          <BiImages className="text-[30px] text-[#b8793d] mb-1" />
        </motion.div>

        <motion.h2
          variants={itemDown}
          className="font-script text-[#7b4925] text-[30px] mb-1"
        >
          Galeri Momen
        </motion.h2>

        <motion.p
          variants={itemUp}
          className="text-[#6b5545] text-[10px] leading-[1.5] mb-3 max-w-[250px]"
        >
          Beberapa potret kebahagiaan putra kami dan keluarga dalam menyambut
          tasyakuran khitanan.
        </motion.p>

        <div className="grid grid-cols-2 gap-2.5 w-full">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              variants={cardPop}
              whileTap={{ scale: 0.96 }}
              className="rounded-[18px] p-2 bg-[#fff4df] shadow-md border border-[#ead2a6]"
              onClick={() =>
  Swal.fire({
    imageUrl: img.url,
    imageAlt: img.alt,
    showConfirmButton: false,
    showCloseButton: true,
    background: "#fff8ef",
    width: 420,
    padding: "12px",
    customClass: {
      popup: "rounded-[24px]",
      image: "rounded-[18px]",
    },
  })
}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-[82px] object-cover rounded-[14px] border-2 border-white shadow-sm"
              />
            </motion.div>
          ))}
        </div>

        {/* VIDEO SUNAT */}
        <motion.div
          variants={cardPop}
          className="mt-4 w-full rounded-[22px] overflow-hidden bg-[#fff4df] border border-[#ead2a6] shadow-xl p-2"
        >
          <div className="relative rounded-[16px] overflow-hidden border-2 border-white bg-black shadow-sm">
            <video
              src="/videos/video-sunat.mp4"
              className="w-full h-[125px] object-cover"
              controls
              playsInline
              preload="metadata"
            />

            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 shadow border border-[#ead2a6] pointer-events-none">
              <p className="text-[#7b4925] text-[9px] font-bold">
                Video Momen Khitan
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={itemUp}
          className="text-[10px] text-[#7b4925] mt-3 bg-[#fffdf7]/85 inline-block px-5 py-2 rounded-full shadow-md border border-[#ead2a6]"
        >
          Semoga menjadi kenangan indah 🤎
        </motion.p>
      </motion.div>
    </SectionCanvas>
  );
};

const MapsSection = () => {
  const mapsUrl = "https://maps.app.goo.gl/gyNDWW4c7nJj5jXZ7";

  return (
    <SectionCanvas>
      <motion.div
        variants={sectionEnter}
        initial="hidden"
        animate="visible"
        className="relative z-30 h-full flex flex-col items-center text-center px-7 pt-[76px]"
      >
        <motion.div variants={photoPop}>
          <BiMap className="text-[36px] text-[#b8793d] mb-2" />
        </motion.div>

        <motion.h2
          variants={itemDown}
          className="font-script text-[#7b4925] text-[34px] mb-2"
        >
          Lokasi Acara
        </motion.h2>

        <motion.p
          variants={itemUp}
          className="text-[#6b5545] text-[11px] leading-[1.6] mb-4"
        >
          Tasyakuran khitanan akan dilaksanakan di Majelis Ta&apos;lim Ar-Rifqi.
          Klik tombol di bawah untuk membuka lokasi melalui Google Maps.
        </motion.p>

        <motion.div
          variants={cardPop}
          className="w-full rounded-[24px] overflow-hidden bg-[#fff4df] border border-[#ead2a6] shadow-xl p-2"
        >
          <div className="relative rounded-[18px] overflow-hidden border-2 border-white shadow-sm bg-[#f4e1cd]">
            <iframe
              title="Peta Lokasi Majelis Ta'lim Ar-Rifqi"
              src="https://www.google.com/maps?q=Majelis%20Ta%27lim%20Ar-Rifqi%20Jl.%20Swadaya%20II%20Rangkapan%20Jaya%20Pancoran%20Mas%20Depok&output=embed"
              className="w-full h-[220px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="absolute bottom-3 left-3 right-3 bg-white/92 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-[#ead2a6] pointer-events-none">
              <p className="text-[#7b4925] text-[11px] font-bold leading-tight">
                📍 Majelis Ta&apos;lim Ar-Rifqi
              </p>
              <p className="text-[#6b5545] text-[9px] leading-tight mt-1">
                Jl. Swadaya II, RT 04/19, Rangkapan Jaya, Pancoran Mas, Depok
              </p>
            </div>
          </div>
        </motion.div>

        <motion.a
          variants={itemUp}
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 bg-[#d99b5d] text-white font-semibold rounded-full shadow-xl border border-white/70 w-[210px] py-3 text-[14px]"
        >
          <BiMap className="text-[18px]" />
          Buka Google Maps
        </motion.a>
      </motion.div>
    </SectionCanvas>
  );
};

// ------------------------------------------------------------
// 9. COUNTDOWN
// ------------------------------------------------------------
const CountdownSection = () => {
  const targetDate = "2026-07-05T13:00:00+07:00";

  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const distance = new Date(targetDate).getTime() - new Date().getTime();

      if (distance <= 0) {
        setTimeLeft({
          hari: 0,
          jam: 0,
          menit: 0,
          detik: 0,
        });
        return;
      }

      setTimeLeft({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor((distance / (1000 * 60 * 60)) % 24),
        menit: Math.floor((distance / (1000 * 60)) % 60),
        detik: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "Hari", value: timeLeft.hari },
    { label: "Jam", value: timeLeft.jam },
    { label: "Menit", value: timeLeft.menit },
    { label: "Detik", value: timeLeft.detik },
  ];

  return (
    <SectionCanvas>
      <motion.div
        variants={sectionEnter}
        initial="hidden"
        animate="visible"
        className="relative z-30 h-full flex flex-col items-center text-center px-7 pt-[82px]"
      >
        <motion.div variants={photoPop}>
          <BiTimeFive className="text-[34px] text-[#b8793d] mb-2" />
        </motion.div>

        <motion.h2
          variants={itemDown}
          className="font-script text-[#7b4925] text-[32px] leading-[1.15] mb-2"
        >
          Menuju Hari Bahagia
        </motion.h2>

        <motion.p
          variants={itemUp}
          className="text-[#6b5545] text-[11px] leading-[1.6] mb-5 max-w-[250px]"
        >
          Menghitung waktu menuju acara tasyakuran khitanan putra kami.
        </motion.p>

        <motion.div
          variants={cardPop}
          className="w-full bg-[#fff8ef]/90 border border-[#ead2a6] rounded-[26px] px-4 py-5 shadow-xl"
        >
          <p className="inline-block bg-[#fff4df] text-[#8b572a] px-4 py-1.5 rounded-full text-[11px] font-bold border border-[#ead2a6] mb-4">
            Minggu, 5 Juli 2026
          </p>

          <div className="grid grid-cols-4 gap-2 w-full">
            {countdownItems.map((item) => (
              <motion.div
                key={item.label}
                variants={cardPop}
                className="rounded-[18px] bg-white/90 border border-[#ead2a6] shadow-md px-1 py-3"
              >
                <p className="text-[#7b4925] text-[22px] leading-none font-bold">
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="text-[#6b5545] text-[9px] font-semibold mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
  variants={itemUp}
  className="mt-5 w-full rounded-[22px] bg-[#fffdf7]/85 border border-[#ead2a6] shadow-md px-5 py-3"
>
  <p className="text-[#7b4925] text-[11px] leading-[1.55]">
    InsyaAllah sampai bertemu di acara kami 🤎
  </p>
</motion.div>

<motion.div
  variants={itemUp}
  className="mt-5 flex items-center justify-center gap-3 text-[#d2a45f]"
>
  <span className="w-14 h-[1px] bg-[#d2a45f]/80" />
  <span className="text-[11px]">✦</span>
  <span className="w-14 h-[1px] bg-[#d2a45f]/80" />
</motion.div>

<motion.div
  variants={itemUp}
  className="mt-4 px-5 text-center"
>
  <p className="text-[#6b5545] text-[11px] leading-[1.7]">
    Semoga tasyakuran ini menjadi awal kebaikan, keberkahan, dan doa terbaik
    untuk putra kami.
  </p>
</motion.div>
      </motion.div>
    </SectionCanvas>
  );
};

// ------------------------------------------------------------
// 10. MAIN APP
// ------------------------------------------------------------
export default function App() {
const [isOpened, setIsOpened] = useState(false);
const [activeSection, setActiveSection] = useState("hero");
const [guestName, setGuestName] = useState("Bunda/Ayah/Teman Istimewa");
const [isMusicPlaying, setIsMusicPlaying] = useState(false);
const [isAutoSlide, setIsAutoSlide] = useState(true);
const audioRef = useRef(null);

const sectionOrder = ["doa", "greeting", "timeline", "countdown", "maps", "gallery"];

const guestNameTextClass =
  guestName.length > 45
    ? "text-[9px] leading-[1.35]"
    : guestName.length > 28
    ? "text-[10px] leading-[1.35]"
    : "text-[12px] leading-[1.3]";

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  if (to) setGuestName(to);

  const setRealViewport = () => {
    const realHeight = window.visualViewport?.height || window.innerHeight;
    const realWidth = window.visualViewport?.width || window.innerWidth;

    // Base desain kita kira-kira 430 x 844
    // Dikurangi sedikit supaya aman dari toolbar iPhone/Safari.
    const scaleByHeight = realHeight / 844;
    const scaleByWidth = realWidth / 430;
    const scale = Math.min(1, scaleByHeight, scaleByWidth);

    document.documentElement.style.setProperty("--app-h", `${realHeight}px`);
    document.documentElement.style.setProperty("--invite-scale", `${scale}`);
  };

  setRealViewport();

  window.addEventListener("resize", setRealViewport);
  window.visualViewport?.addEventListener("resize", setRealViewport);
  window.visualViewport?.addEventListener("scroll", setRealViewport);

  document.body.style.overflow = "hidden";

  return () => {
    window.removeEventListener("resize", setRealViewport);
    window.visualViewport?.removeEventListener("resize", setRealViewport);
    window.visualViewport?.removeEventListener("scroll", setRealViewport);
    document.body.style.overflow = "auto";
  };
}, []);

useEffect(() => {
  if (!isOpened) return;
  if (!isAutoSlide) return;
  if (activeSection === "hero") return;
  if (activeSection === "gallery") return;

  const timer = setTimeout(() => {
    const currentIndex = sectionOrder.indexOf(activeSection);
    const nextSection = sectionOrder[currentIndex + 1];

    if (nextSection) {
      setActiveSection(nextSection);
    }
  }, 10000);

  return () => clearTimeout(timer);
}, [isOpened, activeSection, isAutoSlide]);

const handleOpenInvite = () => {
  setIsOpened(true);
  setActiveSection("doa");

  if (audioRef.current) {
    audioRef.current
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch((e) => {
        console.log("Audio play failed:", e);
        setIsMusicPlaying(false);
      });
  }
};

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (audioRef.current.paused) {
    audioRef.current
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch((e) => {
        console.log("Audio play failed:", e);
        setIsMusicPlaying(false);
      });
  } else {
    audioRef.current.pause();
    setIsMusicPlaying(false);
  }
};

const toggleAutoSlide = () => {
  setIsAutoSlide((prev) => !prev);
};

  return (
    <div className="font-quicksand text-[#1f2937] relative overflow-x-hidden bg-[#fef9fc] min-h-screen selection:bg-pink-300 selection:text-white">
      <audio ref={audioRef} src="audio/huwannur.mp3" loop />

      {/* FLOATING CONTROLS */}
{isOpened && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: -10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    className="fixed bottom-24 right-4 z-[60] flex flex-col gap-3"
  >
    {/* AUTO SLIDE BUTTON */}
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleAutoSlide}
      className={`relative w-12 h-12 rounded-full border border-[#e7c88d]/70 shadow-2xl backdrop-blur-xl text-[#fff4df] flex items-center justify-center ${
        isAutoSlide ? "bg-[#7b4925]/90" : "bg-[#4d4036]/75"
      }`}
      aria-label={isAutoSlide ? "Matikan auto slide" : "Nyalakan auto slide"}
      title={isAutoSlide ? "Auto slide aktif" : "Auto slide mati"}
    >
      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#d99b5d] border border-white/70 flex items-center justify-center">
        <span className="text-[8px] text-white font-bold">
          {isAutoSlide ? "ON" : "OFF"}
        </span>
      </span>

      <BiSkipNext className="text-2xl drop-shadow" />
    </motion.button>

    {/* MUSIC BUTTON */}
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleMusic}
      className="relative w-12 h-12 rounded-full bg-[#7b4925]/90 border border-[#e7c88d]/70 shadow-2xl backdrop-blur-xl text-[#fff4df] flex items-center justify-center"
      aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      title={isMusicPlaying ? "Pause music" : "Play music"}
    >
      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#d99b5d] border border-white/70 flex items-center justify-center">
        <BiMusic className="text-xs text-white" />
      </span>

      {isMusicPlaying ? (
        <BiPause className="text-3xl drop-shadow" />
      ) : (
        <BiPlay className="text-3xl drop-shadow translate-x-[1px]" />
      )}
    </motion.button>
  </motion.div>
)}

      {/* NAVBAR - BOTTOM DOCK */}
<nav
  className={`fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 bg-[#8b572a] text-[#fff4df] shadow-2xl rounded-t-[22px] border-t border-[#e7c88d]/50 px-3 pt-2 pb-[calc(10px+env(safe-area-inset-bottom))] transition-all duration-500 ${
    isOpened
      ? "translate-y-0 opacity-100"
      : "translate-y-24 opacity-0 pointer-events-none"
  }`}
>
  <div className="flex items-end justify-around">
    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={() => setActiveSection("hero")}
      className={`flex w-[14.28%] flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[9px] font-semibold transition ${
        activeSection === "hero"
          ? "bg-[#fff4df] text-[#8b572a] shadow-lg"
          : "text-[#fff4df]/90"
      }`}
    >
      <BiEnvelopeOpen className="text-[18px]" />
      <span>Opening</span>
    </motion.button>

    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={() => setActiveSection("doa")}
      className={`flex w-[14.28%] flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[9px] font-semibold transition ${
        activeSection === "doa"
          ? "bg-[#fff4df] text-[#8b572a] shadow-lg"
          : "text-[#fff4df]/90"
      }`}
    >
      <BiInfoCircle className="text-[18px]" />
      <span>Doa</span>
    </motion.button>

    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={() => setActiveSection("greeting")}
      className={`flex w-[14.28%] flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[9px] font-semibold transition ${
        activeSection === "greeting"
          ? "bg-[#fff4df] text-[#8b572a] shadow-lg"
          : "text-[#fff4df]/90"
      }`}
    >
      <BiHomeHeart className="text-[18px]" />
      <span>Greeting</span>
    </motion.button>

    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={() => setActiveSection("timeline")}
      className={`flex w-[14.28%] flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[9px] font-semibold transition ${
        activeSection === "timeline"
          ? "bg-[#fff4df] text-[#8b572a] shadow-lg"
          : "text-[#fff4df]/90"
      }`}
    >
      <BiCalendarHeart className="text-[18px]" />
      <span>Timeline</span>
    </motion.button>

    <motion.button
  type="button"
  whileTap={{ scale: 0.92 }}
  onClick={() => setActiveSection("countdown")}
  className={`flex w-[14.28%] flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[8px] font-semibold transition ${
    activeSection === "countdown"
      ? "bg-[#fff4df] text-[#8b572a] shadow-lg"
      : "text-[#fff4df]/90"
  }`}
>
  <BiTimeFive className="text-[18px]" />
  <span>Hari H</span>
</motion.button>

    <motion.button
  type="button"
  whileTap={{ scale: 0.92 }}
  onClick={() => setActiveSection("maps")}
  className={`flex w-[14.28%] flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[9px] font-semibold transition ${
    activeSection === "maps"
      ? "bg-[#fff4df] text-[#8b572a] shadow-lg"
      : "text-[#fff4df]/90"
  }`}
>
  <BiMap className="text-[18px]" />
  <span>Maps</span>
</motion.button>

    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={() => setActiveSection("gallery")}
      className={`flex w-[14.28%] flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[9px] font-semibold transition ${
        activeSection === "gallery"
          ? "bg-[#fff4df] text-[#8b572a] shadow-lg"
          : "text-[#fff4df]/90"
      }`}
    >
      <BiImages className="text-[18px]" />
      <span>Gallery</span>
    </motion.button>
  </div>
</nav>

<AnimatePresence mode="wait">

{/* HERO SECTION - KHITANAN PORTRAIT FINAL COMPACT */}
{activeSection === "hero" && (
  <motion.div key="hero" {...sectionSwitch}>
    <section
  id="hero"
  className="relative w-full h-[var(--app-h,100dvh)] flex justify-center overflow-hidden bg-[#f4e4d3] p-0"
>
      {/* CANVAS UNDANGAN */}
<div
  className="relative w-[430px] h-[844px] bg-[#f4e4d3] overflow-hidden shadow-2xl origin-top"
  style={{
    transform: "scale(var(--invite-scale, 1))",
  }}
>
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3dfcc] via-[#fff4e8] to-[#f4e1cd]" />

        {/* Dekorasi atas utama */}
        <img
          src="/images/asset_top_botanical_header_transparent.png"
          alt=""
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-[470px] max-w-none z-10 pointer-events-none"
        />

        {/* Panel putih arch */}
        <div className="absolute left-1/2 top-[88px] -translate-x-1/2 w-[325px] h-[650px] bg-[#fffdf6]/95 rounded-t-[180px] rounded-b-[24px] z-20 shadow-[0_20px_50px_rgba(117,76,38,0.16)] border border-[#e8c98b]/70 overflow-hidden">
          {/* Hiasan lembut dalam panel */}
          <img
            src="/images/asset_top_botanical_header_transparent.png"
            alt=""
            className="absolute -top-[58px] left-1/2 -translate-x-1/2 w-[360px] max-w-none opacity-15 pointer-events-none"
          />

          <motion.div
            variants={sectionEnter}
            initial="hidden"
            animate="visible"
            className="relative z-30 h-full flex flex-col items-center text-center px-7 pt-[58px]"
          >
            {/* Foto anak */}
            <motion.div
              variants={photoPop}
              className="w-[105px] h-[105px] rounded-full bg-gradient-to-br from-[#e8c77d] to-[#9b642d] p-[3px] shadow-xl"
            >
              <div className="w-full h-full rounded-full bg-white p-[4px]">
                <img
                  src="/images/azkal-cover.jpg"
                  alt="Foto Anak Khitanan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Ornament kecil */}
            <motion.div
              variants={itemDown}
              className="mt-[16px] flex items-center justify-center gap-3 text-[#d2a45f]"
            >
              <span className="w-12 h-[1px] bg-[#d2a45f]" />
              <span className="text-[10px]">✦</span>
              <span className="w-12 h-[1px] bg-[#d2a45f]" />
            </motion.div>

            {/* Judul */}
            <motion.div variants={itemUp} className="text-center mt-4">
              <p className="font-medium text-[#7b4925] text-[14px] leading-none">
                Undangan Tasyakuran Khitanan
              </p>

              <h1 className="font-script text-[#6f3f1d] text-[25px] leading-[0.95] mt-3 drop-shadow-sm">
                Azkal Qolyubi Hasan
              </h1>
            </motion.div>

            {/* Garis divider */}
            <motion.div
              variants={itemUp}
              className="flex items-center justify-center gap-2 mt-5 text-[#d2a45f]"
            >
              <span className="w-16 h-[1px] bg-[#d2a45f]" />
              <span className="text-[10px]">◇</span>
              <span className="w-16 h-[1px] bg-[#d2a45f]" />
            </motion.div>

            {/* Teks undangan */}
            <motion.div
              variants={itemUp}
              className="text-center mt-6 px-2 text-[#25201d] text-[14px] leading-[1.75] font-medium"
            >
              <p>
                Tanpa Mengurangi Rasa Hormat, Kami Mengundang
                Bapak/Ibu/Saudara/i untuk Hadir di Acara Kami.
              </p>
            </motion.div>

            {/* Kepada */}
            <motion.div variants={itemUp} className="text-center mt-5 w-full">
              <p className="text-[#25201d] text-[18px] mb-3">Kepada</p>

              <p
                className={`mx-auto max-w-[86%] text-[#8b572a] font-bold bg-white/90 rounded-2xl px-4 py-2 shadow-sm whitespace-normal break-words ${guestNameTextClass}`}
              >
                {guestName}
              </p>
            </motion.div>

            {/* Tombol */}
            <AnimatePresence>
              {!isOpened && (
                <motion.button
                  variants={cardPop}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0px 14px 28px rgba(181, 116, 54, 0.32)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenInvite}
                  className="mx-auto mt-6 flex items-center justify-center gap-2 bg-[#d99b5d] text-white font-semibold rounded-full shadow-xl border border-white/70 w-[210px] py-3 text-[15px]"
                >
                  <BiEnvelopeOpen className="text-[1em]" />
                  Buka Undangan
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom botanical filler */}
<img
  src="/images/asset_top_botanical_header_transparent.png"
  alt=""
  className="absolute bottom-[-118px] left-1/2 -translate-x-1/2 w-[420px] max-w-none z-20 pointer-events-none opacity-35 rotate-180"
/>

{/* Soft glow bawah */}
<div className="absolute bottom-[58px] left-1/2 -translate-x-1/2 w-[300px] h-[90px] bg-[#d99b5d]/18 blur-3xl rounded-full z-10 pointer-events-none" />

        <HeroBottomDecor />
      </div>
    </section>
  </motion.div>
)}

{/* DOA / AYAT SECTION - KHITANAN */}
{activeSection === "doa" && (
  <motion.div key="doa" {...sectionSwitch}>
    <SectionCanvas>
    <motion.div
  variants={sectionEnter}
  initial="hidden"
  animate="visible"
  className="relative z-30 h-full flex flex-col items-center text-center px-7 pt-[92px]"
>
  <motion.div
  variants={itemDown}
  className="flex items-center justify-center gap-3 mb-4 text-[#d2a45f]"
>
  <span className="w-12 h-[1px] bg-[#d2a45f]" />
  <span className="text-[12px]">۞</span>
  <span className="w-12 h-[1px] bg-[#d2a45f]" />
</motion.div>

<motion.h2
  variants={itemUp}
  className="font-script text-[#7b4925] text-[32px] mb-5"
>
  Doa & Harapan
</motion.h2>

<motion.p
  variants={itemUp}
  dir="rtl"
  className="text-[#3b2a1f] text-[13px] leading-[2] font-serif mb-5"
>
  ثُمَّ أَوْحَيْنَا إِلَيْكَ أَنِ اتَّبِعْ مِلَّةَ إِبْرَاهِيمَ
  حَنِيفًا ۖ وَمَا كَانَ مِنَ الْمُشْرِكِينَ
</motion.p>

<motion.p
  variants={itemUp}
  className="text-[#4d4036] text-[12px] leading-[1.7] mb-4"
>
  Kemudian Kami wahyukan kepadamu, “Ikutilah agama Ibrahim yang lurus,
  dan dia bukanlah termasuk orang-orang musyrik.”
</motion.p>

<motion.p
  variants={itemUp}
  className="text-[#8b572a] font-bold text-[12px] mb-5"
>
  — QS. An-Nahl Ayat 123 —
</motion.p>

<motion.div
  variants={itemUp}
  className="mx-auto w-20 h-[1px] bg-[#d2a45f]/70 mb-5"
/>

<motion.p
  variants={itemUp}
  className="text-[#4d4036] text-[12px] leading-[1.75]"
>
  Semoga Allah SWT menjadikan putra kami anak yang sholeh, sehat,
  berbakti kepada kedua orang tua, taat dalam beribadah, serta tumbuh
  menjadi pribadi yang kuat iman, baik akhlak, dan bermanfaat bagi agama,
  keluarga, dan sesama.
</motion.p>
</motion.div>
    </SectionCanvas>
  </motion.div>
)}
      

      {/* HOME SECTION - KHITANAN INTRO */}
{activeSection === "greeting" && (
  <motion.div key="greeting" {...sectionSwitch}>
    <SectionCanvas>
      <motion.div
        variants={sectionEnter}
        initial="hidden"
        animate="visible"
        className="relative z-30 h-full flex flex-col items-center text-center px-7 pt-[78px]"
      >
        <motion.h2
  variants={itemDown}
  className="font-script text-[#7b4925] text-[32px] mb-4"
>
  Assalamualaikum
</motion.h2>

<motion.p
  variants={itemUp}
  className="text-[#4d4036] text-[12px] leading-[1.7] mb-6"
>
  Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
  menyelenggarakan tasyakuran khitanan putra kami. Tanpa mengurangi rasa
  hormat, kami mengundang{" "}
  <span className="font-bold text-[#8b572a]">{guestName}</span>{" "}
  untuk hadir dan memberikan doa restu.
</motion.p>

<motion.div variants={photoPop} className="relative mb-5">
  <div className="w-[128px] h-[128px] rounded-full bg-gradient-to-br from-[#e8c77d] to-[#9b642d] p-[4px] shadow-xl">
    <div className="w-full h-full rounded-full bg-white p-[4px]">
      <img
        src="/images/azkal-cover.jpg"
        alt="Foto Anak Khitanan"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>

  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-1 rounded-full shadow-md font-bold text-[#8b572a] text-[11px] border border-[#ead2a6]">
    Putra Kami
  </div>
</motion.div>

<motion.p variants={itemUp} className="text-[#8b572a] text-[14px] mt-3 mb-1">
  Tasyakuran Khitanan
</motion.p>

<motion.h2
  variants={itemUp}
  className="font-script text-[#6f3f1d] text-[20px] leading-none mb-4"
>
  Azkal Qolyubi Hasan
</motion.h2>

<motion.div
  variants={itemUp}
  className="flex items-center justify-center gap-3 mb-4 text-[#d4a45f]"
>
  <span className="w-16 h-[1px] bg-[#d4a45f]" />
  <span className="text-[10px]">◇</span>
  <span className="w-16 h-[1px] bg-[#d4a45f]" />
</motion.div>

<motion.p variants={itemUp} className="text-[#6b5545] text-[14px] mb-3">
  Putra dari
</motion.p>

<motion.p
  variants={cardPop}
  className="text-[#7b4925] bg-[#fff4df]/80 inline-block px-5 py-2 rounded-full shadow-sm border border-[#ead2a6] text-[14px] font-bold"
>
  Ayah Rifqi & Mamah Febi
</motion.p>
      </motion.div> 
    </SectionCanvas>
  </motion.div>
)}

      {/* INFO SECTION - DETAIL ACARA KHITANAN */}
{activeSection === "timeline" && (
  <motion.div key="timeline" {...sectionSwitch}>
    <SectionCanvas>
      <motion.div
        variants={sectionEnter}
        initial="hidden"
        animate="visible"
        className="relative z-30 h-full flex flex-col items-center text-center px-7 pt-[76px]"
      >
        <motion.div variants={photoPop}>
          <BiCalendarHeart className="text-[34px] text-[#b8793d] mb-2" />
        </motion.div>

        <motion.h2
          variants={itemDown}
          className="font-script text-[#7b4925] text-[34px] mb-2"
        >
          Detail Acara
        </motion.h2>

        <motion.p
          variants={itemUp}
          className="text-[#6b5545] text-[11px] leading-[1.6] mb-5"
        >
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
          hadir dalam rangkaian tasyakuran khitanan putra kami.
        </motion.p>

        <div className="w-full space-y-4">
          <motion.div
            variants={cardPop}
            className="bg-[#fff8ef]/90 border border-[#ead2a6] rounded-[26px] p-4 shadow-md"
          >
            <h3 className="font-script text-[#7b4925] text-[24px] mb-3">
              Pelaksanaan Khitan
            </h3>

            <p className="inline-block bg-[#fff4df] text-[#8b572a] px-3 py-1 rounded-full text-[11px] font-bold border border-[#ead2a6] mb-2">
              📅 Hari & Tanggal
            </p>

            <p className="text-[#4d4036] text-[13px]">
              Sabtu, 20 Juni 2026
            </p>
          </motion.div>

          <motion.div
            variants={cardPop}
            className="bg-[#fff8ef]/90 border border-[#ead2a6] rounded-[26px] p-4 shadow-md"
          >
            <h3 className="font-script text-[#7b4925] text-[24px] mb-3">
              Tasyakuran Khitanan
            </h3>

            <div className="space-y-2 text-[#4d4036] text-[12px] leading-[1.5]">
              <p>
                <span className="font-bold text-[#8b572a]">📅</span>{" "}
                Minggu, 5 Juli 2026
              </p>

              <p>
                <span className="font-bold text-[#8b572a]">⏰</span>{" "}
                13.00 WIB - Selesai
              </p>

              <p>
                <span className="font-bold text-[#8b572a]">📍</span>{" "}
                Mejelis Ta'lim Ar-Rifqi - Jl. Swadaya II, RT 04/19 Kel. Rangkapan Jaya, Kec. Pancoran
                Mas, Kota Depok
              </p>

              <p className="inline-block bg-[#fff4df]/80 px-3 py-1 rounded-full border border-[#ead2a6] text-[#8b572a] font-semibold">
                ✨ Dirumah Kami
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionCanvas>
  </motion.div>
)}

{/* COUNTDOWN SECTION */}
{activeSection === "countdown" && (
  <motion.div key="countdown" {...sectionSwitch}>
    <CountdownSection />
  </motion.div>
)}

      {/* MAPS SECTION */}
{activeSection === "maps" && (
  <motion.div key="maps" {...sectionSwitch}>
    <MapsSection />
  </motion.div>
)}

      {/* CORAL GALLERY SECTION */}
{activeSection === "gallery" && (
  <motion.div key="gallery" {...sectionSwitch}>
    <CoralGallery />
  </motion.div>
)}
</AnimatePresence>

    </div>
  );
}