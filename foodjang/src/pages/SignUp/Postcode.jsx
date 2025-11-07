import DaumPostcode from 'react-daum-postcode'
import { useState } from 'react'
import '../SignUp/Postcode.css'

export default function PostCode(){
    const [zipcode, setZipcode] = useState('')
    const [address, setAddress] = useState('')
    const [addOpen,setAddOpen] = useState(false)

    const addressHandeler = (data) => {
        let arr = '';
        if(data.userSelectedType === 'R'){
            arr = data.roadAddress;
        }else{
            arr = data.jibunAddress;
        }
        setZipcode(data.zonecode)
        setAddress(arr)
        modalHandeler();
    }

    const modalHandeler = () => {
        setAddOpen(!addOpen)
    }

    return(
        <div className='addInput'>
                <input type='text' value={zipcode} placeholder='우편번호' name='post' id='post' style={{width:'100px'}} readOnly/>
                <input type='text' value={address} placeholder='도로명 주소' name='userAddress' id='userAddress' />
                <input type='text' placeholder='상세주소를 작성해주세요' name='detailAddress' id='detailAddress' /> 
                <button type='button' onClick={modalHandeler} className='addBtn'>주소검색</button>
            {addOpen && 
            <div>
                <div className='overlay'></div>
                <div className='modal'>
                    <div className='addressFind'>
                        <DaumPostcode onComplete={addressHandeler} style={{margin:'227px auto', borderTop:'1px solid black', borderBottom:'1px solid black'}}/>
                    </div>
                </div>
            </div>
            }
            
        </div>
    )
}