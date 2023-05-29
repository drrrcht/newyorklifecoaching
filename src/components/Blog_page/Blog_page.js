import React, { useEffect, useState } from "react";
import "./css/Blog_page.css";
import { Link, useParams } from "react-router-dom";
import { baseUrl, doGet } from "../../utils/requests";
import { Testimonial } from "../Testimonial/Testimonial";

export const Blog_page = ({ purpose }) => {
  const { id } = useParams();
  const [content, setContent] = useState({});

  async function getServiceContent() {
    var response = await doGet(`products/${id.replace(" ", "%20")}/`);
    setContent(response.data);
  }

  async function getBlogContent() {
    var response = await doGet(`blogs/${id.replace(" ", "%20")}/`);
    setContent(response.data);
  }

  useEffect(() => {
    if (purpose === "service") {
      getServiceContent();
    } else if (purpose === "blog") {
      getBlogContent();
    }
  }, [id]);

  return (
    <>
      <div class="faq_header">
        <p>“{content.title}”</p>
      </div>
      <div className={"page_content_wrapper"}>
        <img src={`${baseUrl}${content.image}`} alt="img" />
        <div className={"main_text__blog-page"}>
          <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
        </div>
      </div>
      <div className={"page_content_wrapper"}>
        <div className={"main_text__blog-page"}>
          <div dangerouslySetInnerHTML={{ __html: content.subcontent }}></div>
        </div>
      </div>
      <div className={"content_tags_wrapper tags_wrapper"}>
        {(content.tags ?? []).map((tag, index) => (
          <Link
            key={index}
            to={
              `/${purpose == "service" ? "services" : "blog"}?category=` +
              tag.title
            }
            style={{ textDecoration: "none" }}
          >
            <div className="catalog_item_blog">{tag.title}</div>
          </Link>
        ))}
      </div>
      {(content.testimonials ?? []).length > 0 ? (
        <div className={"page_content_wrapper"}>
          <div className="centered-title" style={{ margin: "0" }}>
            Отзывы
          </div>
          <div className="testimonials_wrapper">
            {(content.testimonials ?? []).map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.author}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
