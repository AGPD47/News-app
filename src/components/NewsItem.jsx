const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "300px" }}
    >
      <img
        src={src ? src : "./image.jpeg"}
        style={{ height: "200px", width: "285px" }}
        className="card-img-top img"
        alt="..."
      />
      <div className="card-body  d-flex flex-column justify-content-between">
        <h5 className="card-title">{title.slice(0, 100)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 100) : ""}
        </p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
