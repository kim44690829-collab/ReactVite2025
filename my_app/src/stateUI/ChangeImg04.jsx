import { useState } from "react";

export default function ChangeImg04(){

    // category : 1, category : 2 => 카테고리별 이미지를 탭메뉴에 출력
    // 조건에 만족하는 값을 하나가 아니라 여러개 배열로 추출 
    // -> 배열이름.filter((요소, 인덱스, 원본배열) => {return 조건})
    // 조건에 만족하는 새로운 배열 반환
    // 조건에 만족하지 않으면 빈 배열([])을 반환
    // imgs.filter((img) => 조건) => 조건에 만족 => [{id:1},{id:2},{id:3},{id:4}]
    const imgs = [
        { id: 1, name: 'pic-1.jpg', category: 1 },
        { id: 2, name: 'pic-2.jpg', category: 1 },
        { id: 3, name: 'pic-3.jpg', category: 1 },
        { id: 4, name: 'pic-4.jpg', category: 1 },
        { id: 5, name: 'tree-1.jpg', category: 2 },
        { id: 6, name: 'tree-2.jpg', category: 2 },
        { id: 7, name: 'tree-3.jpg', category: 2 },
        { id: 8, name: 'tree-4.jpg', category: 2 },
    ];
    // 내가 선택한 카테고리의 초기 값을 1로 줌
    //  -> 카테고리 = 1의 배경이미지가 출력되도록함
    const [selectCate,setSelectCate] = useState(1)

    // 배열이름.filter()
    const imgCategory = imgs.filter((item) => item.category === selectCate)
    console.log('여기')
    console.log(imgCategory)
    
    return(
        <>
            <div>
                <h2>이미지 탭 전환 예제</h2>
                <button type="button" onClick={() => setSelectCate(1)} >배경</button>
                <button type="button" onClick={() => setSelectCate(2)} >나무</button>
                <div className="img-area">
                    {/* map() => filter추출 -> 배열 */}
                    {imgCategory.map((img) => (
                        <img key={img.id} src={`/images/${img.name}`} alt={img.name}/>
                    ))}
                </div>
            </div>
        </>
    )
}