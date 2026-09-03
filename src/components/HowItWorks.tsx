import { motion } from "framer-motion";
import { IconWatch, IconRoute, IconBellRing, IconMapPin } from "./icons";

const STEPS = [
  {
    step: "01",
    phase: "Khởi động",
    icon: <IconWatch className="h-5 w-5 text-orange-600" />,
    title: "Đeo hoặc mang theo",
    description:
      "Thiết kế nhỏ gọn 58g, người cao tuổi đeo cổ, đeo tay hoặc để túi áo nhẹ nhàng, không gây vướng víu.",
  },
  {
    step: "02",
    phase: "Giám sát ngầm",
    icon: <IconRoute className="h-5 w-5 text-emerald-600" />,
    title: "Theo dõi chuyển động 24/7",
    description:
      "Cảm biến IMU và module 4G liên tục đo đạc gia tốc, tư thế và vị trí địa lý theo chu kỳ tiết kiệm pin.",
  },
  {
    step: "03",
    phase: "Trí tuệ nhân tạo",
    icon: <IconBellRing className="h-5 w-5 text-orange-600" />,
    title: "Tự động phát hiện ngã",
    description:
      "Khi có va đập hoặc ngã đột ngột, thuật toán AI lập tức phân tích xung lực và kích hoạt chuông báo kiểm tra.",
  },
  {
    step: "04",
    phase: "Cứu trợ tức thì",
    icon: <IconMapPin className="h-5 w-5 text-emerald-600" />,
    title: "Cảnh báo gia đình <3s",
    description:
      "Hệ thống gửi ngay tọa độ GPS chính xác và tự động gọi điện thoại khẩn cấp đến tối đa 3 người thân.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="snap-section border-t border-slate-100 bg-white pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
            Quy trình vận hành
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Từ cảm biến đến cảnh báo chỉ trong 3 giây
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Quy trình bảo vệ tự động 100%, không yêu cầu người già phải thao tác phức tạp khi gặp sự cố.
          </p>
        </motion.div>

        {/* 4 Steps Timeline Grid */}
        <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Horizontal Connecting Line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-slate-200 lg:block" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-2xs transition-all duration-300 hover:border-orange-200 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  {step.icon}
                </span>
                <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[11px] font-bold text-slate-700">
                  BƯỚC {step.step}
                </span>
              </div>

              <div className="mt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                  {step.phase}
                </span>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
