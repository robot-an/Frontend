import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  IconSatellite,
  IconActivity,
  IconSignal,
  IconMic,
  IconShieldAlert,
  IconWatch,
} from "./icons";

type Feature = {
  num: string;
  icon: ReactNode;
  title: string;
  description: string;
  tag?: string;
};

const FEATURES: Feature[] = [
  {
    num: "01",
    icon: <IconSatellite className="h-5 w-5 text-orange-600" />,
    title: "Định vị đa hệ vệ tinh + 4G LBS",
    description:
      "Kết hợp GPS, GLONASS, Galileo và BeiDou cùng trạm phát 4G (LBS), xác định vị trí chính xác kể cả trong nhà hay tầng hầm.",
  },
  {
    num: "02",
    icon: <IconActivity className="h-5 w-5 text-emerald-600" />,
    title: "Phát hiện té ngã AI thời gian thực",
    description:
      "Cảm biến quán tính IMU 6 trục liên tục phân tích gia tốc và góc nghiêng để nhận diện cú ngã tự do và va chạm tức thì.",
  },
  {
    num: "03",
    icon: <IconSignal className="h-5 w-5 text-orange-600" />,
    title: "Kết nối di động 4G độc lập",
    description:
      "Tích hợp module 4G LTE riêng biệt, Robot An hoạt động mọi nơi mà hoàn toàn không phụ thuộc vào mạng Wi-Fi nhà.",
    tag: "Độc lập",
  },
  {
    num: "04",
    icon: <IconShieldAlert className="h-5 w-5 text-emerald-600" />,
    title: "Cảnh báo khẩn cấp SOS một chạm",
    description:
      "Khi bấm nút hoặc phát hiện ngã, thiết bị tự động gửi tọa độ GPS và kích hoạt cuộc gọi thoại đến người thân ngay lập tức.",
  },
  {
    num: "05",
    icon: <IconMic className="h-5 w-5 text-orange-600" />,
    title: "Đàm thoại hai chiều & nhắc nhở",
    description:
      "Loa ngoài công suất lớn cùng micro lọc ồn giúp người thân gọi điện trực tiếp và cài đặt nhắc lịch uống thuốc mỗi ngày.",
  },
  {
    num: "06",
    icon: <IconWatch className="h-5 w-5 text-emerald-600" />,
    title: "Vùng an toàn Geofence chống đi lạc",
    description:
      "Cài đặt ranh giới quanh nhà hoặc bệnh viện. Ứng dụng lập tức cảnh báo nếu người thân đi lạc ra khỏi phạm vi quy định.",
    tag: "Chống lạc",
  },
];

export function Features() {
  return (
    <section id="features" className="snap-section border-t border-slate-100 bg-slate-50/50 pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-800">
            Tính năng cốt lõi
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Công nghệ thông minh bảo vệ từng giây phút
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Mỗi cảm biến và thuật toán trong Robot An được tinh chỉnh để mang lại sự an tâm tuyệt đối cho người thân.
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-orange-200 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 transition-colors group-hover:bg-orange-50 group-hover:border-orange-100">
                    {item.icon}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.tag && (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                        {item.tag}
                      </span>
                    )}
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>
                </div>

                <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-3.5 flex items-center gap-1.5 text-xs font-semibold text-orange-600">
                <span>Tìm hiểu chi tiết</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
