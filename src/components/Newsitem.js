import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary"
            style={{ left: "90%", zindex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/107281049-1691038968344-gettyimages-1588215007-0j6a6715_atzuolmb.jpeg?v=1704928252&w=1920&h=1080"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="
    _blank"
              className="btn btn-sm btn-dark"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
