import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide'
import "./HomePageSlider.scss"



interface IHomePageSliderProps {

}


interface IHomePageSliderState {
  padding: number;
  slides: ISlides[];
}


interface ISlides {
  type: string;
  title: string;
  subtitle: string;
  url: string;
  imageUrl: string;
  internalLink: boolean
}


class HomePageSlider extends React.Component<IHomePageSliderProps, IHomePageSliderState> {

  constructor(props) {
    super(props)
    this.state = {
      padding: this.getPadding(),
      slides: [{
        "type": "SUNDAY SERIES",
        "title": "Against The Grain",
        "subtitle": "A study from Daniel",
        "url": "/sermons/series/Against%20The%20Grain",
        "imageUrl": "img/slides/daniel.jpg",
        "internalLink": true
      }, {
        "type": "BIBLE STUDY SERIES",
        "title": "WHAT IS A BIBLICAL BAPTIST?",
        "subtitle": "",
        "url": "/sermons/series/What%20is%20a%20Biblical%20Baptist%3F",
        "imageUrl": "img/slides/baptist.jpg",
        "internalLink": true
      }, {
        "type": "GOSPEL SERIES",
        "title": "WHERE DID IT ALL GO WRONG?",
        "subtitle": "",
        "url": "/sermons/series/Where%20did%20it%20all%20go%20wrong%3F",
        "imageUrl": "img/slides/gowrong.jpg",
        "internalLink": true
      }
      ]
    }
  }

  getPadding = () => {
    if ($(window).width() > 700) {
      return ($(window).width() - 700) / 2
    } else {
      return 0;
    }
  }

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding()
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    var settings = {
      centerMode: true,
      centerPadding: this.state.padding + 'px',
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      dots: true
    };

    const slides = this.state.slides.map((slide, index) => {
      return (
        <div key={index}>
          <HomePageSlide {...slide} />
        </div>
      )
    })

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default HomePageSlider;
