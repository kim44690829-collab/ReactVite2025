// 자식은 UI
//  <PostList 
//             posts = {posts} 
//             likes = {likes} 
//             setModalOpen ={setModalOpen} 
//             setSelectedIndex = {setSelectedIndex} 
//             delPost = {delPost} 
//             addLike = {addLike} 
//             />
export default function PostList(props){
    return(
        <>
            <div>
                {props.posts.map((item,index) => (
                    <div key={index}><h4 onClick={() => {props.setModalOpen(true); props.setSelectedIndex(index);}}>{item}
                                                {/* 버블링 : 자식을 클릭했는데 부모요소가 같이 클릭되는 현상 (태그상 부모 -> h4) */}
                                                {/* 버블링을 해결하는 매소드 : e.stopPropagation(); */}
                        <button onClick={(e) => {e.stopPropagation(); props.addLike(index);}}>👍</button> <span>{props.likes[index]}</span></h4>
                        <p>11월 1일 발생</p>
                        <button type="button" onClick={() => props.delPost(index)}>삭제</button>
                    </div>
                ))}
            </div>
        </>
    )
}