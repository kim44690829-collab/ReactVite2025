// 부모 컴포넌트
function Parent02(){
    return <Welcome name = '길동' />
}
export default Parent02



// 자식 컴포넌트
// props를 사용하고 싶으면 자식과 부모가 같은 jsx파일 안에 존재해야함.
function Welcome(props){
    return <h1>안녕하세요. {props.name}님</h1>
}