function Counter01(){
    // 버튼을 클릭해도 콘솔의 값는 누적되어 보여짐
    // 그러나 화면의 현재 count의 값은 숫자가 변하지 않음
    // count는 단순히 메모리 안에서만 값이 변경되고 react는 값이 변경된지 모름
    // 값이 동적으로 변해야 하는 경우는 무조건 useState() 훅(hook)사용해야함
    let count = 0;

    function inCrease(){
        count = count + 1;
        console.log('count 누적 : ' + count)
    }

    return(
        <>
            <p>현재 카운트 : {count}</p>
            <button type="button" onClick={inCrease}>+1</button>
        </>
    )
}
export default Counter01