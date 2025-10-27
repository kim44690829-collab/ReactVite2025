// 자식 : UI
export default function Modal(props){
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