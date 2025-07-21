const donHang = {
    id: "MILK-001",
    quantity: 1,
    price: 25000
};

const donHang2 = {
    id: "MILK-002",
    price: 38000
};

const xuLyDonHang = ({ id, quantity = 1, price }) => {
    console.log("Đang xử lý đơn: ", id)
    console.log("Số lượng: ", quantity)
    console.log("Đơn giá: ", price)
    console.log("Xử lý thành công!")
}

xuLyDonHang(donHang2)