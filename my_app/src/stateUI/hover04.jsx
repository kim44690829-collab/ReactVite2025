import { useState } from "react";

export default function Hover04(){
    // activeTab = 이동할 탭 찾을때 사용
    const [activeTab,setActiveTab] = useState(null)
    const tabs = [
        {id:1, title:'HTML', content:'HTML은 웹의 구조를 담당한다.'},
        {id:2, title:'CSS', content:'CSS는 스타일을 담당한다.'},
        {id:3, title:'JavaScript', content:'JavaScript은 동작을 담당한다.'},
    ]

    // 활성화된 탭 내용을 찾는 코드가 필요
    // 배열이름.find((요소, 인덱스, 원본배열) => {return 조건})
    // 조건을 만족하는 첫번째 요소(그 객체 또는 값)를 반환, 못찾으면 undefined를 반환
    // 검색이나 상세보기 등에서 유용
    let contentText = "탭 위에 마우스를 올려보세요" //기본 text
    if(activeTab !== null){
        // activeTab !== null : activeTab과 같은 id를 가진 탭을 찾았다.
        // findTab에 1, 2, 3 등 id 값과 오브젝트전체가 들어감 아니면 undefined
        const findTab = tabs.find((item) => item.id === activeTab)
        console.log('여기까지')
        console.log(findTab)
        // 탭을 찾았으면 그 탭의 내용(content)을 변경
        // contentText = content로 수정한다.
        if(findTab){
            console.log('여기까지2')
            console.log(findTab)
            contentText = findTab.content
            console.log(contentText)
        }
    }

    return(
        <div style={{width:'400px', margin:'50px auto',}}>
            <h3>Hover Tab Menu</h3>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                {tabs.map((tab) => (
                    <div 
                    key={tab.id} style={{cursor:'pointer'}}
                    onMouseEnter={() => setActiveTab(tab.id)} // 마우스 활성화
                    onMouseLeave={() => setActiveTab(null)} // 마우스 비활성화
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            {/* 탭 영역 */}
            <div style={{marginTop:'20px', padding:'15px', backgroundColor:'#fefefe', borderRadius:'5px', height:'50px'}}
            >{contentText}</div>
        </div>
    )
}