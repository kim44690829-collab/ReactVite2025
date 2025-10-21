// 함수 이름은 반드시 대문자로 작성한다.
function Test12(){
    // 문제 : score의 값에 따라 다른 색상을 표시하시오
    // score 80이상 -> 파란색
    // score 60이상 -> 초록색
    // 그외 -> 빨간색
    // 단 삼항연산자 이용

    const score = 90;
    // 함수 안에는 반드시 return() 안에 작성한다.
    return(
        // <></> 빈 태그인 프래그먼트 안에 작성한다.
        <>
            <h1 style={{color:score >= 80 ? 'blue' : score >= 60 ? 'green' : 'red'}}>점수 : {score}</h1>
        </>
    )
}
// Test12 함수를 내보내기
export default Test12;