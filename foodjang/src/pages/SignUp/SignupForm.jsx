import '../SignUp/SignupForm.css'
import PostCode from './Postcode'

export default function SignupForm(){

    return(
        <div className='signup_wrap'>
            <h2>회원 가입</h2>
            <form className='signup_form'>
                <ul>
                    <li>
                        <label htmlFor='userId'>아이디<span>*</span></label>
                        <input type='text' placeholder='아이디' name='userId' id='userId' className='input1' />
                    </li>
                    <li>
                        <label htmlFor='userPw1' >비밀번호<span>*</span></label>
                        <input type='password' placeholder='비밀번호' name='userPw1' id='userPw1' className='input1' />
                    </li>
                    <li>
                        <label htmlFor='userPw2'>비밀번호 확인<span>*</span></label>
                        <input type='password' placeholder='비밀번호' name='userPw2' id='userPw2' className='input1' />
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor='userName'>이름<span>*</span></label>
                        <input type='text' placeholder='이름' name='userName' id='userName' className='input1' />
                    </li>
                    <li>
                        <label htmlFor='usertel'>휴대폰 번호<span>*</span></label>
                        <input type='tel' placeholder='- 없이 입력하세요' name='usertel' id='usertel' className='input1' />
                        <button type='button' className='phoneBtn'>휴대폰 본인인증</button>
                    </li>
                    <li>
                        <span style={{marginRight:'268px'}}>주소</span>
                        {/* 주소 넣을 공간 */}
                        <PostCode />
                    </li>
                    <li>
                        <span className='gen'>성별<span>*</span></span>
                        <input type='radio' id='' name='gender' />
                        <label htmlFor='man' className='laberRadio'>남자</label>
                        <input type='radio' id='' name='gender' />
                        <label htmlFor='woman' className='laberRadio'>여자</label>
                    </li>
                    <li>
                        <span className='gen'>생일<span>*</span></span>
                        <input type='text' placeholder='YYYY' className='birth' />
                        <input type='text' placeholder='MM' className='birth' />
                        <input type='text' placeholder='DD' className='birth' />
                    </li>
                    <li>
                        <label htmlFor='userEmail'>이메일</label>
                        <input type='email' placeholder='이메일' name='userEmail' id='userEmail' className='input1' />
                    </li>
                    <li>
                        <label htmlFor='recommendId'>추천인 아이디</label>
                        <input type='text' name='recommendId' id='recommendId' className='input1' />
                    </li>
                    <li>
                        <input type='checkbox' name='agree1' id='agree1' />
                        <label htmlFor='agree1' style={{fontSize:'15px', marginRight:'30px'}}>무료배송, 할인쿠폰 등 혜택/정보 수신(선택)</label>
                        <input type='checkbox' name='agree2' id='agree2' />
                        <label htmlFor='agree2' style={{width:'100px'}}>SMS</label>
                        <input type='checkbox' name='agree3' id='agree3' />
                        <label htmlFor='agree3' style={{width:'100px'}}>이메일</label>
                    </li>
                    <li>
                        <input type='checkbox' name='up14' id='up14' />
                        <label htmlFor='up14'>만 14세 이상 동의(필수)</label>
                    </li>
                    <li>
                        <input type='checkbox' name='agree4' id='agree4' />
                        <label htmlFor='agree4'>이용약관 동의(필수) </label>
                    </li>
                    <li>
                        <input type='checkbox' name='agree5' id='agree5' />
                        <label htmlFor='agree5'>개인정보 수집 및 이용 동의(필수)</label>
                    </li>
                    <button type='submit' className='signupBtn'>동의하고 가입하기</button>
                </ul>
            </form>
        </div>
    )
}