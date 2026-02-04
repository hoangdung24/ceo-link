import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselProps,
  CarouselContent,
} from "~/components/ui/carousel";
import { Button } from "~/components/ui/button";
import { createEffect, createSignal } from "solid-js";
import Autoplay from "embla-carousel-autoplay";
import { A } from "@solidjs/router";

const Promotion = () => {
  const promotions = [
    {
      title: " Bạn đang là Thành viên? Khám phá đặc quyền Gold & Platinum",
      description:
        "Lựa chọn hạng thẻ phù hợp để mở khóa toàn bộ khả năng tiếp cận mạng lưới doanh nghiệp và hưởng các đặc quyền ưu tiên dành riêng cho bạn.",
      leftHref: "/dang-ky-hoi-vien",
      rightHref: "/dang-ky-hoi-vien",
      banner: "/images/banner-1.jpg",
    },
    {
      title: " Bạn đang là Thành viên? Khám phá đặc quyền Gold & Platinum",
      description:
        "Lựa chọn hạng thẻ phù hợp để mở khóa toàn bộ khả năng tiếp cận mạng lưới doanh nghiệp và hưởng các đặc quyền ưu tiên dành riêng cho bạn.",
      leftHref: "/dang-ky-hoi-vien",
      rightHref: "/dang-ky-hoi-vien",
      banner: "/images/banner-2.jpg",
    },
  ];

  const [api, setApi] = createSignal<ReturnType<CarouselApi>>();

  const opts: CarouselProps["opts"] = {
    align: "start",
    loop: true,
  };

  const plugins: CarouselProps["plugins"] = [
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }),
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
    <div id="promotion">
      <Carousel setApi={setApi} opts={opts} plugins={plugins} class="w-full">
        <CarouselContent>
          {promotions.map((el) => {
            return (
              <CarouselItem>
                <div class="relative flex h-[300px] flex-col justify-center bg-primary p-8 text-white">
                  <img
                    src={el.banner}
                    alt={el.title}
                    class="absolute left-0 top-0 h-full w-full object-cover"
                  />
                  <div class="absolute left-0 top-0 h-full w-full bg-black/50" />
                  <div class="z-10 flex select-none flex-col gap-4">
                    <h3 class="text-2xl font-bold">{el.title}</h3>
                    <p>{el.description}</p>
                    <div
                      style="--primary: 0 0% 98%; --primary-foreground: 240 5.9% 10%;"
                      class="flex gap-2"
                    >
                      <Button>
                        <A href={el.leftHref}>Nâng cấp đặc quyền</A>
                      </Button>
                      <Button>
                        <A href={el.rightHref}>Khám phá các gói dịch vụ</A>
                      </Button>
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

export { Promotion };
