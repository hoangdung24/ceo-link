import { clientOnly } from "@solidjs/start";
import Autoplay from "embla-carousel-autoplay";
import { createEffect, createSignal } from "solid-js";

import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselProps,
  CarouselContent,
} from "~/components/ui/carousel";
import { Button } from "~/components/ui/button";

const CircleCheck = clientOnly(() => import("lucide-solid/icons/circle-check"));

const Network = () => {
  const [api, setApi] = createSignal<ReturnType<CarouselApi>>();

  const opts: CarouselProps["opts"] = {
    align: "start",
    loop: true,
  };

  const plugins: CarouselProps["plugins"] = [
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ];

  const members = [
    {
      userName: "Nguyễn Văn A",
      position: "CEO",
      company: "Công ty ABC",
      field: "FMCG",
      capacity: "Chuỗi nhà máy quy mô 50ha, cung ứng toàn cầu.",
      desire:
        "Tìm kiếm đối tác cung ứng nội địa đạt chuẩn ISO và nhà thầu hạ tầng công nghiệp tại Việt Nam.",
    },
    {
      userName: "Nguyễn Văn B",
      position: "CEO",
      company: "Công ty ABC",
      field: "FMCG",
      capacity: "Chuỗi nhà máy quy mô 50ha, cung ứng toàn cầu.",
      desire:
        "Tìm kiếm đối tác cung ứng nội địa đạt chuẩn ISO và nhà thầu hạ tầng công nghiệp tại Việt Nam.",
    },
    {
      userName: "Nguyễn Văn C",
      position: "CEO",
      company: "Công ty ABC",
      field: "FMCG",
      capacity: "Chuỗi nhà máy quy mô 50ha, cung ứng toàn cầu.",
      desire:
        "Tìm kiếm đối tác cung ứng nội địa đạt chuẩn ISO và nhà thầu hạ tầng công nghiệp tại Việt Nam.",
    },
    {
      userName: "Nguyễn Văn D",
      position: "CEO",
      company: "Công ty ABC",
      field: "FMCG",
      capacity: "Chuỗi nhà máy quy mô 50ha, cung ứng toàn cầu.",
      desire:
        "Tìm kiếm đối tác cung ứng nội địa đạt chuẩn ISO và nhà thầu hạ tầng công nghiệp tại Việt Nam.",
    },
  ];

  createEffect(() => {
    if (!api()) {
      return;
    }

    api()!
      .containerNode()
      .addEventListener("mouseleave", () => {
        api()?.plugins().autoplay!.play();
      });
  });

  return (
    <div id="network" class="flex flex-col gap-8">
      <div class="flex max-w-[80%] flex-col gap-2 self-center">
        <h3 class="text-center text-2xl font-bold">
          Khám phá cơ hội trong mạng lưới 10.000+ lãnh đạo xác thực
        </h3>
        <p class="text-center font-medium">
          Mọi cơ hội lớn đều bắt đầu từ sự bảo mật và minh bạch.
        </p>
      </div>
      <Carousel setApi={setApi} opts={opts} plugins={plugins} class="w-full">
        <CarouselContent>
          {members.map((el, idx) => {
            return (
              <CarouselItem class="max-w-[50%]">
                <div class="select-none border-2 border-primary p-8">
                  <div class="relative flex flex-col gap-4">
                    <h6 class="font-bold">Thành viên: {el.userName}</h6>
                    <ul class="flex list-inside list-disc flex-col gap-2">
                      <li>
                        <span class="font-bold">Vị thế:</span> {el.position}
                      </li>
                      <li>
                        <span class="font-bold">Ngành nghề:</span> {el.field}
                      </li>
                      <li>
                        <span class="font-bold">Năng lực:</span> {el.capacity}
                      </li>
                      <li>
                        <span class="font-bold">Nhu cầu:</span> {el.desire}
                      </li>
                    </ul>
                    <div class="grid grid-cols-2 gap-2">
                      <Button class="bg-primary/75">Mở hồ sơ năng lực</Button>
                      <Button class="bg-primary/75">Đặt lịch gặp 1:1</Button>
                    </div>
                    <div class="absolute right-0 top-0">
                      <div class="flex gap-4">
                        <CircleCheck class="text-yellow-400" size={40} />
                        <img
                          src={`/images/logo/logo-${idx + 2}.png`}
                          class="w-10 object-contain"
                          alt="Member Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { Network };
