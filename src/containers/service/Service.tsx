import { clientOnly } from "@solidjs/start";

const Award = clientOnly(() => import("lucide-solid/icons/award"));
const RefreshCcw = clientOnly(() => import("lucide-solid/icons/refresh-ccw"));
const ShieldCheck = clientOnly(() => import("lucide-solid/icons/shield-check"));
const AlarmClockCheck = clientOnly(() => import("lucide-solid/icons/alarm-clock-check"));

const Service = () => {
  return (
    <main id="service" class="flex flex-col gap-12 py-12">
      <Introduction />
      <div class="container">
        <Benefit />
      </div>
    </main>
  );
};

const Introduction = () => {
  const contents = [
    {
      icon: Award,
      title: "Đẳng cấp",
      description:
        "Chúng tôi cam kết mang đến những sản phẩm và dịch vụ chất lượng cao, trải nghiệm chuyên nghiệp, xứng tầm với cộng đồng doanh nhân và đối tác trong nước và toàn cầu.",
    },
    {
      icon: RefreshCcw,
      title: "Hiệu quả",
      description:
        "Tối ưu quy trình, tiết kiệm thời gian và chi phí, tập trung vào kết quả thực tế nhằm tạo ra giá trị bền vững cho khách hàng và doanh nghiệp.",
    },
    {
      icon: ShieldCheck,
      title: "An toàn",
      description:
        "Đặt yếu tố bảo mật, minh bạch và tuân thủ pháp luật lên hàng đầu, đảm bảo mọi hoạt động hợp tác và giao dịch đều đáng tin cậy.",
    },
    {
      icon: AlarmClockCheck,
      title: "Nhanh chóng",
      description:
        "Phản hồi kịp thời, xử lý linh hoạt và triển khai dịch vụ nhanh gọn để nắm bắt cơ hội kinh doanh trong môi trường luôn thay đổi.",
    },
  ];

  return (
    <div class="flex flex-col bg-primary py-8 text-white">
      <div class="container">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold">Dịch vụ và Kết nối</h1>
          <h3 class="text-lg font-medium">
            Bứt phá vị thế, Khai phóng hạ tầng đặc quyền
          </h3>
          <p>
            Vượt trên những kết nối thông thường, CEO Link mang đến một hệ sinh thái hạ
            tầng dịch vụ chuyên biệt, nơi mọi nhu cầu của nhà lãnh đạo được cá nhân hóa
            tuyệt đối qua đội ngũ trợ lý riêng 1-1. Từ mạng lưới giao thương toàn cầu đến
            các đặc quyền y tế, sân bay và tài chính VVIP, chúng tôi kiến tạo nền tảng để
            bạn làm chủ thời gian và tận hưởng cuộc sống xứng tầm.
          </p>
          <div class="grid grid-cols-4 gap-8">
            {contents.map((el) => {
              return (
                <div class="flex flex-col items-center gap-2 text-center">
                  <el.icon size={48} />
                  <h4 class="text-lg font-bold">{el.title}</h4>
                  <p>{el.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefit = () => {
  const contents = [
    {
      title: "Y tế (Trưởng / Phó khoa)",
      items: [
        ["Khám bệnh", "Ưu tiên", "Ưu tiên", "100% phí"],
        ["Chữa bệnh", "100% phí", "50% phí", "100% phí"],
        ["Cấp cứu", "100% phí", "50% phí", "100% phí"],
      ],
    },
    {
      title: "Sân bay",
      items: [
        ["An ninh", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Phòng chờ", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Đưa đón", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
    {
      title: "Tài chính\nNgân hàng - Kế toán",
      items: [
        ["Tiền gửi", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Tiền vay", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Thẻ tín dụng", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Khai báo Thuế", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Tính lương", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
    {
      title: "Mua sắm, thể thao, du lịch",
      items: [
        ["Siêu thị", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["TTTM", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Golf, Pickleball", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Khách sạn, nhà hàng", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
    {
      title: "Nhân sự",
      items: [
        ["Tư vấn pháp lý", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Hỗ trợ lao động", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
  ];

  return (
    <div class="flex flex-col justify-center gap-4 text-center">
      <h3 class="text-2xl font-bold">Quyền lợi chi tiết cho Hội viên CEO Link</h3>
      <p>
        Sự khác biệt giữa sở hữu và tận hưởng nằm ở những đặc quyền không dành cho số
        đông. Hãy cùng khám phá hệ thống quyền lợi được chuẩn hóa theo từng hạng cấp:
      </p>
      <div class="grid grid-cols-5 border-2 border-primary font-bold [&>div]:py-4">
        <div class="bg-primary text-white">Dịch vụ</div>
        <div class="bg-primary text-white">Hạng mục</div>
        <div class="bg-primary text-white">Gold</div>
        <div class="bg-primary text-white">Platinum</div>
        <div class="bg-primary text-white">Người thân</div>
        {contents.map((el, idx) => {
          return (
            <>
              {idx !== 0 && <div class="col-span-5 h-[2px] bg-primary !py-0" />}
              <div
                style={{
                  "grid-row": `span ${el.items.length}`,
                }}
                class="self-center"
              >
                {el.title}
              </div>
              {el.items.map((items) => {
                return (
                  <>
                    {items.map((el, idx) => {
                      return <div class={idx == 0 ? `col-start-2` : undefined}>{el}</div>;
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
