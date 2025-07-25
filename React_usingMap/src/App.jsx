//import useFetchData from "./hooks/useFetchData.js"
import './App.css'
import Header from "./components/Header.jsx"
import Section from './components/Section.jsx'
import Table from './components/Table.jsx'
import { useState } from "react"

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


// const bookHeaders = [
//   { key: "STT", value: (_, index) => index + 1 },
//   { key: "Tên sách", value: (data) => data.name },
//   { key: "Giá", value: (data) => data.price },
// ]

// const productHeaders = [
//   { key: "STT", value: (_, index) => index + 1 },
//   { key: "Tên sản phẩm", value: (data) => data.name },
//   { key: "Giá", value: (data) => data.price },
// ]

// const [books, setBooks] = useState([]);
// const [products, setProducts] = useState([]);
// const [error, setError] = useState(null);

// useEffect(() => {
//   Promise.all([
//     fetch('./book.json').then(res => {
//       if (!res.ok) throw new Error("Lỗi khi fetch book.json");
//       return res.json();
//     }),
//     fetch('./product.json').then(res => {
//       if (!res.ok) throw new Error("Lỗi khi fetch product.json");
//       return res.json();
//     }),
//   ])
//     .then(([bookData, productData]) => {
//       setBooks(bookData);
//       setProducts(productData);
//     })
//     .catch(err => {
//       setError(err.message || "Lỗi khi fetch dữ liệu");
//     });
// }, []);


// //Cách 2. Custom hooks cho việc fetch API
// // const { data: books, error: bookError } = useFetchData('./book.json');
// // const { data: products, error: productError } = useFetchData('./product.json');

// // if (bookError) return <p>Lỗi: {bookError}</p>
// // if (bookError) return <p>Lỗi: {productError}</p>

// if (error) return <p>Lỗi: {error}</p>

// return (
//   <>
//     <Header />
//     <Section title="Sách mới hôm nay:">
//       <Table theaders={bookHeaders} dataList={books} />
//     </Section>

//     <Section title="Sản phẩm mới hôm nay:">
//       <Table theaders={productHeaders} dataList={products} />
//     </Section>
//   </>
// )