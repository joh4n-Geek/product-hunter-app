import news from "../news.json";

export const getNews = () => {
    const response = news.results;
    return response;
};