import { motion } from "framer-motion";
import { IconArrowRight, IconCheck } from "./icons";

const POINTS = [
  "Tự động nhận diện té ngã theo thời gian thực",
  "Định vị 4G GPS hoạt động độc lập toàn quốc",
  "Bảo hành chính hãng 12 tháng 1 đổi 1",
];

export function CTA() {
  return (
    <section
      id="cta"
      className="snap-section border-t border-slate-100 bg-white pt-16 pb-4 sm:pt-20 sm:pb-6 flex flex-col justify-between"
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 px-6 py-10 sm:px-12 sm:py-12 text-center shadow-xl shadow-orange-600/20"
        >
          {/* Ambient Lighting & Pattern */}
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.08] invert" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-[100px]" />

          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Bảo vệ người thân ngay hôm nay
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            An tâm trọn vẹn mỗi ngày cho những người bạn thương yêu nhất
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-balance text-xs sm:text-sm text-orange-100">
            Đừng để sự cố té ngã hay đi lạc làm gián đoạn hạnh phúc gia đình. Đặt hàng trước Robot An để nhận ưu đãi bảo trợ sớm và hỗ trợ cài đặt tận nhà.
          </p>

          <div className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {POINTS.map((point) => (
              <div key={point} className="flex items-center gap-1.5 text-xs font-medium text-orange-50">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-white">
                  <IconCheck className="h-3 w-3" />
                </span>
                {point}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-orange-600 shadow-lg transition-all duration-200 hover:bg-orange-50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Đặt hàng trước ngay</span>
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
            >
              Liên hệ tư vấn chi tiết
            </a>
          </div>
        </motion.div>
      </div>

      {/* Embedded Compact Footer at bottom of final slide */}
      <footer className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 pt-4 pb-2 text-xs text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-ant.jpg" alt="Robot An" className="h-5 w-5 rounded object-cover" />
            <span className="font-bold text-slate-800">Robot An</span>
            <span>— Thiết bị bảo vệ người thân công nghệ cao</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#top" className="hover:text-slate-900 transition-colors">Về đầu trang ↑</a>
            <span>•</span>
            <span>Bảo hành 1 đổi 1 trong 12 tháng</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} Robot An</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
