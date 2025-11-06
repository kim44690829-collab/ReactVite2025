import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ThemeLayout from './ContextAPI/pages/ThemeLayout'
// ThemeProvider를 import해서 ThemeContext.Provider가 감싸는 형태를 만들어준다.
// import ThemeProvider from './ThemeContext'

import WishlistProvider from './WishList2/WishListContext2'
import ProductList2 from './WishList2/ProductList2'
import WishListPage2 from './WishList2/WishListPage2'

function App() {
  // ProductList2, WishListPage2 둘중 하나를 선택해서 가져오도록
  const [showList, setShowList] = useState(false)

  return (
    <>
      <WishlistProvider> 
        <header style={{display:'flex', padding:'20px', justifyContent:'center', backgroundColor:'#eee'}}>
          <h2>찜하기 예제</h2>
          {/* 찜목록 보기 <-> 상품보기 */}
          <button type='button' onClick={() => setShowList(!showList)}>
            {showList ? '상품보기' : '찜 목록 보기'}
          </button>
        </header>
        {showList ? <WishListPage2 /> : <ProductList2 />}
      </WishlistProvider>    
    </>
  )
}

export default App
