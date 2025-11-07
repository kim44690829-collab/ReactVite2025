import '../Addr/Join.css'
import PostCodeEx from './PostcodeEx'

// 회원 가입함수
export default function Join(){
    return(
        <div id='joinWrap'>
            <h1>JOIN</h1>
            <p>회원가입하시면 다양한 혜택을 누리실 수 있습니다.</p>
            <div className='title'>
                <h2>회원 정보 입력</h2>
                <p>* 필수 입력사항입니다.</p>
            </div>
            <form action='#' method='post'>
                <ul className='joinForm'>
                    <li>
                        <label htmlFor='userID'>아이디</label>
                        <input type='text' name='userID' id='userID' />
                    </li>
                    <li>
                        <label htmlFor='userPw'>비밀번호</label>
                        <input type='password' name='userPw' id='userPw' />
                    </li>
                    <li>
                        <label htmlFor='userPwRe'>비밀번호 확인</label>
                        <input type='password' name='userPwRe' id='userPwRe' />
                    </li>
                    <li>
                        <label htmlFor='userName'>이름</label>
                        <input type='text' name='userName' id='userName' />
                    </li>
                    <li>
                        <label htmlFor='userEmail'>이메일</label>
                        <input type='email' name='userEmail' id='userEmail' />
                    </li>
                    <li>
                        <label htmlFor='userPhone'>휴대폰번호</label>
                        <input type='tel' name='userPhone' id='userPhone' />
                    </li>
                    <li>
                        <label>주소</label>
                        {/* 이부분에 postcode 태그로 불러올 예정 */}
                        <PostCodeEx />
                    </li>
                </ul>
                <button type='submit' id='joinBtn'>회원가입</button>
            </form>
        </div>
    )
}