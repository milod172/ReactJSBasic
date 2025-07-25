import './App.css'
import { data } from "./data.js"
import TabButton from './components/TabButton.jsx'
import GameCard from "./components/GameCard.jsx"
import Header from "./components/Header.jsx"
import { useState } from 'react'
import Modal from './components/Modal.jsx'

function App() {
  const [isPopUp, setIsPopUp] = useState(false);
  const [isSelectTitle, setIsSelectTitle] = useState("");
  const [isCurrentCard, setIsCurrentCard] = useState("")

  function handlePopUp(cardTitle) {
    setIsPopUp(true)
    setIsSelectTitle(cardTitle)
  }

  function handleClose() {
    setIsPopUp()
  }

  function handleSelect() {
    setIsPopUp(false)
    setIsCurrentCard(isSelectTitle)
  }

  return (
    <>
      <Header />

      <ul className='card-list'>
        {data.map((item, index) => (
          <li key={index}>
            <GameCard {...item} />
            <TabButton isSelected={isCurrentCard === item.title} onSelect={() => handlePopUp(item.title)}>Mua</TabButton>
          </li>
        ))}
      </ul>

      {/* 
        Hiển thị Popup khi nhấn click 
        truyền onClose nếu người dụng chọn "Không" sẽ đóng thẻ
        truyền onSelect nếu người dùng chọn "Yes"
      */}
      {isPopUp && <Modal onNo={handleClose} onYes={handleSelect} />}

      {isCurrentCard && <p className='current_card'>Mua thành công thẻ bài: {isCurrentCard}</p>}

    </>
  )
}

export default App
