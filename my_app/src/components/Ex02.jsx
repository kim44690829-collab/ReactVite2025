// 컴포넌트 이름은 대문자 시작
function Ex02(){
    return(
        <>
            <div className="profile">
                <h3>자기소개</h3>
                <p className="infoSelf">이름: 홍길동</p>
                <p className="infoSelf">나이: 25세</p>
                <p className="infoSelf">취미: 독서, 운동</p>
            </div>
        </>
    )
}
// 반드시 export로 내보내줘야함
export default Ex02