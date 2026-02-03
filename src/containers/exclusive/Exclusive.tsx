const Exclusive = () => {
  const features = [
    {
      title: "Khả năng tiếp cận",
      description:
        "Kết nối trực tiếp với mạng lưới doanh nghiệp chất lượng cao đã qua kiểm định và định danh uy tín",
    },
    {
      title: "Hạ tầng ưu tiên",
      description:
        "Loại bỏ sự chờ đợi với đặc quyền Fast-track sân bay, phòng chờ thương gia và hệ thống y tế VVIP phục vụ 24/7",
    },
    {
      title: "Đòn bẩy giao thương",
      description:
        "Xúc tiến thương mại chuyên sâu, hỗ trợ toàn diện về tài chính, pháp lý và nhân sự để doanh nghiệp sẵn sàng vươn tầm quốc tế",
    },
    {
      title: "Sự bảo mật tuyệt đối",
      description:
        "Vận hành trên nền tảng số hiện đại, đảm bảo mọi kết nối và dữ liệu của nhà lãnh đạo được bảo vệ bởi cơ chế ẩn danh chuyên nghiệp",
    },
  ];

  return (
    <div id="exclusive" class="container flex flex-col gap-8 py-8">
      <div class="mx-auto flex max-w-[70%] flex-col items-center gap-2">
        <h3 class="text-2xl font-bold">Vị thế của bạn, lựa chọn của bạn</h3>
        <p class="text-center">
          Mỗi hạng thẻ tại CEO Link không chỉ đại diện cho một danh xưng, mà là bộ công cụ
          hỗ trợ bạn tối ưu hóa quỹ thời gian và mở rộng tầm ảnh hưởng trong một hệ sinh
          thái kinh doanh riêng tư. Nền tảng tập trung vào việc chuyển hóa các đặc quyền
          thành lợi thế cạnh tranh thực chất thông qua các trụ cột:
        </p>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-4">
          <img src="/images/service-1.png" class="aspect-square" />
        </div>
        <div class="flex flex-col gap-4">
          {features.map((el) => {
            return (
              <div class="flex flex-col gap-2">
                <h4 class="font-semibold">{el.title}</h4>
                <p>{el.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <FeatureList />

      <div>
        <h3>Quyết định hôm nay, vị thế mai sau</h3>
        <p>
          CEO Link được xây dựng để trở thành "điểm tựa" vững chắc, giúp nhà lãnh đạo mua
          lại thời gian và mở khóa những cánh cửa giao thương tiềm năng nhất. Dành 2 phút
          để lựa chọn lộ trình phù hợp và bắt đầu trải nghiệm hệ sinh thái kinh doanh
          riêng tư của chúng tôi.
        </p>
      </div>
    </div>
  );
};

const FeatureList = () => {
  const features = [
    {
      title: "Hồ sơ doanh nghiệp",
      tiers: [
        {
          label: "Cơ bản",
          isIncluded: true,
        },
        {
          label: "Xác thực",
          isIncluded: true,
        },
        {
          label: "Định danh cao cấp",
          isIncluded: true,
        },
      ],
    },
    {
      title: "Đăng nhu cầu hợp tác",
      tiers: [
        {
          label: "Hạn chế",
          isIncluded: true,
        },
        {
          label: "Ưu tiên hiển thị",
          isIncluded: true,
        },
        {
          label: "Toàn quyền & Khẩn cấp",
          isIncluded: true,
        },
      ],
    },
    {
      title: "Hiển thị ưu tiên",
      tiers: [
        {
          label: "Không có",
          isIncluded: false,
        },
        {
          label: "Top List ngành nghề",
          isIncluded: true,
        },
        {
          label: "Vị trí độc quyền",
          isIncluded: true,
        },
      ],
    },
    {
      title: "Xúc tiến thương mại",
      tiers: [
        {
          label: "Cơ bản",
          isIncluded: true,
        },
        {
          label: "Trong nước",
          isIncluded: true,
        },
        {
          label: "Toàn cầu",
          isIncluded: true,
        },
      ],
    },
    {
      title: "Hệ thống Referral",
      tiers: [
        {
          label: "",
          isIncluded: false,
        },
        {
          label: "",
          isIncluded: true,
        },
        {
          label: "Đặc quyền giới thiệu VIP",
          isIncluded: true,
        },
      ],
    },
    {
      title: "Hỗ trợ chuyên sâu",
      tiers: [
        {
          label: "Ticket/Email",
          isIncluded: true,
        },
        {
          label: "Hotline 24/7",
          isIncluded: true,
        },
        {
          label: "Trợ lý riêng",
          isIncluded: true,
        },
      ],
    },
    {
      title: "Hỗ tầng ưu tiên",
      tiers: [
        {
          label: "",
          isIncluded: false,
        },
        {
          label: "Tiêu chuẩn",
          isIncluded: true,
        },
        {
          label: "Đặc quyền VVIP",
          isIncluded: true,
        },
      ],
    },
    {
      title: "Kết nối AI Matching",
      tiers: [
        {
          label: "",
          isIncluded: false,
        },
        {
          label: "Cơ bản",
          isIncluded: true,
        },
        {
          label: "Độc quyền Matching Big Boss",
          isIncluded: true,
        },
      ],
    },
  ];

  return (
    <div class="flex flex-col gap-4">
      <div class="mx-auto flex max-w-[70%] flex-col items-center gap-2">
        <h3 class="text-2xl font-bold">Đặc quyền dành cho Hội viên CEO Link</h3>
        <p class="text-center">
          Mỗi hạng thẻ tại CEO Link không chỉ đại diện cho một danh xưng, mà là bộ công cụ
          hỗ trợ bạn tối ưu hóa quỹ thời gian và mở rộng tầm ảnh hưởng trong một hệ sinh
          thái kinh doanh riêng tư. Nền tảng tập trung vào việc chuyển hóa các đặc quyền
          thành lợi thế cạnh tranh thực chất thông qua các trụ cột:
        </p>
      </div>
      <div class="grid grid-cols-4 border border-primary">
        <div class="flex items-center justify-center bg-primary p-8 font-bold text-white">
          Danh mục so sánh
        </div>
        <div class="flex items-center justify-center border-l bg-primary p-8 font-bold text-white">
          Thành viên (FREE)
        </div>
        <div class="flex items-center justify-center border-l bg-primary p-8 font-bold text-white">
          Hội viên GOLD
        </div>
        <div class="flex items-center justify-center border-l bg-primary p-8 font-bold text-white">
          Hội viên PLATINUM
        </div>
        {features.map((el, idx) => {
          return (
            <>
              <div class="flex items-center justify-center border-t border-primary p-8 font-semibold">
                {el.title}
              </div>
              {el.tiers.map((tier) => {
                return (
                  <div class="flex items-center justify-center border-l border-t border-primary p-8">
                    {tier.isIncluded ? "✓ " + tier.label : "—"}
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Exclusive;
