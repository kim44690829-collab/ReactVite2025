export default function MovieModal(props){
    // 투명 회색 오버레이 -> 모달

    return(
        <div style={{
            position:'fixed', top:0, left:0, 
            width:'100%', height:'100%', 
            backgroundColor:'rgba(0,0,0,0.3)',
            display:'flex', justifyContent:'center', alignItems:'center'
            }}>
            <div style={{backgroundColor:'white', padding:'20px', borderRadius:'5px', width:'300px', }}>
                {/* 영화 제목 */}
                <h4>{props.selectMovie.title}</h4>
                {/* 영화 리뷰 부분 */}
                <p>{props.selectMovie.review === '' ? '아직 작성된 리뷰가 없습니다.' : props.selectMovie.review}</p>
                <button type="button" onClick={props.onClose}>닫기</button>
            </div>
        </div>
    )
}