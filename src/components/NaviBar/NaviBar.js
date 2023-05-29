import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./css/NaviBar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { doGet } from "../../utils/requests";
import { Helmet } from "react-helmet-async";

function NaviBar() {
  const location = useLocation();
  const [title, setTitle] = useState("EnergyCoach");
  const [description, setDescription] = useState("EnergyCoach Description");

  async function getMeta(url) {
    try {
      let response = await doGet("meta" + (url == "/" ? "/main" : url));
      setTitle(response["data"]["title"]);
      setDescription(response["data"]["description"]);
    } catch (e) {
      console.log(e + " META ERROR");
    }
  }

  useEffect(() => {
    getMeta(location.pathname + location.search);
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 100);
  }, []);

  return (
    <Navbar expand="lg" className="main_header_section">
      <Helmet>
        <title>{title}</title>
        <meta name="description" value={description} />
      </Helmet>
      <Container className="navbar_wrapper">
        <Navbar.Brand style={{ marginRight: "90px", textDecoration: "none" }}>
          <Link to={"/"} className="navbar_brand">
            React-Bootstrap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar">
            <Dropdown>
              <Dropdown.Toggle
                className="navbar_item"
                style={{ background: "none", border: "none" }}
              >
                <Link to={"/services"} className="navbar_item_link">
                  Услуги
                </Link>
              </Dropdown.Toggle>

              <Dropdown.Menu variant="white" className="shadow" show={isOpen}>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Консультации"
                >
                  Консультации
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Наставничество "
                >
                  Наставничество{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Диагностика и изменение судьбы"
                >
                  Диагностика и изменение судьбы{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Сеанс Таро "
                >
                  Сеанс Таро{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Нейромедитация "
                >
                  Нейромедитация{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Рунический сеанс"
                >
                  Рунический сеанс
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Письмо Души"
                >
                  Письмо Души
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Сеанс Access Bars"
                >
                  Сеанс Access Bars
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Сеанс Access Facelift"
                >
                  Сеанс Access Facelift
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Пакеты услуг"
                >
                  Пакеты услуг
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Для корпоративных клиентов"
                >
                  Для корпоративных клиентов
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/services?category=Марафоны и курсы"
                >
                  Марафоны и курсы
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link className="navbar_item">
              <Link to={"#"} className="navbar_item_link">
                Магазин
              </Link>
            </Nav.Link>
            <Nav.Link className="navbar_item">
              <Link to={"/about"} className="navbar_item_link">
                О себе
              </Link>
            </Nav.Link>
            <Nav.Link className="navbar_item">
              <Link to={"/contact"} className="navbar_item_link">
                Контакты
              </Link>
            </Nav.Link>
            <Nav.Link className="navbar_item">
              <Link to={"/testimonials"} className="navbar_item_link">
                Отзывы
              </Link>
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle
                className="navbar_item"
                style={{ background: "none", border: "none" }}
              >
                <Link to={"/blog"} className="navbar_item_link">
                  Блог
                </Link>
              </Dropdown.Toggle>

              <Dropdown.Menu variant="white" className="shadow" show={isOpen}>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Отношение к себе"
                >
                  Отношение к себе
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Отношения с партнером"
                >
                  Отношения с партнером
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Отношения с родовой системой"
                >
                  Отношения с родовой системой
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Отношения родителей и детей"
                >
                  Отношения родителей и детей
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Личностное развитие"
                >
                  Личностное развитие
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Предназначение и путь"
                >
                  Предназначение и путь
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Ресурсное состояние "
                >
                  Ресурсное состояние{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Деньги и самореализация"
                >
                  Деньги и самореализация
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Утрата близкого"
                >
                  Утрата близкого
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Внешность и тело"
                >
                  Внешность и тело
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Эмоциональное и физическое состояние"
                >
                  Эмоциональное и физическое состояние
                </Dropdown.Item>
                <Dropdown.Item
                  className="navbar_item_link"
                  href="/blog?category=Сложный выбор"
                >
                  Сложный выбор
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
