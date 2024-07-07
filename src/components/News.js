import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'

import Skeleton from './Skeleton'
import NewsItem from './NewsItem'
import altImg from "../images/altImg.jpg"
import "../App.css"

function News(props) {
	const apikey = process.env.REACT_APP_API_KEY
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [totalResults, setTotalResults] = useState(0)
	const [progress, setProgress] = useState(0)
	const [hasMore, setHasMore] = useState(true)

	useEffect(() => {
		document.title = `Verita Sium - ${props.category.toUpperCase()}`

		async function loadData() {
			setProgress(10)
			const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${props.pageSize}`;

			setLoading(true)

			let data = await fetch(url);
			setProgress(30)

			let parsedData = await data.json()
			setProgress(70)

			setArticles(parsedData.articles)
			setTotalResults(parsedData.totalResults)

			setLoading(false)
			setProgress(100)
		}
		loadData()
		// eslint-disable-next-line
	}, [])

	const fetchData = async () => {
		if (articles.length >= totalResults) {
			setHasMore(false)
			return;
		}
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
		setPage(page + 1)

		let data = await fetch(url);
		let parsedData = await data.json()
		setTimeout(() => {
			setArticles(articles.concat(parsedData.articles))
		}, 500);
	}

	return (
		<>
			<LoadingBar
				height={3}
				color="#fa3c68"
				progress={progress}
			/>
			<div className='container'>
				<h1 className='text-center my-4'>{props.category.toUpperCase()} - top Headlines ({totalResults})</h1>
				{
					loading && <div className='row'><Skeleton /><Skeleton /><Skeleton /></div>
				}
				<InfiniteScroll
					dataLength={articles.length} //This is important field to render the next data
					next={fetchData}
					hasMore={hasMore}
					loader={
						<div className='container'>
							<div className='row justify-content-center m-4'>
								<div className="spinner-grow text-primary" role="status" style={{ animationTimingFunction: "ease-out" }}></div>
								<div className="spinner-grow mx-2 text-secondary" style={{ animationDelay: "0.25s", animationTimingFunction: "ease-out" }} role="status"></div>
								<div className="spinner-grow text-success" style={{ animationDelay: "0.5s", animationTimingFunction: "ease-out" }} role="status"></div>
							</div>
						</div>
					}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all {totalResults}</b>
						</p>
					}
					className='row'
				>
					{
						articles.map((article, index) => {
							return (
								<div key={index} className='col-md-4 mb-2'>
									<NewsItem
										title={article.title}
										description={article.description}
										imgUrl={article.urlToImage ? article.urlToImage : altImg}
										newsUrl={article.url}
										newsDate={article.publishedAt}
										author={article.author}
									/>
								</div>
							)
						})
					}

				</InfiniteScroll>
			</div>

		</>
	)
}

News.defaultProps = {
	country: 'in',
	pageSize: 6,
	category: 'general',
}

News.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
}

export default News