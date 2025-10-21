function UserCard02(props){
    return(
        <>
            <div>
                <p>이름 : {props.name}</p>
                <p>나이 : {props.age}</p>
                <p>도시 : {props.city}</p>
            </div>
        </>
    )
}
export default UserCard02
