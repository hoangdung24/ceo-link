import AutoScroll from "embla-carousel-auto-scroll";
import { createEffect, createSignal, Index } from "solid-js";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselProps,
} from "~/components/ui/carousel";

export const Partner = () => {
  return (
    <div class="flex flex-col gap-8">
      <InfrastructurePartner />
      <HealthcarePartner />
      <AssociatedPartner />
    </div>
  );
};

const opts: CarouselProps["opts"] = {
  align: "start",
  loop: true,
};

const items = [
  "/images/logo-1.jpg",
  "/images/logo-2.jpg",
  "/images/logo-3.jpg",
  "/images/logo-4.jpg",
  "/images/logo-5.jpg",
  "/images/logo-6.jpg",
  "/images/logo-7.jpg",
  "/images/logo-8.jpg",
];

const InfrastructurePartner = () => {
  const [api, setApi] = createSignal<ReturnType<CarouselApi>>();

  const plugins: CarouselProps["plugins"] = [
    AutoScroll({
      speed: 1,
      playOnInit: true,
      stopOnMouseEnter: true,
      stopOnInteraction: true,
    }),
  ];

  createEffect(() => {
    if (!api()) {
      return;
    }

    api()!
      .containerNode()
      .addEventListener("mouseleave", () => {
        api()?.plugins().autoScroll!.play();
      });

    api()!.on("pointerUp", () => {
      api()?.plugins().autoScroll!.play();
    });
  });

  return (
    <section id="hero" class="flex flex-col gap-4">
      <h3 class="text-lg font-bold">Hạ tầng Hàng không & Di chuyển</h3>
      <Carousel setApi={setApi} opts={opts} plugins={plugins} class="w-full">
        <CarouselContent>
          <Index each={items}>
            {(item, index) => {
              return (
                <CarouselItem class="max-w-60">
                  <img
                    class="aspect-video grayscale duration-300 hover:grayscale-0"
                    src={item()}
                    alt={`Logo ${index + 1}`}
                  />
                </CarouselItem>
              );
            }}
          </Index>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

const HealthcarePartner = () => {
  const [api, setApi] = createSignal<ReturnType<CarouselApi>>();
  const plugins: CarouselProps["plugins"] = [
    AutoScroll({
      speed: 1,
      playOnInit: true,
      stopOnMouseEnter: true,
      stopOnInteraction: true,
    }),
  ];
  createEffect(() => {
    if (!api()) {
      return;
    }

    api()!
      .containerNode()
      .addEventListener("mouseleave", () => {
        api()?.plugins().autoScroll!.play();
      });

    api()!.on("pointerUp", () => {
      api()?.plugins().autoScroll!.play();
    });
  });

  return (
    <section id="hero" class="flex flex-col gap-4">
      <h3 class="text-lg font-bold">Hệ thống Y tế & Chăm sóc sức khỏe</h3>
      <Carousel setApi={setApi} opts={opts} plugins={plugins} class="w-full">
        <CarouselContent>
          <Index each={items}>
            {(item, index) => {
              return (
                <CarouselItem class="max-w-60">
                  <img
                    class="aspect-video grayscale duration-300 hover:grayscale-0"
                    src={item()}
                    alt={`Logo ${index + 1}`}
                  />
                </CarouselItem>
              );
            }}
          </Index>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

const AssociatedPartner = () => {
  const [api, setApi] = createSignal<ReturnType<CarouselApi>>();
  const plugins: CarouselProps["plugins"] = [
    AutoScroll({
      speed: 1,
      playOnInit: true,
      stopOnMouseEnter: true,
      stopOnInteraction: true,
    }),
  ];
  createEffect(() => {
    if (!api()) {
      return;
    }

    api()!
      .containerNode()
      .addEventListener("mouseleave", () => {
        api()?.plugins().autoScroll!.play();
      });

    api()!.on("pointerUp", () => {
      api()?.plugins().autoScroll!.play();
    });
  });

  return (
    <section id="hero" class="flex flex-col gap-4">
      <h3 class="text-lg font-bold">Các Hiệp hội & Tổ chức thương mại</h3>
      <Carousel setApi={setApi} opts={opts} plugins={plugins} class="w-full">
        <CarouselContent>
          <Index each={items}>
            {(item, index) => {
              return (
                <CarouselItem class="max-w-60">
                  <img
                    class="aspect-video grayscale duration-300 hover:grayscale-0"
                    src={item()}
                    alt={`Logo ${index + 1}`}
                  />
                </CarouselItem>
              );
            }}
          </Index>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
