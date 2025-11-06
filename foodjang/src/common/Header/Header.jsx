import { useState } from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'

export default function Header(){
    const bookMark = () => {
        alert('Ctrl+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.')
    }
    return(
        <div className="header_container">
            <div className="header_top">
                <div className="top_left">
                    <button type="button" className="bookMark" onClick={bookMark}>+BOOKMARK</button>
                </div>
                <div className="top_right">
                    <Link to='/login' className="right">로그인</Link>
                    <Link to='/signup' className="right">회원가입</Link>
                    <Link to='/wishlist' className="right">찜 목록</Link>
                    <Link to='/cart' className="right">🛒</Link>
                </div>
            </div>
            <div className="header_center">
                <Link to='/'>
                    <img src="https://foodjatr5229.cdn-nhncommerce.com/data/skin/front/moment/img/banner/bb0ea61f24f029687882808839603e4a_84354.gif" alt="main" />
                </Link>
                <input type="text" placeholder="벌집삼겹살"/>
                <button type="button">🔍</button>
            </div>
            <div className="header_btm">
                <span>⭐카테고리</span>
                <Link to='/productall' className="menu">전체 상품</Link>
                <Link to='/bestproduct' className="menu">베스트</Link>
                <Link to='/review' className="menu">리뷰</Link>
                <Link to='/price' className="menu">가격</Link>
                <Link to='/country' className="menu">나라</Link>
            </div>
        </div>
    )
}