import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ diaryText, onNext }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNext = () => {
    if (location.pathname === '/writing') {
      if (onNext()) {
        navigate('/emotion', { state: { diaryText } });
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-back">
          <span className="back" onClick={handleBack}>뒤로</span>
        </div>
        <div className="header-left">
          <span className="date">10월 29일 화요일</span>
        </div>
        <div className="header-right">
          {location.pathname === '/writing' && (
            <span className="next" onClick={handleNext}>다음</span>
          )}
          {location.pathname === '/emotion' && (
            <span className="next" onClick={handleNext}>완료</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
