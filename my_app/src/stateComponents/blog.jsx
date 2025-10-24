import { useState } from "react";

export default function Blog(){
    const [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
    const [likes, setLikes] = useState([0,0,0]);
    const [inputValue, setInputValue] = useState('');
    // 모달 창이 안보이는 상태를 false로 지정
    const [modalOpen, setModalOpen] = useState(false)
    // 선택된 글의 인덱스 지정
    const [seletedIndex, setSelectedIndex] = useState(null)

    // ---------------------------------------------------------------------------------------
    // 실행 로직 함수
    // 글 추가 함수
    const addPost = () => {
        // 글을 입력하면 위로 추가 배열이름.unShift
        // 배열이나 오브젝스 , 오브젝트배열은 React에서 useState 훅 사용시 힙의 메모리 주소가 같은지 다른지를 비교하여 랜더링을 한다.
        // 고로 얕은 복사가 필요하다
        // 얕은 복사 형식 : [...배열이름]

        // 예외 처리 : 혹시모를 데이터의 필요없는 오류로부터 데이터가 정확하게 입력되도록 로직으로 예외를 처리하는 작업
        // input에 입력받은 값이 공백일 때는 추가금지 코드
        if(inputValue.trim() === '' ){
            return alert('자료를 입력하세요')
        }
        let postCopy = [...posts]
        // 위로추가
        postCopy.unshift(inputValue)
        // setPosts 를 이용해서 변경된 변수를 담아둔다
        setPosts(postCopy)

        // 좋아요 추가
        let likeCopy = [...likes]
        likeCopy.unshift(0)
        setLikes(likeCopy)

        // input에 입력한 글이 발행버튼 클릭과 동시에 삭제되어야함
        setInputValue('')
    }
    // 글 삭제
    // 내가 삭제할 글의 index번호를 모르면 삭제 x
    const delPost = (index) => {
        // 배열 삭제 메서드 : splice(시작위치, 삭제할 길이)
        let postCopy = [...posts]
        let likeCopy = [...likes]
        postCopy.splice(index,1)
        setPosts(postCopy)

        likeCopy.splice(index,1)
        setLikes(likeCopy)
    }
    // 좋아요 증가 함수
    // 증가해야하는 index번호를 모르면 증가 x
    const addLike = (index) => {
        let likeCopy = [...likes]
        // 좋아요 증가
        likeCopy[index] += 1
        // 업데이트
        setLikes(likeCopy)
    }
    // ---------------------------------------------------------------------------------------
    // react에서 로직 함수 생성 후 return안의 태그에 지정하는 방식의 차이로 인해 랜더링이 안될수 있다.
    // 1. onClick = {addPost} : 클릭할때마다 실행 (정상)
    // 2. onClick = {() => addpost()} : 클릭할때마다 실행 (정상)
    // 3. onClick = {addPost()} : 랜더링시 바로 실행 후 사라짐 -> 즉시실행 함수

    return(
        <>
            {posts.map((item,index) => (
                <div key={index}><h4 onClick={() => {setModalOpen(true); setSelectedIndex(index);}}>{item}
                    <button onClick={() => addLike(index)}>👍</button> <span>{likes[index]}</span></h4>
                    <p>11월 1일 발생</p>
                    <button type="button" onClick={() => delPost(index)}>삭제</button>
                </div>
            ))}
            <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="글 제목 입력" />
            <button type="button" onClick={addPost} >글 발행</button>
            {/* 자식 모달에게 보낼 데이터 */}
            {/* 1. 글 제목 */}
            {/* 2. 글 index */}
            {/* 3. 모달 닫기 함수 */}
            {/* 4. color */}
            {modalOpen && <Modal 
            color={'lightgray'} 
            title={posts}
            setPosts = {setPosts}
            index = {seletedIndex}
            onclose ={() => setModalOpen(false)}
            />}
        </>
    )
}

// 자식 컴포넌트 모달
function Modal(props){
    // update함수 필요
    // 업데이트 조건
    // 1. props.title을 얕은 복사한다.
    //    let titleCopy = [...props.title]
    // 2. prompt("새 제목을 입력하세요",'')
    //    titleCopy[props.index] = prompt("새 제목을 입력하세요",titleCopy[props.index])
    // 3. titleCopy[props.index] = titleCopy[0]
    // 4. 수정한 글 제목을 업데이트
    //    props.setPosts(titleCopy)

    let upDate = () => {
        let titleCopy = [...props.title]
        titleCopy[props.index] = prompt("새 제목을 입력하세요." , titleCopy[props.index]) || titleCopy[props.index]
        props.setPosts(titleCopy)
        // if(titleCopy[props.index]){
        //    props.setPosts(titleCopy) 
        // }else{
        //     titleCopy[props.index]
        // }
    }

    return(
        <>
            <div className="modal" style={{backgroundColor:props.color}}>
                <h4>{props.title[props.index]}</h4>
                <p>날짜 : 11월 1일</p>
                <p>상세내용 : 여기에 내용을 넣어보세요</p>
                <button onClick={upDate}>글수정</button>
                <button onClick={props.onclose}>닫기</button>
            </div>
        </>
    )
}