import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import _Login from "./components/_Login";
import Register from "./components/Register";

const Login = () => {
  return (
    <section id="login" class="container flex flex-col items-center gap-8 py-8">
      <Tabs defaultValue="login" class="w-full max-w-lg">
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
    </section>
  );
};

export default Login;
