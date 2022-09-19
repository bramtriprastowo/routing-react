import React from "react";
import LoadingScreen from "./LoadingScreen";

const NewsCard = (props) => {
  return (
    <div className="container mt-5">
      <div className="row gx-4 gy-5">
        {/* Conditional untuk menampilkan animasi loading atau card berdasarkan nilai state loading */}
        {props.isLoading ? (
          <LoadingScreen />
        ) : (
          props.dataNews.map((item, index) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                key={index}
              >
                <div
                  className="card border-primary mx-auto"
                  style={{ fontFamily: "Poppins" }}
                >
                  <img
                    src={item["urlToImage"]}
                    alt={item["title"]}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 style={{ fontWeight: "600" }}>{item["title"]}</h5>
                    <p style={{ fontSize: "14px" }}>
                      {new Date(item["publishedAt"]).toLocaleDateString()} -{" "}
                      {new Date(item["publishedAt"]).toLocaleTimeString()}
                    </p>
                    <p className="card-text">{item["description"]}</p>
                    <a href={item["url"]} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default NewsCard;
