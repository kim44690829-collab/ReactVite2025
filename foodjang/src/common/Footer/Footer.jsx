import { useState } from "react";
import { Link } from "react-router-dom";
import '../Footer/Footer.css'

export default function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_top">
                <div className="footer_top_left">
                    <Link to='/infocompany' className="left">회사 소개</Link>
                    <Link to='/notice' className="left">공고</Link>
                    <Link to='/guide' className="left">이용안내</Link>
                    <Link to='privacypolicy' className="left">개인정보처리방침</Link>
                    <Link to='termsofuse' className="left">이용약관</Link>
                    <Link to='partnershipinquiry' className="left">입점문의</Link>
                    <Link to='bulkorder' className="left">대량주문</Link>
                    <Link to='oneononeinquiry' className="left">1:1문의</Link>
                    <Link to='userreview' className="left">이용후기</Link>
                </div>
                <div className="footer_top_right">
                    <Link to='/' className="right">홈으로</Link>
                    <Link to='' className="right">위로가기</Link>
                </div>
            </div>
            <div className="footer_center">
                <div className="center_left">
                    <p className="p1">고객센터</p>
                    <p className="p1">1899-4797</p>
                    <p className="p2">평일 10:00 ~ 17:00</p>
                    <p className="p2">점심시간 12:00 ~ 13:00</p>
                    <p className="p2">토요일/일요일/공휴일 휴무</p>
                </div>
                <div className="center_right">
                    <div className="right_top">
                        <Link to='/'>
                            <img src="https://foodjatr5229.cdn-nhncommerce.com/data/skin/front/moment/img/banner/bb0ea61f24f029687882808839603e4a_84354.gif" alt="main" />
                        </Link>
                        <div className="right_span">
                            <span className="span1">COMPANY : (주)푸드장 / OWNER : 조제효 / CALL CENTER : 1899-4797 / FAX : 02-356-8448</span> <br/>
                            <span className="span2">
                                ADDRESS : 본사 (사무실) - 서울특별시 서초구 사임당로 52(서초동) 2층 푸드장 <br/>
                                반품 주소지 (물류센터) - 경기도 고양시 일산동구 감내길 22푸드장
                            </span>
                        </div>
                    </div>
                    <p>
                        개인정보관리책임자 : 조제효 help@foodjang.com <br/>
                        사업자등록번호 : [188-87-00048] / 통신판매업 신고번호 : 제2023-서울서초-0995호 [사업자정보확인] <br/>
                        입금계좌 : (주)푸드장 - 기업은행 55503373004011 (기타 은행은 고객센터로 문의) <br/>
                        <br/>
                        Copyright (c) by foodjang.com. All Right Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}