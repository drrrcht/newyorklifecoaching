import React from "react";
import { Card } from "../components/Card/Card";

export const Coach_Trainig = () => {
  return (
    <div className={"wrapper_all_blog"}>
      <div className="faq_header">
        <p>Blog</p>
      </div>
      <div className={"tags_wrapper container"}>
        <div className="catalog_item_blog" id={"active-red-catalog-item-blog"}>
          Be Better
        </div>
        <div className="catalog_item_blog">Love Better</div>
        <div className="catalog_item_blog">Do Better</div>
        <div className="catalog_item_blog">Coach Better</div>
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-sm-4 col"}>
            <Card />
          </div>
          <div className={"col-sm-4 col"}>
            <Card />
          </div>
          <div className={"col-sm-4 col"}>
            <Card />
          </div>
          <div className={"col-sm-4 col"}>
            <Card />
          </div>
          <div className={"col-sm-4 col"}>
            <Card />
          </div>
          <div className={"col-sm-4 col"}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
