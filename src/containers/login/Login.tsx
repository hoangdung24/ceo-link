import { createEffect, createRenderEffect, createSignal } from "solid-js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import _Login from "./components/_Login";
import Register from "./components/Register";
import { useSearchParams } from "@solidjs/router";

const Login = () => {
  const [params, setParams] = useSearchParams();

  const defaultTabCompute = () => {
    if (params.tab === "register") {
      return "register";
    }

    return "login";
  };

  const [tab, setTab] = createSignal(defaultTabCompute());

  return (
    <main id="login" class="container flex flex-col items-center gap-12 py-12">
      <Tabs value={tab()} onChange={setTab} class="w-full max-w-lg">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="login">Đăng nhập</TabsTrigger>
          <TabsTrigger value="register">Đăng ký</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <_Login />
        </TabsContent>
        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Login;
