// Khi muốn import một Export named là phải import đúng tên export named xuất ra
// Khi import một Export default thì import đặt tên gì cũng được

// Nếu trong file export named mà có 1 biến được export default, thì không thể lấy biến đó từ
// import * as name from ./file được (Báo lỗi undefined)

import tinhtong from "./default.js";

console.log(tinhtong(4, 5))