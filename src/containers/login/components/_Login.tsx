import { clientOnly } from "@solidjs/start";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldErrorMessage,
} from "~/components/ui/text-field";

const Facebook = clientOnly(() => import("lucide-solid/icons/facebook"));
const Twitter = clientOnly(() => import("lucide-solid/icons/twitter"));

const _Login = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Đăng nhập</CardTitle>
        <CardDescription>
          Nhập thông tin đăng nhập của bạn để truy cập vào tài khoản.
        </CardDescription>
      </CardHeader>
      <CardContent class="flex flex-col gap-4">
        <TextField required>
          <TextFieldLabel>Email</TextFieldLabel>
          <TextFieldInput type="email" />
          <TextFieldErrorMessage />
        </TextField>
        <TextField required>
          <TextFieldLabel>Mật khẩu</TextFieldLabel>
          <TextFieldInput type="password" />
          <TextFieldErrorMessage />
        </TextField>
        <Button>Đăng nhập</Button>

        <Dialog>
          <DialogTrigger>
            <Button variant="link" class="underline">
              Quên mật khẩu?
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Quên mật khẩu</DialogTitle>
              <DialogDescription>
                Nhập email của bạn để đặt lại mật khẩu.
              </DialogDescription>
            </DialogHeader>
            <div class="flex flex-col gap-4">
              <TextField required>
                <TextFieldLabel>Email</TextFieldLabel>
                <TextFieldInput type="email" />
                <TextFieldErrorMessage />
              </TextField>
            </div>
            <DialogFooter>
              <DialogTrigger>
                <Button>Gửi yêu cầu đặt lại mật khẩu</Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div class="relative flex justify-center">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative bg-background px-2 text-xs uppercase">
            <span>Hoặc đăng nhập bằng</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <Button variant="outline">
            <span>
              <Twitter />
            </span>
            Twitter
          </Button>
          <Button variant="outline">
            <span>
              <Facebook />
            </span>
            Facebook
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default _Login;
