import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Button } from "~/components/ui/button";

const User = clientOnly(() => import("lucide-solid/icons/user"));
const Component = clientOnly(() => import("lucide-solid/icons/component"));
const TrendingUp = clientOnly(() => import("lucide-solid/icons/trending-up"));
const Lightbulb = clientOnly(() => import("lucide-solid/icons/lightbulb"));

const About = () => {
  return (
    <main id="about">
      <Hero />
      <div class="flex flex-col gap-12 py-12">
        {[
          <Guarantee />,
          <Feature />,
          <Mission />,
          <BoardOfDirectors />,
          <BoardOfAdvisors />,
          <Supplier />,
        ].map((el) => {
          return <div class="container">{el}</div>;
        })}
        <Companion />
      </div>
    </main>
  );
};

const Hero = () => {
  return (
    <section id="hero" class="relative h-96 overflow-hidden">
      <div class="h-96 w-full bg-[url(/images/banner-about.png)] bg-cover bg-center" />
      <div class="absolute inset-0 bg-primary/50" />
      <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <div class="container">
          <div class="flex max-w-[70%] flex-col gap-2 text-white">
            <h1 class="text-4xl font-bold">CEO LINK</h1>
            <h3 class="text-2xl font-bold">YOUR NETWORK, YOUR SUCCESS</h3>
            <p>
              Nền tảng không chỉ xây dựng mạng lưới; chúng tôi kiến tạo một hệ sinh thái
              kinh doanh riêng tư, nơi vị thế của nhà lãnh đạo được khẳng định và các cơ
              hội giao thương được hiện thực hóa một cách bền vững
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guarantee = () => {
  return (
    <div class="mx-auto flex max-w-[70%] flex-col items-center gap-2">
      <h3 class="text-2xl font-bold">
        Viet Development Group (VDG) – Nền tảng bảo chứng
      </h3>
      <p class="text-center">
        Viet Development Group (VDG) là doanh nghiệp tiên phong tại Việt Nam chuyên xây
        dựng và phát triển mạng lưới kết nối doanh nhân trên quy mô toàn cầu. Với nền tảng
        công nghệ tiên phong và đội ngũ lãnh đạo xuất sắc, VDG là "hạt nhân" bảo chứng cho
        sự uy tín và đẳng cấp của mọi dự án trong hệ sinh thái.
      </p>
    </div>
  );
};

const Feature = () => {
  return (
    <div class="mx-auto flex max-w-[70%] flex-col items-center gap-2">
      <h3 class="text-2xl font-bold">
        CEO Link – Hệ sinh thái Kinh doanh Riêng tư & Đặc quyền
      </h3>
      <p class="text-center">
        Trực thuộc VDG, CEO Link là thực thể chuyên biệt vận hành mạng lưới Global
        Network. Đây là nơi hội tụ của hơn 10.000 lãnh đạo đã được xác thực, cung cấp giải
        pháp kết nối{" "}
        <span class="font-bold">"Đúng người – Đúng nhu cầu – Đúng thời điểm"</span> thông
        qua công nghệ AI Matching hiện đại. CEO Link không chỉ mang đến hạ tầng đặc quyền
        toàn diện về Travel, Healthcare và Lifestyle mà còn hỗ trợ giao thương, xúc tiến
        thương mại, tư vấn pháp lý và tài chính chuyên sâu, giúp nhà lãnh đạo tận hưởng
        cuộc sống song hành cùng thành công bứt phá.
      </p>
    </div>
  );
};

const Mission = () => {
  const missions = [
    {
      title: "Tầm nhìn",
      description:
        "Trở thành mô hình kết nối lãnh đạo độc đáo, rộng khắp và bền vững hàng đầu tại Việt Nam và vươn tầm thế giới.",
      Icon: Component,
    },
    {
      title: "Sứ mệnh",
      description:
        "Tạo ra giá trị cộng hưởng thực chất cho doanh nghiệp và cung cấp những đặc quyền VIP khác biệt dành riêng cho giới tinh hoa.",
      Icon: TrendingUp,
    },
    {
      title: "Giá trị cốt lõi",
      description: "",
      items: ["Đẳng cấp", "Hiệu quả", "An toàn", "Nhanh chóng"],
      Icon: Lightbulb,
    },
  ];

  return (
    <div class="mx-auto grid max-w-[80%] grid-cols-3">
      {missions.map((el) => {
        return (
          <div class="flex flex-col items-center gap-4">
            <div class="rounded-full bg-primary p-4">
              <el.Icon class="size-12 text-white" />
            </div>
            <h3 class="font-bold">{el.title}</h3>
            {el.description && <p class="max-w-[75%] text-center">{el.description}</p>}
            {el.items && (
              <ul class="flex flex-col items-center gap-2">
                {el.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

const BoardOfDirectors = () => {
  const directors = [
    {
      image: User,
      name: "Ông Đỗ Quang Vinh",
      position: "Chủ tịch HĐQT",
      roles: ["Chủ tịch Công ty TNHH IOTLink"],
    },
    {
      image: User,
      name: "Ông Diệp Dũng",
      position: "Phó chủ tịch",
      roles: ["Nguyên chủ tịch Coop Mart"],
    },
    {
      image: User,
      name: "Ông Bùi Thanh Giang",
      position: "Giám đốc Điều hành",
      roles: ["..."],
    },
    {
      image: User,
      name: "Bà Trần Lan Anh ",
      position: "Giám đốc Dịch vụ Khách hàng",
      roles: ["..."],
    },
  ];

  return (
    <div class="border-2 border-primary p-12">
      <div class="mx-auto flex max-w-[70%] flex-col gap-8">
        <div class="flex flex-col items-center gap-2">
          <h3 class="text-2xl font-bold">Đội ngũ lãnh đạo</h3>
          <p class="text-center">
            Hệ thống được vận hành bởi đội ngũ lãnh đạo tâm huyết, là những chuyên gia có
            kinh nghiệm thực tiễn trong quản trị doanh nghiệp và phát triển mạng lưới đối
            tác chiến lược, đảm bảo sự vận hành hiệu quả và chuyên nghiệp cho CEO Link
          </p>
        </div>
        <div class="grid w-full grid-cols-2 gap-y-8">
          {directors.map((el) => {
            return (
              <div class="flex flex-col items-center gap-1">
                <el.image class="size-20 rounded-full bg-muted p-4" />
                <h6 class="text-lg font-bold">{el.name}</h6>
                <p>{el.position}</p>
                <ul class="list-inside list-disc text-center">
                  {el.roles.map((role) => {
                    return <li>{role}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const BoardOfAdvisors = () => {
  const advisors = [
    {
      image: User,
      name: "Ông Đỗ Quang Vinh",
      position: "Chủ tịch HĐQT",
      roles: ["Cố vấn Tài chính & Đầu tư"],
    },
    {
      image: User,
      name: "Ông Diệp Dũng",
      position: "Phó chủ tịch",
      roles: ["Cố vấn Pháp lý & Nhân sự"],
    },
    {
      image: User,
      name: "Ông Bùi Thanh Giang",
      position: "Giám đốc Điều hành",
      roles: ["Cố vấn Công nghệ & Chuyển đổi số"],
    },
    {
      image: User,
      name: "Bà Trần Lan Anh ",
      position: "Giám đốc Dịch vụ Khách hàng",
      roles: ["Cố vấn Công nghệ & Chuyển đổi số"],
    },
  ];
  return (
    <div class="border-2 border-primary p-12">
      <div class="mx-auto flex max-w-[70%] flex-col gap-8">
        <div class="flex flex-col items-center gap-2">
          <h3 class="text-2xl font-bold">Ban cố vấn</h3>
          <p class="text-center">
            Hội đồng chuyên gia đa lĩnh vực đồng hành cùng hội viên trong các quyết định
            chiến lược và xử lý những thách thức phức tạp
          </p>
        </div>
        <div class="grid w-full grid-cols-2 gap-y-8">
          {advisors.map((el) => {
            return (
              <div class="flex flex-col items-center gap-1">
                <el.image class="size-20 rounded-full bg-muted p-4" />
                <h6 class="text-lg font-bold">{el.name}</h6>
                <p>{el.position}</p>
                <ul class="list-inside list-disc text-center">
                  {el.roles.map((role) => {
                    return <li>{role}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Supplier = () => {
  const items = [
    "/images/partners/partner-1.png",
    "/images/partners/partner-2.png",
    "/images/partners/partner-3.png",
    "/images/partners/partner-4.png",
    "/images/partners/partner-5.png",
    "/images/partners/partner-6.png",
    "/images/partners/partner-7.png",
    "/images/partners/partner-8.png",
    "/images/partners/partner-9.jpg",
    "/images/partners/partner-10.png",
    "/images/partners/partner-11.png",
    "/images/partners/partner-12.png",
  ];

  return (
    <div class="mx-auto max-w-[70%]">
      <div class="flex flex-col items-center gap-2">
        <h3 class="text-2xl font-bold">Nhà cung cấp chiến lược</h3>
        <p class="text-center">
          Chúng tôi liên kết với những đối tác hàng đầu để hiện thực hóa cam kết về hạ
          tầng đặc quyền toàn diện
        </p>
      </div>
      <div class="grid grid-cols-4 gap-4">
        {items.map((el) => {
          return (
            <div class="pointer-events-none flex aspect-square select-none items-center p-4">
              <img src={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Companion = () => {
  return (
    <div class="flex flex-col gap-8 bg-primary py-16 text-white">
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-2xl font-bold">
          Đồng hành cùng VDG & CEO Link kiến tạo giá trị thịnh vượng
        </h3>
        <p class="text-center">
          Chúng tôi chào đón những nhà lãnh đạo có cùng khát vọng xây dựng một cộng đồng
          doanh thương Việt Nam thịnh vượng, bền vững và vươn tầm quốc tế.
        </p>
      </div>
      <Button
        style="--primary: 0 0% 98%; --primary-foreground: 240 5.9% 10%;"
        class="self-center px-16 uppercase"
      >
        Trở thành đối tác của chúng tôi
      </Button>
    </div>
  );
};

export default About;
