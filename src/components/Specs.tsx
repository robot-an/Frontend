import { motion } from "framer-motion";
import {
  IconCpu,
  IconSatellite,
  IconActivity,
  IconSpeaker,
  IconSignal,
  IconBattery,
  IconWatch,
} from "./icons";

const SPECS = [
  {
    icon: <IconCpu className="h-4.5 w-4.5 text-orange-600" />,
    label: "Vi xử lý trung tâm",
    value: "ESP32 Dual-Core 240 MHz",
    detail: "Xử lý cảm biến nội suy tại biên (Edge AI)",
  },
  {
    icon: <IconSatellite className="h-4.5 w-4.5 text-orange-600" />,
    label: "Hệ thống định vị",
    value: "GPS / GLONASS / BeiDou / Galileo",
    detail: "Sai số cực thấp ±1.2m ngoài trời",
  },
  {
    icon: <IconActivity className="h-4.5 w-4.5 text-emerald-600" />,
    label: "Cảm biến quán tính",
    value: "IMU 6 trục (Gia tốc + Con quay)",
    detail: "Lấy mẫu 200 Hz nhận diện ngã chuẩn 99.4%",
  },
  {
    icon: <IconSignal className="h-4.5 w-4.5 text-orange-600" />,
    label: "Kết nối di động",
    value: "4G LTE Cat-1 + Trạm LBS",
    detail: "Phủ sóng toàn quốc, độc lập 100%",
  },
  {
    icon: <IconBattery className="h-4.5 w-4.5 text-emerald-600" />,
    label: "Dung lượng pin",
    value: "Li-Po 1200 mAh tối ưu",
    detail: "Hoạt động liên tục 3 - 5 ngày / lần sạc",
  },
  {
    icon: <IconSpeaker className="h-4.5 w-4.5 text-orange-600" />,
    label: "Hệ thống âm thanh",
    value: "Micro lọc ồn + Loa khuếch đại",
    detail: "Đàm thoại 2 chiều và còi báo động SOS",
  },
  {
    icon: <IconWatch className="h-4.5 w-4.5 text-emerald-600" />,
    label: "Chống nước & Bụi",
    value: "Chuẩn kháng nước IP67",
    detail: "An toàn khi đi mưa nhẹ hoặc rửa tay",
  },
  {
    icon: <IconCpu className="h-4.5 w-4.5 text-orange-600" />,
    label: "Cập nhật phần mềm",
    value: "Nâng cấp tự động OTA qua 4G",
    detail: "Liên tục tối ưu thuật toán AI từ xa",
  },
];

export function Specs() {
  return (
    <section id="specs" className="snap-section border-t border-slate-100 bg-white pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-800">
            Cấu hình phần cứng
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Thông số kỹ thuật chuẩn công nghiệp
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Chế tác từ linh kiện y tế & viễn thông bền bỉ, trọng lượng siêu nhẹ chỉ 58g.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5">
          {SPECS.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 p-3.5 shadow-2xs transition-all hover:border-orange-200 hover:bg-white hover:shadow-sm"
            >
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200/70 shadow-2xs">
                  {spec.icon}
                </span>
                <p className="mt-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {spec.label}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {spec.value}
                </p>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-500 border-t border-slate-200/50 pt-2">
                {spec.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
