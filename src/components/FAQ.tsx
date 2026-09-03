import { motion } from "framer-motion";

const QA = [
  {
    q: "Robot An phát hiện té ngã như thế nào?",
    a: "Thiết bị dùng cảm biến IMU 6 trục lấy mẫu 200 lần/giây kết hợp AI nhận diện vector gia tốc. Hệ thống phân biệt rõ giữa ngồi xuống, nằm nghỉ và cú ngã tự do thực tế, giảm thiểu báo giả.",
  },
  {
    q: "Có cần kết nối Wi-Fi hay điện thoại không?",
    a: "Hoàn toàn không. Robot An tích hợp sẵn eSIM/SIM 4G LTE và anten GPS độc lập, tự động phủ sóng toàn quốc kể cả khi đi dạo công viên, siêu thị hay bệnh viện.",
  },
  {
    q: "Cảnh báo khẩn cấp gửi qua hình thức nào?",
    a: "Hệ thống kích hoạt 3 kênh đồng thời: (1) Tự động gọi thoại khẩn cấp, (2) Nhắn tin SMS đính kèm tọa độ vị trí Google Maps, (3) Thông báo đẩy tức thì đến ứng dụng gia đình.",
  },
  {
    q: "Người già hay quên có dùng được không?",
    a: "Thiết kế 'Zero-Touch' hoàn toàn tự động. Người thân chỉ cần sạc và đeo vào người, mọi thao tác theo dõi, nhận diện té ngã và gửi tín hiệu đều vận hành ngầm.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="snap-section border-t border-slate-100 bg-slate-50/50 pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-800">
            Giải đáp thắc mắc
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Những câu hỏi thường gặp về Robot An
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Mọi điều bạn cần biết trước khi sở hữu thiết bị bảo vệ người thân.
          </p>
        </motion.div>

        {/* 2x2 Clean Grid for Full Viewport fit */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {QA.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all hover:border-orange-200 hover:shadow-sm"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-bold mt-0.5">
                  ?
                </span>
                <span>{item.q}</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 pl-7.5">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
