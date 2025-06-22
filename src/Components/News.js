import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, pageSize, setProgress, mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setProgress(10);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=27c3bf30833642eba9862221c821f5ad&page=${page}&pageSize=${pageSize}`;
    const res = await fetch(url);
    setProgress(50);
    const data = await res.json();
    setProgress(80);
    setArticles(data.articles || []);
    setTotalResults(data.totalResults || 0);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, [category]);

  const fetchMoreData = async () => {
    const newPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=27c3bf30833642eba9862221c821f5ad&page=${newPage}&pageSize=${pageSize}`;
    const res = await fetch(url);
    const data = await res.json();
    setArticles(articles.concat(data.articles || []));
    setTotalResults(data.totalResults || 0);
    setPage(newPage);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">Top Headlines - {category.toUpperCase()}</h2>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Loading />}
      >
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItems
                mode={mode}
                title={article.title || ""}
                description={article.description || ""}
                imgUrl={article.urlToImage}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 12,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
  mode: PropTypes.string,
};

export default News;
