import { A } from "@solidjs/router";
import Autoplay from "embla-carousel-autoplay";
import { createEffect, createMemo, createSignal, Index } from "solid-js";

import { Button } from "~/components/ui/button";

import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselProps,
  CarouselContent,
} from "~/components/ui/carousel";
import { routes } from "~/config/routes";

export const Hero = () => {
  const opts: CarouselProps["opts"] = {
    align: "start",
    loop: true,
  };

  const plugins: CarouselProps["plugins"] = [Autoplay({ delay: 4000 })];

  const items = [
    {
      title: "Chia sẻ vị thế - Kết nối thành công",
      description:
        "Biến mạng lưới quan hệ của bạn thành những đặc quyền giá trị cùng cộng đồng CEO Link",
      banner: "/images/referral-banner.png",
      href: routes.referral.href,
      buttonLabel: "Khám phá chương trình Referral",
    },
    {
      title: "YOUR NETWORK, YOUR SUCCESS",
      description:
        "CEO Link là nền tảng kết nối, xúc tiến và hợp tác chuyên sâu dành cho lãnh đạo doanh nghiệp, giúp kết nối đúng người, đúng nhu cầu và đúng thời điểm ngay trong một hệ sinh thái kinh doanh riêng tư",
      banner: "/images/banner-1.jpg",
      href: "/",
      buttonLabel: "Tìm hiểu thêm",
    },
    {
      title: "YOUR NETWORK, YOUR SUCCESS",
      description:
        "CEO Link là nền tảng kết nối, xúc tiến và hợp tác chuyên sâu dành cho lãnh đạo doanh nghiệp, giúp kết nối đúng người, đúng nhu cầu và đúng thời điểm ngay trong một hệ sinh thái kinh doanh riêng tư",
      banner: "/images/banner-2.jpg",
      href: "/",
      buttonLabel: "Tìm hiểu thêm",
    },
    {
      title: "YOUR NETWORK, YOUR SUCCESS",
      description:
        "CEO Link là nền tảng kết nối, xúc tiến và hợp tác chuyên sâu dành cho lãnh đạo doanh nghiệp, giúp kết nối đúng người, đúng nhu cầu và đúng thời điểm ngay trong một hệ sinh thái kinh doanh riêng tư",
      banner: "/images/banner-3.jpg",
      href: "/",
      buttonLabel: "Tìm hiểu thêm",
    },
    {
      title: "YOUR NETWORK, YOUR SUCCESS",
      description:
        "CEO Link là nền tảng kết nối, xúc tiến và hợp tác chuyên sâu dành cho lãnh đạo doanh nghiệp, giúp kết nối đúng người, đúng nhu cầu và đúng thời điểm ngay trong một hệ sinh thái kinh doanh riêng tư",
      banner: "/images/banner-4.jpg",
      href: "/",
      buttonLabel: "Tìm hiểu thêm",
    },
  ];

  const [currentBanner, setCurrentBanner] = createSignal<number>(0);

  const [api, setApi] = createSignal<ReturnType<CarouselApi>>();

  createEffect(() => {
    if (!api()) {
      return;
    }

    api()!.on("select", (api) => {
      setCurrentBanner(api.selectedScrollSnap());
    });

    api()!
      .containerNode()
      .addEventListener("mouseleave", () => {
        api()?.plugins().autoplay!.play();
      });
  });

  const content = createMemo(() => {
    const currentItem = currentBanner();

    const { buttonLabel, description, href, title } = items[currentItem];

    return (
      <div class="flex flex-col justify-center gap-4 p-8">
        <h3 class="text-4xl font-bold uppercase">{title}</h3>
        <p class="text-lg">{description}</p>
        <Button class="self-start">
          <A href={href}>{buttonLabel}</A>
        </Button>
      </div>
    );
  });

  return (
    <section id="hero" class="grid grid-cols-2">
      {content()}
      <Carousel setApi={setApi} opts={opts} plugins={plugins}>
        <CarouselContent>
          <Index each={items}>
            {(item, _) => {
              return (
                <CarouselItem>
                  <img class="aspect-video" src={item().banner} alt={item().title} />
                </CarouselItem>
              );
            }}
          </Index>
        </CarouselContent>
      </Carousel>
      {/* <Carousel setApi={setApi} opts={opts} plugins={plugins} class="w-full">
        <CarouselContent>
          <Index each={items}>
            {(item, _) => {
              return (
                <CarouselItem>
                  <div class="relative">
                    <img
                      class="aspect-video w-full"
                      src={item().banner}
                      alt={item().title}
                    />
                    <div class="absolute inset-0 bg-black opacity-50" />
                    <div class="absolute left-12 top-1/2 -translate-y-1/2 select-none">
                      <div class="flex max-w-[75%] flex-col gap-6 text-white">
                        <p class="text-3xl font-semibold">{item().title}</p>
                        <p>{item().description}</p>
                        <Button class="self-start">
                          <A href={item().href}>{item().buttonLabel}</A>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            }}
          </Index>
        </CarouselContent>
      </Carousel> */}
    </section>
  );
};
