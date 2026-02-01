import { A } from "@solidjs/router";
import { routes } from "~/config/routes";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Nav() {
  return (
    <nav class="sticky top-0 z-10 bg-white">
      <div class="container flex items-center justify-between py-2">
        <LeftSection />
        <RightSection />
      </div>
    </nav>
  );
}

const LeftSection = () => {
  const navs = [routes.about, routes.member, routes.service, routes.connection];

  return (
    <div class="flex items-center gap-8">
      <A href={routes.home.href}>
        <img src="images/logo.png" alt="Logo" class="w-16" />
      </A>
      <ul class="flex items-center gap-4">
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
  const languages = [
    { label: "Tiếng Việt", code: "vi" },
    { label: "Tiếng Anh", code: "en" },
    { label: "Tiếng Hoa", code: "zh" },
  ];

  return (
    <div class="flex gap-4">
      <Popover>
        <PopoverTrigger>
          <Button class="font-bold" variant="link">
            Ngôn ngữ
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-48">
          <ul class="flex flex-col p-2">
            {languages.map((el) => {
              return (
                <li class="cursor-pointer rounded-md p-2 hover:bg-gray-100">
                  {el.label}
                </li>
              );
            })}
          </ul>
        </PopoverContent>
      </Popover>
      <Button class="font-bold" variant="link">
        <A href={routes.login.href}>{routes.login.label}</A>
      </Button>
      <Button class="font-bold">
        <A href={routes.register.href}>{routes.register.label}</A>
      </Button>
    </div>
  );
};
