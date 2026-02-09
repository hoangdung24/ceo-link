import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";

import { routes } from "~/config/routes";
import { Button } from "~/components/ui/button";

const CircleX = clientOnly(() => import("lucide-solid/icons/circle-x"));
const CircleCheck = clientOnly(() => import("lucide-solid/icons/circle-check"));

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
    <main id="exclusive">
      <Hero />

      <div class="container flex flex-col gap-12 py-12">
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

        <div class="mx-auto flex max-w-[70%] flex-col items-center gap-2">
          <h3 class="text-2xl font-bold">Quyết định hôm nay, vị thế mai sau</h3>
          <p class="text-center">
            CEO Link được xây dựng để trở thành "điểm tựa" vững chắc, giúp nhà lãnh đạo
            mua lại thời gian và mở khóa những cánh cửa giao thương tiềm năng nhất. Dành 2
            phút để lựa chọn lộ trình phù hợp và bắt đầu trải nghiệm hệ sinh thái kinh
            doanh riêng tư của chúng tôi.
          </p>
        </div>
      </div>
    </main>
  );
};

const Hero = () => {
  return (
    <section id="hero" class="relative h-96 overflow-hidden">
      <div class="h-96 w-full bg-[url(/images/exclusive-banner.png)] bg-cover bg-center" />
      <div class="absolute inset-0 bg-primary/50" />
      <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <div class="container">
          <div class="mx-auto flex max-w-[70%] flex-col items-center gap-2 text-white">
            <h3 class="text-2xl font-bold">Vị thế của bạn, lựa chọn của bạn</h3>
            <p class="text-center">
              Mỗi hạng thẻ tại CEO Link không chỉ đại diện cho một danh xưng, mà là bộ
              công cụ hỗ trợ bạn tối ưu hóa quỹ thời gian và mở rộng tầm ảnh hưởng trong
              một hệ sinh thái kinh doanh riêng tư. Nền tảng tập trung vào việc chuyển hóa
              các đặc quyền thành lợi thế cạnh tranh thực chất thông qua các trụ cột:
            </p>
          </div>
        </div>
      </div>
    </section>
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
          label: "",
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
        <div class="bg-primary p-8 font-bold text-white">Danh mục so sánh</div>
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
              <div class="border-t border-primary p-8 font-semibold">{el.title}</div>
              {el.tiers.map((tier, idx, arr) => {
                return (
                  <div class="flex flex-col items-center justify-center gap-1 border-l border-t border-primary p-8">
                    {tier.isIncluded ? (
                      <CircleCheck size={48} class="fill-green-500 stroke-white" />
                    ) : (
                      <CircleX size={48} class="fill-red-500 stroke-white" />
                    )}
                    <span class={idx === arr.length - 1 ? "font-bold" : undefined}>
                      {tier.label}
                    </span>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>

      <div class="grid grid-cols-4">
        <div class="col-start-3 col-end-4 px-1">
          <Button class="w-full bg-primary/75">
            <A href={routes.registerMember.href}>Trở thành hội viên Gold</A>
          </Button>
        </div>
        <div class="col-start-4 col-end-5 px-1">
          <Button class="w-full">
            <A href={routes.registerMember.href}>Trở thành hội viên Platinum</A>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
