import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>(""); // 현재 날짜
  const [showCalendar, setShowCalendar] = useState<boolean>(false); // 달력 표시 여부
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // 선택된 날짜

  useEffect(() => {
    const today = new Date();
    const formattedDate = format(today, "MM.dd.(EEE)", { locale: ko });
    setCurrentDate(formattedDate);
  }, []);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar); // 달력 열기/닫기
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date); // 날짜 선택
    const formattedDate = format(date, "MM.dd.(EEE)", { locale: ko });
    setCurrentDate(formattedDate); // 선택된 날짜를 업데이트
    setShowCalendar(false); // 달력 닫기
  };

  return (
    <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <button
        onClick={toggleCalendar}
      >
        {currentDate}
      </button>

      {showCalendar && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          <Calendar value={selectedDate} onChange={(date) => handleDateChange(date as Date)} />
        </div>
      )}
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </header>
  );
};

export default Header;