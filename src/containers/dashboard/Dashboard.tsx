import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Button } from "~/components/ui/button";
import { ChartData, PieChart } from "~/components/ui/charts";
import { Progress } from "~/components/ui/progress";
import { routes } from "~/config/routes";

const Check = clientOnly(() => import("lucide-solid/icons/check"));
const CircleCheck = clientOnly(() => import("lucide-solid/icons/circle-check"));

const Dashboard = () => {
  return (
    <main id="dashboard" class="container flex flex-col gap-12 py-12">
      <UserStatus />
      <ControlPanel />
      <CollaborationStatus />
      <PotentialPartner />
    </main>
  );
};

const UserStatus = () => {
  return (
    <div class="flex flex-col gap-8">
      <h3 class="text-center text-2xl font-bold">
        Chào [Tên CEO], chúc bạn một ngày làm việc hiệu quả
      </h3>
      <div class="flex flex-col gap-4">
        <p>
          <span class="font-bold">Trạng thái tài khoản:</span> Thành viên
        </p>
        <p>
          <span class="font-bold">Mức độ hoàn thiện hồ sơ:</span> 65%
        </p>
      </div>
      <Progress value={65} minValue={0} maxValue={100} size="xl" />
      <p class="text-center italic">
        Một hồ sơ được xác thực đầy đủ giúp anh/chị kết nối đúng người, đúng nhu cầu và
        đúng thời điểm
      </p>
      <div class="flex flex-col gap-4 bg-gray-100 p-8">
        <p class="text-center italic">
          Đừng chỉ quan sát, hãy bắt đầu tận hưởng hạ tầng ưu tiên dành cho nhà lãnh đạo
          dẫn đầu. Khám phá đặc quyền Gold & Platinum để làm chủ thời gian với lối đi
          riêng tại sân bay, y tế VVIP và những kết nối thương vụ kín được bảo mật tuyệt
          đối.
        </p>
        <Button class="self-center px-16 uppercase">
          <A href={routes.registerMember.href}>Nâng cấp hội viên ngay</A>
        </Button>
      </div>
    </div>
  );
};

const ControlPanel = () => {
  return (
    <div class="flex flex-col gap-8">
      <h3 class="text-center text-2xl font-bold">
        Chào [Tên CEO] trở lại không gian điều hành riêng tư
      </h3>
      <div class="self-end">
        <Button class="px-8 uppercase">Liên hệ trợ lý riêng</Button>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-1">
          <span class="font-bold">Trạng thái tài khoản:</span> Hội viên Gold Link
          <CircleCheck class="stroke-green-500" />
        </div>
        <A
          href="/"
          class="self-start text-sm font-bold italic text-blue-700 underline-offset-4 hover:underline"
        >
          Cập nhật hồ sơ năng lực
        </A>
      </div>
      <Overview />
    </div>
  );
};

function Overview() {
  const chartData: ChartData = {
    labels: ["Đang chờ xử lý", "Đang kết nối", "Đã hoàn thành"],
    datasets: [
      {
        data: [10, 4, 2],
        backgroundColor: ["#0ea5e9", "#7dd3fc", "#0369a1"],
      },
    ],
  };

  const legends = [
    {
      label: "Đang chờ xử lý",
      value: 10,
      color: "bg-sky-500",
    },
    {
      label: "Đang kết nối",
      value: 4,
      color: "bg-sky-300",
    },
    {
      label: "Đã hoàn thành",
      value: 2,
      color: "bg-sky-700",
    },
  ];

  return (
    <div class="grid grid-cols-2 gap-8 border-2 border-primary p-8">
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-bold">Tổng quan</h3>
        <p class="font-bold">
          Lượt xem hồ sơ DN: <span class="text-lg">12</span>
        </p>
        <p class="font-bold">
          Số lượt kết nối tiềm năng: <span class="text-lg">23</span>
        </p>
        <div class="flex flex-col gap-2">
          <h6 class="font-bold">Trạng thái nhu cầu hợp tác:</h6>

          {legends.map((el) => {
            return (
              <div class="flex items-center gap-2">
                <div class={`h-8 w-16 ${el.color}`}></div>
                <span>{el.label}:</span> <span class="text-lg font-bold">{el.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div class="h-72">
        <PieChart data={chartData} />
      </div>
    </div>
  );
}

const CollaborationStatus = () => {
  const contents = [
    {
      label: "Đang chờ xử lý",
      color: "bg-yellow-500",
      contents: [
        {
          title: "Nội dung",
          description: "Tìm đối tác cung ứng bao bì tiêu chuẩn ISO.",
        },
        {
          title: "Tình trạng xử lý",
          description:
            "Admin đang thực hiện kiểm tra thực địa doanh nghiệp đối tác để đảm bảo tính xác thực.",
        },
      ],
    },
    {
      label: "Đang kết nối",
      color: "bg-sky-500",
      contents: [
        {
          title: "Nội dung",
          description: "Kêu gọi đầu tư Series A - Dự án Năng lượng Xanh.",
        },
        {
          title: "Tình trạng xử lý",
          description: "Trợ lý riêng đang điều phối lịch gặp mặt 1-1.",
        },
      ],
    },
    {
      label: "Đã hoàn thành",
      color: "bg-green-500",
      contents: [
        {
          title: "Nội dung",
          description: "Hợp tác phân phối độc quyền tại thị trường Trung Quốc.",
        },
        {
          title: "Tình trạng xử lý",
          description:
            "MOU đã được ký kết thành công thông qua hỗ trợ pháp lý của CEO Link.",
        },
      ],
    },
  ];

  return (
    <div class="flex flex-col gap-8">
      <h3 class="text-2xl font-bold">Trạng thái nhu cầu hợp tác</h3>
      {contents.map((el) => {
        return (
          <div class="flex flex-col gap-4 border-2 border-primary p-8">
            <div class="flex items-center gap-2">
              <div class={`size-6 rounded-full ${el.color}`}></div>
              <h4 class="text-lg font-bold">{el.label}</h4>
            </div>
            <div class="flex flex-col gap-1">
              {el.contents.map((el) => {
                return (
                  <p>
                    <span class="font-bold">{el.title}:</span> {el.description}
                  </p>
                );
              })}
            </div>
            <Button class="self-center italic underline" variant="link">
              Xem thêm
            </Button>
          </div>
        );
      })}
    </div>
  );
};

const PotentialPartner = () => {
  const contents = [
    {
      title: "CHỦ TỊCH TẬP ĐOÀN ĐIỆN TỬ (FDI - HÀN QUỐC)",
      items: [
        {
          title: "Độ tương thích (AI Match)",
          description: "98%",
        },
        {
          title: "Năng lực cốt lõi",
          description: "Chuỗi nhà máy sản xuất linh kiện quy mô toàn cầu.",
        },
        {
          title: "Nhu cầu hiện tại.",
          description:
            "Tìm kiếm các nhà thầu hạ tầng công nghiệp và đơn vị Logistics đạt chuẩn tại Việt Nam.",
        },
      ],
      actions: [
        {
          title: "Xem hồ sơ năng lực",
          href: "/",
        },
        {
          title: "Gửi yêu cầu kết nối",
          href: "/",
        },
      ],
      exclusiveAction: {
        title: "Yêu cầu trợ lý thiết lập cuộc hẹn",
        href: "/",
      },
    },
    {
      title: "CHỦ TỊCH TẬP ĐOÀN ĐIỆN TỬ (FDI - HÀN QUỐC)",
      items: [
        {
          title: "Độ tương thích (AI Match)",
          description: "98%",
        },
        {
          title: "Năng lực cốt lõi",
          description: "Chuỗi nhà máy sản xuất linh kiện quy mô toàn cầu.",
        },
        {
          title: "Nhu cầu hiện tại.",
          description:
            "Tìm kiếm các nhà thầu hạ tầng công nghiệp và đơn vị Logistics đạt chuẩn tại Việt Nam.",
        },
      ],
      actions: [
        {
          title: "Xem hồ sơ năng lực",
          href: "/",
        },
        {
          title: "Gửi yêu cầu kết nối",
          href: "/",
        },
      ],
      exclusiveAction: {
        title: "Yêu cầu trợ lý thiết lập cuộc hẹn",
        href: "/",
      },
    },
  ];

  return (
    <div class="flex flex-col gap-4">
      <h3 class="text-2xl font-bold">Đối tác tiềm năng cho bạn</h3>
      <p>
        Dựa trên mục tiêu kinh doanh của bạn, AI và đội ngũ cố vấn đã tinh tuyển những đối
        tác tiềm năng nhất trong tuần này:
      </p>
      <div class="grid grid-cols-2 gap-4">
        {contents.map((el) => {
          return (
            <div class="flex flex-col gap-4 border-2 border-primary p-4">
              <div class="flex items-center justify-between gap-4">
                <h4 class="font-bold uppercase">{el.title}</h4>
                <CircleCheck size={36} class="stroke-yellow-400" />
              </div>
              <div class="flex flex-col gap-1">
                {el.items.map((el) => {
                  return (
                    <p>
                      <span class="font-bold">{el.title}:</span> {el.description}
                    </p>
                  );
                })}
              </div>
              <div class="flex gap-2">
                {el.actions.map((el) => {
                  return <Button class="flex-1 bg-primary/75">{el.title}</Button>;
                })}
              </div>
              <Button>{el.exclusiveAction.title}</Button>
            </div>
          );
        })}
      </div>
      <Button variant="link" class="self-center font-bold italic underline">
        Xem thêm
      </Button>
    </div>
  );
};

export default Dashboard;
