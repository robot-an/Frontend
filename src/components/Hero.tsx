import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBattery,
  IconSignal,
  IconShieldAlert,
  IconBellRing,
  IconSatellite,
  IconCheck,
  IconActivity,
} from "./icons";
import { revealTransition } from "../lib/intro";

const STATS = [
  {
    label: "Hệ vệ tinh GNSS",
    value: "4",
    unit: "hệ",
    subtext: "GPS · BDS · GLO · GAL",
  },
  {
    label: "Phản ứng khẩn cấp",
    value: "<3s",
    unit: "",
    subtext: "Tự động gọi đa kênh",
  },
  {
    label: "Giám sát liên tục",
    value: "24/7",
    unit: "",
    subtext: "Pin bền bỉ đến 5 ngày",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="snap-section bg-white pt-16 pb-6 sm:pt-20 sm:pb-8"
    >
      {/* Ambient background glows */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-[8%] top-[-5%] -z-10 h-[500px] w-[700px] rounded-full bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-5%] left-[-5%] -z-10 h-[280px] w-[280px] rounded-full bg-emerald-100/30 blur-[90px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Branding & Value Proposition */}
          <div className="lg:col-span-7">
            {/* Super Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition(0)}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50/90 px-3.5 py-1 shadow-xs backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-900">
                Robot An · Thế Hệ Mới 2026
              </span>
              <span className="h-3 w-px bg-orange-200" />
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600">
                Định vị 4G GPS + AI IMU
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition(1)}
              className="tracking-tight text-slate-950 font-display"
            >
              <span className="block text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.08]">
                Robot <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">An</span>
              </span>
              <span className="mt-1 block text-xl sm:text-2xl lg:text-[2rem] font-bold text-slate-800 leading-snug">
                Bảo vệ & đồng hành cùng người thân 24/7.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition(2)}
              className="mt-3.5 max-w-xl text-balance text-sm leading-relaxed text-slate-600 sm:text-base font-normal"
            >
              Thiết bị thông minh kết hợp cảm biến quán tính IMU 6 trục và định vị vệ tinh độc lập — tự động phát hiện té ngã, cảnh báo tức thì và liên hệ đa kênh tới gia đình trong tích tắc dưới 3 giây.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition(3)}
              className="mt-5 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#cta"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-600/25 transition-all duration-200 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Đặt hàng trước</span>
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-xs backdrop-blur transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <span>Xem cách hoạt động</span>
                <IconArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-700" />
              </a>
            </motion.div>

            {/* Trust Assurance Micro Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition(3.5)}
              className="mt-3.5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600"
            >
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/90 px-2.5 py-1 text-slate-700 font-medium">
                <IconCheck className="h-3.5 w-3.5 text-emerald-600" />
                Kiểm nghiệm &gt; 10,000h
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/90 px-2.5 py-1 text-slate-700 font-medium">
                <IconCheck className="h-3.5 w-3.5 text-emerald-600" />
                Độc lập không cần Wi-Fi
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/90 px-2.5 py-1 text-slate-700 font-medium">
                <IconCheck className="h-3.5 w-3.5 text-emerald-600" />
                Bảo hành 1 đổi 1 trong 12 tháng
              </span>
            </motion.div>

            {/* Key Metric Stat Cards */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition(4)}
              className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-4 sm:gap-3.5 max-w-xl"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-xs transition-all hover:border-orange-200 hover:bg-white"
                >
                  <dt className="text-[11px] font-medium text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {stat.value}
                    {stat.unit && (
                      <span className="ml-1 text-xs font-normal text-slate-500">
                        {stat.unit}
                      </span>
                    )}
                  </dd>
                  <p className="mt-0.5 text-[10px] font-semibold text-orange-600">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right Column: Friendly Robot An Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={revealTransition(2, 0.1)}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]">
              {/* Soft ambient warm glow behind the mascot */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-orange-200/50 via-amber-100/40 to-emerald-100/30 blur-3xl" />

              {/* Bot Mascot Card Container */}
              <div className="group relative overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-white/95 p-3.5 shadow-xl shadow-orange-950/5 ring-1 ring-black/[0.03] backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Image Frame */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-amber-50/40 to-orange-50/20 border border-slate-100">
                  <img
                    src="/logo-ant.jpg"
                    alt="Robot An - Người bạn đồng hành bảo vệ người thân"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Top Status Strip over image */}
                  <div className="absolute inset-x-2.5 top-2.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-slate-800 shadow-sm backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      TRỰC TUYẾN
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur-md">
                      <IconBattery className="h-3 w-3 text-emerald-600" />
                      98%
                    </span>
                  </div>
                </div>

                {/* Micro Telemetry Bar below image */}
                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-2.5">
                  <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50/80 p-1.5 text-center">
                    <span className="text-[9px] font-medium text-slate-500">KẾT NỐI</span>
                    <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                      <IconSignal className="h-3 w-3 text-emerald-600" /> 4G LTE
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50/80 p-1.5 text-center">
                    <span className="text-[9px] font-medium text-slate-500">ĐỊNH VỊ</span>
                    <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                      <IconSatellite className="h-3 w-3 text-orange-600" /> 4 Vệ Tinh
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50/80 p-1.5 text-center">
                    <span className="text-[9px] font-medium text-slate-500">CẢM BIẾN</span>
                    <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                      <IconActivity className="h-3 w-3 text-emerald-600" /> IMU 6-Trục
                    </span>
                  </div>
                </div>

                {/* Floating Feature Card 1: AI Fall-Detection (Top Left Flank) */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={revealTransition(3.8)}
                  className="animate-float absolute -left-3 top-6 sm:-left-5 sm:top-8 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-emerald-200/90 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <IconShieldAlert className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-[11px] font-bold text-slate-900">AI Fall-Sense</p>
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <p className="text-[9px] text-slate-500">Nhận diện ngã 0.2s</p>
                  </div>
                </motion.div>

                {/* Floating Feature Card 2: SOS Emergency (Bottom Right Flank) */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={revealTransition(4.2)}
                  className="animate-float absolute -right-3 bottom-12 sm:-right-5 sm:bottom-14 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-orange-200/90 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md [animation-delay:2s]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <IconBellRing className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-[11px] font-bold text-slate-900">SOS Khẩn Cấp</p>
                      <span className="rounded bg-orange-100 px-1 py-0.2 text-[8px] font-bold text-orange-700">&lt;3s</span>
                    </div>
                    <p className="text-[9px] text-slate-500">Tự động gọi gia đình</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
