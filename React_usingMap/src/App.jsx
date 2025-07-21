import './App.css'
import Book from "./components/Book.jsx"
import { data } from "./data.js"
import "./components/Book.css"

function App() {
  return (
    <>
      <h1>Danh sách sách yêu thích:</h1>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Đơn giá</th>
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <Book key={index} {...item} index={index + 1} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
