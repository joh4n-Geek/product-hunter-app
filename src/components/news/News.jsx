import { useState, useEffect } from "react";
import { getNews } from "../../helpers/getNews";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsList = () => {
      const newsList = getNews();
      setNews(newsList);
    };
    fetchNewsList();
  }, []);

  return (
    <>
      <div className="container text-center p-0">
        <h2>Latest News</h2>
        <div className="row gap-4 p-4 m-auto justify-content-evenly">
            {news.map((newsItem) => (
              <div key={newsItem.id} className="card p-0" style={{ width: 320 }}>
                <img
                  src={newsItem.image_url}
                  className="card-img-top"
                  alt={newsItem.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{newsItem.title}</h5>
                  <p className="card-text">{newsItem.description}</p>
                  <span>{newsItem.publication_date}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default News;
