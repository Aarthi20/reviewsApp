// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="container">
        <button
          className="button"
          data-testid="leftArrow"
          onClick={this.onLeftArrow}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="img"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          className="button"
          data-testid="rightArrow"
          onClick={this.onRightArrow}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="img"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
