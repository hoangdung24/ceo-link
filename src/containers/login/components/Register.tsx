import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { LoginProvider, useLogin } from "../LoginContext";
import UserInfo from "./UserInfo";
import BusinessInfo from "./BusinessInfo";
import SuccessfulRegistration from "./SuccessfulRegistration";

const Register = () => {
  return (
    <LoginProvider>
      <Card>
        <CardHeader>
          <CardTitle>Trở thành hội viên CEO Link</CardTitle>
          <CardDescription>
            Chỉ vài bước định danh để kết nối với mạng lưới lãnh đạo tinh hoa và bắt đầu
            hành trình bứt phá kinh doanh cùng CEO Link
          </CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col gap-4">
          <_CardContent />
        </CardContent>
      </Card>
    </LoginProvider>
  );
};

const _CardContent = () => {
  const context = useLogin();

  return (
    <>
      {context.step() == 1 && <UserInfo />}
      {context.step() == 2 && <BusinessInfo />}
      {context.step() == 3 && <SuccessfulRegistration />}
    </>
  );
};

export default Register;
