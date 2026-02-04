import { createEffect, createMemo } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { createScrollPosition } from "@solid-primitives/scroll";

import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

const Headset = clientOnly(() => import("lucide-solid/icons/headset"));
const ArrowUp = clientOnly(() => import("lucide-solid/icons/arrow-up"));

const Support = () => {
  const windowScroll = createScrollPosition();

  const animatedStyle = createMemo(() => {
    if (windowScroll.y > 1000) {
      return "opacity-100";
    }
    return "opacity-0 pointer-events-none";
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="support" class="fixed bottom-8 right-0 mix-blend-difference">
      <div class="flex flex-col-reverse gap-2">
        <Button
          onClick={goToTop}
          size="icon"
          class={cn("size-12 transition", animatedStyle())}
        >
          <ArrowUp class="!size-6" />
        </Button>
        <Button size="icon" class="size-12">
          <Zalo />
        </Button>
        <Button size="icon" class="size-12">
          <Headset class="!size-6" />
        </Button>
      </div>
    </div>
  );
};

export default Support;

const Zalo = () => {
  return (
    <svg
      class="!size-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Zalo SVG Icon</title>
      <path
        fill="currentColor"
        d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.27 3.27 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.27 3.27 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a8 8 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.858 9.23H.192V7.79zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612a3.306 3.306 0 0 1-.002-6.612m-10.14 5.253a1.932 1.932 0 1 0 0-3.863a1.932 1.932 0 0 0 0 3.863m10.14-.003a1.945 1.945 0 1 0 0-3.89a1.945 1.945 0 0 0 0 3.89"
      />
    </svg>
  );
};
