// 컴포넌트 이름은 대문자 시작
function Ex06(){
    return(
        <>
            <div className="gallery">
                <div className="imgCard">
                    <img src="/images/image02.png" alt="풍경2" />
                    <p>아름다운 산</p>
                </div>
                <div className="imgCard">
                    <img src="/images/image01.png" alt="풍경1" />
                    <p>푸른 바다</p>
                </div>
                <div className="imgCard">
                    <img src="/images/image03.png" alt="풍경3" />
                    <p>도시 야경</p>
                </div>
            </div>
        </>
    )
}
// 반드시 export로 내보내줘야함
export default Ex06