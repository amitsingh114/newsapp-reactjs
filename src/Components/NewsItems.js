const NewsItems = ({ mode, title, description, imgUrl, newsUrl }) => {
  const cardModeClass = mode === "dark" ? "dark-mode" : "light-mode";

  return (
    <div className={`card ${cardModeClass} my-3`}>
      <img
        src={imgUrl || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt="News"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.length > 50 ? title.slice(0, 50) + "..." : title}</h5>
        <p className="card-text">{description.length > 90 ? description.slice(0, 90) + "..." : description}</p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn ${cardModeClass === "dark-mode" ? "btn-light" : "btn-dark"}`}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
