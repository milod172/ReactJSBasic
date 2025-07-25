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

## 🧠 Cơ chế Two-way binding của `useState` trong React

Khi dữ liệu trong **UI thay đổi --> State sẽ cập nhật** ngay lập tức. Khi **State thay đổi --> UI sẽ tự động cập nhật** theo.

`Two-way binding` thường dùng với **input**, **checkbox**, **radio**, **select**, **range**, **toogle**,...

### Two-way binding với 1 trường input:
```jsx
function App() {
  const [playerName, setPlayerName] = useState("Player1")

  const handleChange = (event) => {
    setPlayerName(event.target.value)
  }

  return (
    <>
      <h2>Nhập tên người chơi:</h2>
      <input type='text' value={playerName} onChange={handleChange} />
      <p>Bạn đã nhập: {playerName}</p>
    </>
  )
}

export default App
```

### Two-way binding với nhiều trường input:

```jsx
function App() {
  const [user, setUser] = useState({ fullName: '', email: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  return (
    <>
      <h2>Cập nhật thông tin:</h2>
      Email: <input type='email' name='email' value={user.email} onChange={handleChange} /> <br />
      FullName: <input type='text' name='fullName' value={user.fullName} onChange={handleChange} />

      <h2>Thông tin của bạn: </h2>
      <p> Email: {user.email}</p>
      <p> FullName: {user.fullName}</p>
    </>
  )
}

export default App

``` 