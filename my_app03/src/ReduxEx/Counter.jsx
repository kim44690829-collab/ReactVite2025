// Counter.jsx 파일은 컴포넌트 파일로 UI
// useSelector와 useDispatch인 훅을 이용하여 상태를 읽고 액션을 보낸다
// useDispatch는 단순히 값만 보낸다.
// counterReducer가 그 값을 처리해서 store에 저장한다.
// Counter.jsx 가 useSelector로 그걸 읽는다.
import { useSelector, useDispatch } from "react-redux";

export default function Counter(){
    // useSelector를 이용해서 state의 count를 읽어온다
    const count = useSelector(state => state.count)
    console.log('처음', count)
    // useDispatch를 이용해서 내보낸다.
    const dispatch = useDispatch()

    // + 버튼은 10까지 => 10 초과 : aleat
    const plusBtn = () => {
        if(count < 10){
            dispatch({type:'INCREMENT'})
        }else{
            alert('10이 최대입니다.')
        }
    }

    // -버튼은 0까지 => 0미만 : aleat
    const minusBtn = () => {
        if(count > 0){
            dispatch({type:'DECREMENT'})
        }else{
            alert('0이 최소입니다.')
        }
    }

    return(
        <>
            <h2>Count {count}</h2>
            <button type="button" onClick={plusBtn}>+</button>
            <button type="button" onClick={minusBtn}>-</button>
        </>
    )
}