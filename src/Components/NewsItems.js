const NewsItems = ({ mode, title, description, imgUrl, newsUrl }) => {
  const cardModeClass = mode === "dark" ? "dark-mode" : "light-mode";

  return (
    <div className={`card ${cardModeClass}`}>

        
        <div className="card">
  <img src={!imgUrl?"https://static01.nyt.com/images/2022/03/22/arts/22latenight/22latenight-facebookJumbo.png":imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className={`btn ${cardModeClass === "dark-mode" ? "btn-light" : "btn-dark"}`}>Read More</a>
  </div>
</div>
      </div>
    )
}


export default NewsItems