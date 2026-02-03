import { A } from "@solidjs/router";
import { createMemo } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { createScrollPosition } from "@solid-primitives/scroll";

import { Button } from "./ui/button";
import { routes } from "~/config/routes";
import { TextFieldInput, TextField } from "./ui/text-field";
import { PopoverTrigger, Popover, PopoverContent } from "./ui/popover";

import { languages } from "~/config/languages";
import { cn } from "~/lib/utils";

const User = clientOnly(() => import("lucide-solid/icons/user"));
const Globe = clientOnly(() => import("lucide-solid/icons/globe"));

export default function Nav() {
  const windowScroll = createScrollPosition();

  const memoizedValue = createMemo(() => {
    if (windowScroll.y > 100) {
      return "shadow-md";
    }
    return "";
  });

  return (
    <nav
      class={cn("sticky top-0 z-10 border-b bg-white transition-shadow", memoizedValue())}
    >
      <div class="container flex items-center justify-between py-2">
        <LeftSection />
        <RightSection />
      </div>
    </nav>
  );
}

const LeftSection = () => {
  const navs = [
    routes.about,
    routes.member,
    routes.honorCouncil,
    routes.serviceAndConnection,
    routes.exclusive,
  ];

  return (
    <div class="flex items-center gap-8">
      <A href={routes.home.href}>
        <img src="images/logo.jpg" alt="Logo" class="w-16" />
      </A>
      <ul class="flex items-center gap-8">
        {navs.map((el) => {
          return (
            <li>
              <A
                class="font-bold hover:underline hover:underline-offset-4"
                href={el.href}
              >
                {el.label}
              </A>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const RightSection = () => {
  return (
    <div class="flex gap-2">
      <TextField>
        <TextFieldInput placeholder="Tìm kiếm" />
      </TextField>

      <Language />

      <Button size="icon" variant="outline">
        <A href={routes.dashboard.href}>
          <User />
        </A>
      </Button>
      <Button variant="outline">
        <A href={routes.login.href}>{routes.login.label}</A>
      </Button>
    </div>
  );
};

const Language = clientOnly(() =>
  Promise.resolve({
    default: () => {
      const _languages = [languages.vi, languages.en, languages.zh];

      return (
        <Popover>
          <PopoverTrigger as="button">
            <Button size="icon" class="font-bold" variant="outline">
              <Globe />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-40">
            <ul class="flex flex-col">
              {_languages.map((el) => {
                return (
                  <li class="cursor-pointer p-2 text-center hover:bg-gray-100">
                    {el.label}
                  </li>
                );
              })}
            </ul>
          </PopoverContent>
        </Popover>
      );
    },
  })
);
