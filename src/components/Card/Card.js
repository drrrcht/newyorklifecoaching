import React from "react";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./css/Card.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/requests";

export const Card = ({ img, title, href, description }) => {
  return (
    <>
      <div className={"wrapper_card"}>
        <Link to={href} style={{ textDecoration: "none" }}>
          <div className={"img_card"}>
            <img src={`${baseUrl}${img}`} />
          </div>
        </Link>

        <div className={"wrapper_text_card"}>
          <Link to={href} style={{ textDecoration: "none" }}>
            <div className={"header_card"}>{title} ...</div>
          </Link>

          <div className={"text_card"}>
            <p>“{description} ...</p>
          </div>
          <Link to={href} style={{ textDecoration: "none" }}>
            <div className={"read_more-blog"}>
              <span>Читать</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
