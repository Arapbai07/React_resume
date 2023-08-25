import React from "react";
import "../components/Index.css";

function App() {
  return (
    <div className="container">
      <h1>Мое резюме</h1>
      <div class="animated-section">
        <h2>Личная информация</h2>
        <ul>
          <li>
            <span class="highlight">Имя:</span> Арапбай Токталиев
          </li>
          <li>
            <span class="highlight">Возраст:</span> 17
          </li>
          <li>
            <span class="highlight">Адрес:</span> Бишкек,Кыргызстан
          </li>
        </ul>
      </div>
      <div class="animated-section">
        <h2>Образование</h2>
        <ul>
          <li>
            <span class="highlight">Школа:</span> Средняя школа
          </li>
          <li>
            <span class="highlight">Степень:</span> Ударник
          </li>
          <li>
            <span class="highlight">Специализация:</span> Охранник своего же
            дома
          </li>
        </ul>
      </div>
      <div class="animated-section">
        <h2>Опыт работы</h2>
        <ul>
          <li>
            <span class="highlight">Компания:</span> Makers : ,
            <span class="highlight"> Должность:</span> Студент
          </li>
        </ul>
      </div>
      <img
        src="https://img.freepik.com/premium-vector/young-man-programmer-working-on-computer-with-code-on-screen-student-programming-vector-concept_53562-4999.jpg"
        alt=""
      ></img>

      <footer>
        <div class="social-links">
          <a href="#" class="social-link">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2023 Мое резюме. Все права защищены.</p>
      </footer>
      <style></style>
    </div>
  );
}

export default App;
