import UserInfo from "./components/UserInfo";
import BusinessInfo from "./components/BusinessInfo";

const Register = () => {
  return (
    <div class="container flex flex-col gap-8 py-8">
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-2xl font-bold">Trở thành hội viên CEO Link</h3>
        <p>
          Chỉ vài bước định danh để kết nối với mạng lưới lãnh đạo tinh hoa và bắt đầu
          hành trình bứt phá kinh doanh cùng CEO Link
        </p>
      </div>
      <UserInfo />
      <BusinessInfo />
    </div>
  );
};

export default Register;
