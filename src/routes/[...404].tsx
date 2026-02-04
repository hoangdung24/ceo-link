import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <main class="container flex flex-col items-center gap-4 py-12">
      <h1 class="text-4xl font-bold">Không tìm thấy</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
      <Button>
        <A href="/">Quay về trang chủ</A>
      </Button>
    </main>
  );
}
