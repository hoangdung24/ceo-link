import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Button } from "~/components/ui/button";
import { routes } from "~/config/routes";

const User = clientOnly(() => import("lucide-solid/icons/user"));

const HonorCouncil = () => {
  return (
    <main id="honor-council" class="flex flex-col gap-12 py-12">
      <div class="container flex flex-col gap-12">
        <div class="mx-auto flex max-w-[70%] flex-col items-center gap-4">
          <h3 class="text-bold text-2xl font-bold uppercase">Hội đồng Danh dự</h3>
          <p class="text-center">
            Tại CEO Link, sức mạnh của mạng lưới được xây dựng từ sự cộng hưởng của những
            tầm nhìn lớn. Hội đồng Danh dự là nơi hội tụ của các nhà hoạch định chính
            sách, cựu chính khách và những nhà sáng lập uy tín. Bằng kinh nghiệm quản trị
            thực tiễn và sự thấu hiểu sâu sắc về dòng chảy kinh tế, họ mang đến sự bảo
            chứng về uy tín và điểm tựa tri thức, giúp cộng đồng lãnh đạo vững vàng bứt
            phá trong mọi giai đoạn phát triển.
          </p>
        </div>
        <PolicyAdvisor />
        <Diplomat />
        <Founder />
      </div>
      <div class="bg-primary py-8 text-white">
        <div class="container flex flex-col items-center gap-4">
          <h3 class="text-2xl font-bold">Đồng hành cùng những tầm nhìn dẫn đầu</h3>
          <p>
            Nâng tầm mạng lưới quan hệ và khai phóng những đặc quyền dành riêng cho nhà
            lãnh đạo dẫn đầu
          </p>
          <div class="pt-4">
            <Button
              class="px-12"
              style="--primary: 0 0% 98%; --primary-foreground: 240 5.9% 10%;"
            >
              <A href={routes.login.href}>Gia nhập hệ sinh thái CEO LINK</A>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

const PolicyAdvisor = () => {
  const members = [
    {
      image: User,
      name: "Ông Võ Hồng Phúc",
      role: "Nguyên Bộ trưởng Bộ Kế hoạch & Đầu tư",
    },
    {
      image: User,
      name: "TS. Nguyễn Quân",
      role: "Nguyên Bộ trưởng Bộ Khoa học & Công nghệ",
    },
    {
      image: User,
      name: "TS. Trần Đình Thiên",
      role: "Thành viên Hội đồng Tư vấn Chính sách của Thủ tướng",
    },
    {
      image: User,
      name: "TS. Lê Xuân Nghĩa",
      role: "Thành viên Hội đồng Tư vấn Chính sách của Thủ tướng",
    },
    {
      image: User,
      name: "TS. Nguyễn Sĩ Dũng",
      role: "Nguyên Phó Chủ nhiệm Văn phòng Quốc hội",
    },
    {
      image: User,
      name: "TS. Võ Trí Thành",
      role: "Thành viên Hội đồng Tư vấn Chính sách của Thủ tướng",
    },
  ];

  return (
    <div class="flex flex-col items-center gap-8 border-2 border-primary p-8">
      <h3 class="text-2xl font-bold">Cố vấn Chính sách & Chuyên gia Kinh tế</h3>
      <div class="grid grid-cols-2 gap-12">
        {members.map((el) => {
          return (
            <div class="flex max-w-80 flex-col items-center gap-2 text-center">
              <div class="rounded-full bg-primary p-4">
                <el.image class="size-10 text-white" />
              </div>
              <p class="font-bold">{el.name}</p>
              <p>{el.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Diplomat = () => {
  const members = [
    {
      image: User,
      name: "Ông Phạm Quang Vinh",
      role: "Chủ tịch Hội Việt - Mỹ, Nguyên Thứ trưởng Bộ Ngoại giao",
    },
    {
      image: User,
      name: "Ông Vũ Quang Minh",
      role: "Nguyên Thứ trưởng Bộ Ngoại giao",
    },
    {
      image: User,
      name: "Ông Hoàng Anh Tuấn",
      role: "Tổng Lãnh sự tại San Francisco",
    },
    {
      image: User,
      name: "Bà Bùi Kim Thùy",
      role: "Thành viên Hội đồng Cố vấn ĐH Harvard",
    },
  ];

  return (
    <div class="flex flex-col items-center gap-8 border-2 border-primary p-8">
      <h3 class="text-2xl font-bold">Nhà Ngoại giao & Cố vấn Quốc tế</h3>
      <div class="grid grid-cols-2 gap-12">
        {members.map((el) => {
          return (
            <div class="flex max-w-80 flex-col items-center gap-2 text-center">
              <div class="rounded-full bg-primary p-4">
                <el.image class="size-10 text-white" />
              </div>
              <p class="font-bold">{el.name}</p>
              <p>{el.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Founder = () => {
  const members = [
    {
      image: User,
      name: "Bà Lê Thị Thu Thủy",
      role: "Chủ tịch VinFast",
    },
    {
      image: User,
      name: "Ông Nguyễn Xuân Phú",
      role: "Chủ tịch Tập đoàn Sunhouse",
    },
    {
      image: User,
      name: "Ông Nguyễn Trọng Khang",
      role: "Chủ tịch MK Group",
    },
    {
      image: User,
      name: "Ông Nguyễn Tử Quảng",
      role: "Chủ tịch BKAV",
    },
  ];

  return (
    <div class="flex flex-col items-center gap-8 border-2 border-primary p-8">
      <h3 class="text-2xl font-bold"> Nhà Sáng lập & Lãnh đạo Doanh nghiệp</h3>
      <div class="grid grid-cols-2 gap-12">
        {members.map((el) => {
          return (
            <div class="flex max-w-80 flex-col items-center gap-2 text-center">
              <div class="rounded-full bg-primary p-4">
                <el.image class="size-10 text-white" />
              </div>
              <p class="font-bold">{el.name}</p>
              <p>{el.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HonorCouncil;
