// useState import 안하면 사용 못함
import React,{useState} from "react";

// props는 부모에서 자식으로 데이터를 읽기전용으로 보내준다
// props는 값, 변수, 함수 모두 보낼수 있다.

// 부모 컴포넌트
export default function Exstate18(){
  const [num , setNum] = useState(0);
  return(
    <>
      <p>값 : {num}</p>
      <Child18 increase={() => {setNum(num + 1)}} />
    </>
  )
}

// 자식 컴포넌트
function Child18(props){
  return(
        <>
          <button onClick={props.increase}>+1</button>
        </>
    )
}


// export default function Exstate18(){
//   const [num , setNum] = useState(0);
//   return(
//     <>
//       <Child18 number = {num} numChange = {() => setNum(num+1)}/>
//     </>
//   )
// }

// function Child18({number, numChange}){
//   return(
//         <>
//           <p>값 : {number}</p>
//           <button onClick={numChange}>+1</button>
//         </>
//     )
// }