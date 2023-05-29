// import React, { useEffect, useState } from "react";
// import { Card } from "../components/Card/Card";
// import "bootstrap/dist/css/bootstrap-grid.min.css";
// import "../App.css";
// import { doGet } from "../utils/requests";
// import { Link } from "react-router-dom";

// export const Blog = () => {
//   const queryString = window.location.search;
//   const params = new URLSearchParams(queryString);
//   const [tags, setTags] = useState([]);
//   const [selectedTag, setSelectedTag] = useState(params.get("category"));

//   async function getTags() {
//     let response = await doGet("blogs/all-category");
//     setTags(response.data);
//   }

//   useEffect(() => {
//     getTags();
//   }, []);

//   return (
//     <div className={"wrapper_all_blog"}>
//       <div className="faq_header">
//         <p>Блог</p>
//       </div>
//       <div className={"tags_wrapper container"}>
//         {tags.map((tag, index) => (
//           <Link
//             key={index}
//             onClick={() => setSelectedTag(tag.title)}
//             to={"/blog?category=" + tag.title}
//             style={{ textDecoration: "none" }}
//           >
//             <div
//               className="catalog_item_blog"
//               id={
//                 selectedTag == tag.title ? "active-red-catalog-item-blog" : ""
//               }
//             >
//               {tag.title}
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className={"container"}>
//         <div className={"cards_row"}>
//           <div className={"col-sm-4 col"}>
//             <Card />
//           </div>
//           <div className={"col-sm-4 col"}>
//             <Card />
//           </div>
//           <div className={"col-sm-4 col"}>
//             <Card />
//           </div>
//           <div className={"col-sm-4 col"}>
//             <Card />
//           </div>
//           <div className={"col-sm-4 col"}>
//             <Card />
//           </div>
//           <div className={"col-sm-4 col"}>
//             <Card />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../App.css";
import { doGet } from "../utils/requests";
import { Link } from "react-router-dom";

export const Blog = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState([]);
  const [selectedTag, setSelectedTag] = useState(params.get("category"));

  async function getTags() {
    let response = await doGet("blogs/all-category");
    setTags(response.data);
  }

  async function getContent() {
    if (selectedTag === null || selectedTag === undefined) {
      var response = await doGet("blogs/");
    } else {
      var response = await doGet(`blogs/by-category/${selectedTag}`);
    }
    setContent(response.data);
  }

  useEffect(() => {
    getTags();
    getContent();
  }, []);

  useEffect(() => {
    getContent();
  }, [selectedTag]);

  return (
    <div className={"wrapper_all_blog"}>
      <div className="faq_header">
        <p>Блог</p>
      </div>
      <div className={"tags_wrapper container"}>
        {tags.map((tag, index) => (
          <Link
            key={index}
            onClick={() => setSelectedTag(tag.title)}
            to={"/blog?category=" + tag.title}
            style={{ textDecoration: "none" }}
          >
            <div
              className="catalog_item_blog"
              id={
                selectedTag == tag.title ? "active-red-catalog-item-blog" : ""
              }
            >
              {tag.title}
            </div>
          </Link>
        ))}
      </div>
      <div className={"container"}>
        <div className={"cards_row"}>
          {content.map((service, index) => (
            <Card
              key={index}
              img={service.image}
              title={service.short_title}
              href={`/blog/${service.title}`}
              description={service.short_description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
