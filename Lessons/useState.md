## 🧠 `useState` trong React

**`useState`**: là một Hook dùng để khai báo state trong functional component.

- **Bản chất**: nhận vào một giá trị khởi tạo (`initState`) làm đối số.
- **Trả về**: một mảng gồm **2 phần tử**:
     - **Giá trị hiện tại của state**
     - **Hàm để cập nhật state đó**

### 🧪 Ví dụ:

```jsx
const [count, setCount] = useState(0);
```

### ⚠️ Lỗi phổ biến khi dùng `useState`

Một trong những **hiểu lầm phổ biến** là nghĩ rằng **state sẽ thay đổi ngay lập tức** sau khi gọi `setState`.

> ❗ **Thực tế:** React **không cập nhật state ngay lập tức**. Thay vào đó, nó **đánh dấu state sẽ thay đổi** và thực hiện cập nhật trong **lần render tiếp theo**.
<img width="711" height="256" alt="image" src="https://github.com/user-attachments/assets/60facace-7196-4a93-8368-735853916d27" />

