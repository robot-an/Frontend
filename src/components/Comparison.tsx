import { motion } from "framer-motion";
import { IconCheck } from "./icons";

const ROWS = [
  {
    aspect: "Phát hiện té ngã",
    manual: "Phải tự bấm nút SOS (vô hiệu khi ngất hoặc chấn thương)",
    ours: "Tự động 100% qua AI & cảm biến IMU 6 trục đa hướng",
  },
  {
    aspect: "Định vị & Kết nối",
    manual: "Phụ thuộc Bluetooth hoặc Wi-Fi nhà trong phạm vi ngắn",
    ours: "Độc lập qua 4 hệ GNSS + mạng di động 4G LBS toàn quốc",
  },
  {
    aspect: "Tốc độ báo động",
    manual: "Chậm, phụ thuộc vào việc người xung quanh tự phát hiện",
    ours: "< 3 giây: tự động gọi điện thoại & nhắn tin tọa độ tới gia đình",
  },
  {
    aspect: "Thao tác sử dụng",
    manual: "Giao diện cảm ứng phức tạp, dễ bấm nhầm với người lớn tuổi",
    ours: "Zero-touch: tự động hoạt động ngầm, không cần thao tác nút bấm",
  },
  {
    aspect: "Thời lượng pin",
    manual: "Phải sạc mỗi ngày (12 - 24 giờ), dễ quên sạc dẫn đến mất kết nối",
    ours: "Tối ưu năng lượng: sử dụng bền bỉ từ 3 đến 5 ngày cho 1 lần sạc",
  },
];

export function Comparison() {
  return (
    <section id="so-sanh" className="snap-section border-t border-slate-100 bg-slate-50/60 pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-800">
            Khác biệt vượt trội
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Sự khác biệt khi có Robot An bên cạnh
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Giải pháp phòng vệ chủ động, tự động bảo vệ người thân mà không đòi hỏi thao tác.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th scope="col" className="py-3 px-5 font-bold text-slate-900 w-1/4">
                    Khía cạnh đánh giá
                  </th>
                  <th scope="col" className="py-3 px-5 font-bold text-slate-500 w-3/8">
                    Thiết bị đeo / Điện thoại thường
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-5 font-bold text-orange-700 bg-orange-50/70 border-l border-orange-100 w-3/8"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-orange-500" />
                      Giải pháp Robot An (AI IMU + 4G)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ROWS.map((row) => (
                  <tr
                    key={row.aspect}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <th
                      scope="row"
                      className="py-2.5 px-5 font-semibold text-slate-900 align-middle"
                    >
                      {row.aspect}
                    </th>
                    <td className="py-2.5 px-5 text-slate-600 align-middle">
                      {row.manual}
                    </td>
                    <td className="py-2.5 px-5 font-medium text-slate-900 bg-orange-50/30 border-l border-orange-100/60 align-middle">
                      <div className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{row.ours}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
