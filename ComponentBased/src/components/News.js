import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import altImg from "../images/altImg.jpg"
import "../App.css"

export default class News extends Component {
	apikey = process.env.API_KEY
	static defaultProps = {
		country: 'in',
		pageSize: 5,
		category: 'general',
	}

	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	}

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			hasMore: true,
			totalResults: 0,
			progress: 0
		}
		document.title = `Verita Sium - ${this.props.category.toUpperCase()}`
	}

	setProgress(progress) {
		this.setState({
			progress: progress
		})
	}

	async componentDidMount() {
		this.setProgress(0)
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78e7ae56c9d1484685f8e2d0259d805f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true })
		let data = await fetch(url);
		this.setProgress(30)
		let parsedData = await data.json()
		this.setProgress(70)
		console.log(parsedData)
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false
		})
		this.setProgress(100)
	}

	fetchData = async () => {
		if (this.state.articles.length >= this.state.totalResults) {
			this.setState({ hasMore: false });
			return;
		}

		this.setState({
			page: this.state.page + 1
		})

		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true })
		let data = await fetch(url);
		let parsedData = await data.json()

		setTimeout(() => {
			this.setState({
				articles: this.state.articles.concat(parsedData.articles),
				loading: false
			});
		}, 500);
	}

	render() {
		return (
			<>
				<LoadingBar
					color="#fa3c68"
					progress={this.state.progress}
				/>

				<h1 className='text-center my-4'>{this.props.category.toUpperCase()} - top Headlines</h1>
				<InfiniteScroll
					dataLength={this.state.articles.length} //This is important field to render the next data
					next={this.fetchData}
					hasMore={this.state.hasMore}
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
							<b>Yay! You have seen it all {this.state.totalResults}</b>
						</p>
					}
					className='row'
				>
					{
						this.state.articles.map((article, index) => {
							console.log(article.title)
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
			</>
		)
	}
}
