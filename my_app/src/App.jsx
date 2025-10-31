import { useState } from 'react'
// src -> assets -> 이미지 파일은 반드시 import 해야한다.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import 외부파일을 가져온다.
import './App.css'
// 이미지를 하나하나 import 해서 개별로 가져올수 있다.
// public 폴더의 이미지 파일은 import하지 않아도 사용가능하다.
import ExJ05 from './JSON/ExJ05'
import ProductApp from './JSON/ExJ06/productApp'
import ExJ07 from './JSON/ExJ07'


// UserCard() 함수 생성하기
// UserCard()컴포넌트를 App()컴포넌트의 자식으로 사용할 예정
// App()컴포넌트의 name, age 매개변수를 => props명령어를 이용하면 컴포넌트와 컴포넌트 사이의 데이터 이동이 가능하다.
// 부모 -> 자식으로만 매개변수를 보낼수있다.
// props명령어는 부모의 모든 매개변수를 대변한다.
// {props.name}, {props.age}
// props로 매개변수를 보내지 않고 직접 매개변수 값을 지정
// {name, age}형식으로 작성한다.
function UserCard(props){
  return(
    <>
      <div style={{border:'1px solid #ddd', 
        padding:'15px', 
        margin:'10px', 
        borderRadius:'8px'
        }}>
          <h2>{props.name}</h2>
          <h2>{props.age}</h2>
      </div>
    </>
  )
}

// function app(){} => react에서 app()는 컴포넌트라고 부른다.
function App() {
  // 리액트는 반드시 return() 안에서 실행할 HTML 문서를 작성한다.
  // true, false는 논리값이다. 문자가 아님
  // true === 1, false === 0
  const name = '홍길동';
  const isLoggin = true;
  const fruits = ['사과','오렌지','바나나']
  const user = {name:'김철수',age:25,email:'kim@naver.com'}
  const clickBtn = () => {
    console.log('버튼을 클릭했습니다.')
  }
  const products = [
    {id:1,name:"노트북",price:1200000},
    {id:2,name:"마우스",price:30000},
    {id:3,name:"키보드",price:80000}
  ]
  return (
    // <></> 프래그먼트 
    // 리액트는 HTML작성시 반드시 부모태그가 하나만 존재해야 하므로 비어있는 태그를 사용하도록 허용한 기술이다.
    // 리액트는 반드시 닫는태그 존재해야 함. : <hr/> or <hr><hr/>
    <>
    {/* 문제 : name:'홍길동' 정의 후 <h1>태그에 출력 */}
      {/* <div style={{backgroundColor:'lightblue', padding:'20px', borderRadius:'10px'}}> */}
        {/* JavaScript의 class를 React는 className으로 사용 */}
        {/* react에서 변수의 값을 사용하려면 반드시 {}안에 변수이름 작성 -> {변수 이름} */}
        {/* <h1>{name}</h1>
        <img src={reactLogo} alt='샘플 랜덤 이미지' />
        <h1>{isLoggin === true ? '환영' : '로그인 하세요'}</h1> */}
        {/* <ul>
          .map 의 함수 식 {fruits.map((item,index) => ())}
          {fruits.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        {/* <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.email}</h1> */}
        {/* <p>스타일이 적용된 박스</p> */}
        {/* <button type='button' onClick={clickBtn}>버튼</button> */}
      {/* </div> */}
      {/* UserCard 안의 name과 age는 매개변수이다. */}
      {/* <UserCard name='홍길동' age={20} />
      <UserCard name='개나리' age={15} />
      <UserCard name='진달래' age={30} /> */}
        {/* {products.map((item) => (
          <div key={item.id} style={{border:'3px solid blueviolet',
        color:'#fff',
        backgroundColor:'#504392',
        padding:'10px',
        margin:'10px',
        borderRadius:'5px',
        fontWeight:'bold'
      }}>
          <p>{item.name}</p>
          <p style={{fontWeight:'normal'}}>
            가격 : {item.price}
          </p>
        </div>
        ))} */}
        {/* <Ex01 /> */}
        {/* <Ex02 /> */}
        {/* <Ex03 /> */}
        {/* <Ex04 /> */}
        {/* <Ex05 /> */}
        {/* <Ex06 /> */}
        {/* <Ex07 /> */}
        {/* <Ex08 /> */}
        {/* <Ex09 /> */}
        {/* <Ex10 /> */}
        {/* <Ex11 /> */}
        {/* <Ex12 /> */}
        {/* <Ex13 /> */}
        {/* <Child /> */}
        {/* <Parent /> */}
        {/* <Parent02 /> */}
        {/* <Parent03 /> */}
        {/* <Parent04 /> */}
        {/* <Welcome name='개나리' /> */}
        {/* <UserCard = '개나리' {18} '서울'/> */}
        {/* <UserCard02 name = '개나리' age = {18} city = '서울' />
        <UserCard02 name = '김백합' age = {40} city = '경기' />
        <UserCard02 name = '최영숙' age = {25} city = '인천' /> */}
        {/* <Product name = '노트북' price = {120000} />
        <Product name = '마우스' price = {15000} /> */}
        {/* <Counter01 /> */}
        {/* <Counter02 /> */}
        {/* <Alert type='error' msg='오류'/>
        <Alert type='success' msg='성공'/>
        <Alert type='info' msg='정보'/>
        <Alert type='warring' msg='위험'/> */}
        {/* <Exstate01 /> */}
        {/* <Exstate02 /> */}
        {/* <Exstate03 /> */}
        {/* <Exstate04 /> */}
        {/* <Exstate05 /> */}
        {/* <Exstate06 /> */}
        {/* <Exstate07 /> */}
        {/* <Exstate08 /> */}
        {/* <Exstate09 /> */}
        {/* <Exstate10 /> */}
        {/* <Exstate11 /> */}
        {/* <Test /> */}
        {/* <Exstate13 /> */}
        {/* <Exstate14 /> */}
        {/* <Exstate15 /> */}
        {/* <Exstate16 /> */}
        {/* <Exstate17 /> */}
        {/* <Exstate18 /> */}
        {/* <Blog /> */}
        {/* <MovieReview /> */}
        {/* <ShoppingList /> */}
        {/* <CommentBoard /> */}
        {/* <ScoreManager /> */}
        {/* <ModalChange /> */}
        {/* <LoginView /> */}
        {/* <PromptChange/> */}
        {/* <Parent /> */}
        {/* <AuthApp /> */}
        {/* <MovieApp /> */}
        {/* <Blogc /> */}
        {/* <NewMovie /> */}
        {/* <ShopApp /> */}
        {/* <FoodApp /> */}
        {/* <Hover01 /> */}
        {/* <Hover02 /> */}
        {/* <Hover03 /> */}
        {/* <Hover04 /> */}
        {/* <ChangeImg01 /> */}
        {/* <ChangeImg02 /> */}
        {/* <ChangeImg03 /> */}
        {/* <ChangeImg04 /> */}
        {/* <TableOrderApp /> */}
        {/* <Eff01 /> */}
        {/* <Eff02 /> */}
        {/* <Eff03 /> */}
        {/* <Eff05 /> */}
        {/* <Eff06 /> */}
        {/* <Eff08 /> */}
        {/* <Eff09 /> */}
        {/* <Ex01 /> */}
        {/* <Ex11 /> */}
        <ExJ07 />
    </>
  )
}

// export는 App컴포넌트를 밖으로 내보낸다.
export default App
