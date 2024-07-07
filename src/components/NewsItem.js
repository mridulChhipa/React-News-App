import React from 'react'

function NewsItem(props) {

    let { title, description, imgUrl, newsUrl, newsDate, author } = props

    return (
        <div className="card" style={{ height: "100%" }} >
            <div style={{ height: 200, overflow: 'hidden' }}><img src={imgUrl} className="card-img-top" alt="..." /></div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <p className="card-text">
                    <small className="text-body-secondary">
                        Last updated {new Date(newsDate).toDateString()} by {author ? author : "Unknown"}
                    </small>
                </p>
                <a href={newsUrl} className="btn btn-primary btn-sm">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default NewsItem