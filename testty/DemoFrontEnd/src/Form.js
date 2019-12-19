import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "./Form.css";
import image1 from '../src/images/right-arrow.png';
import image2 from '../src/images/product-ss.png';
import image3 from '../src/images/profile-image.png';
import image4 from '../src/images/comment.png';
import { getSocialInformation } from './methods/getSocialInformation';
import debounce from "lodash.debounce";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: null,
      isAll: true,
      isTrending: false,
      isOpenTask: false,
      isCompletedTask: false

    }
  }

  componentDidMount() {
    var socialDataReceived = getSocialInformation();
    Promise.resolve(socialDataReceived).then(data => {
      debugger;
      let finalData = data.data.data.authorDetails.filter(function (data) {
        return data.authors.length > 0;
      });
      this.setState({
        mydata: finalData,
        dataforBinding: finalData
      })
    })
  }
  componentWillMount() {
    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
       
      }
    }, 100);
  }

  handleFilterBUttonClick = (event) => {
    let name = event.target.name;
    if (name == "isAll") {
      this.setState({
        [name]: true,
        isTrending: false,
        isOpenTask: false,
        isCompletedTask: false,
      })

      this.setState({
        dataforBinding: this.state.mydata
      })


    }
    if (name == "isTrending") {
      var self=this;
      self.setState({
        [name]: true,
        isOpenTask: false,
        isCompletedTask: false,
        isAll: false
      })
      let trendingData= self.state.mydata.filter(function (data) {
        return  data.isTrending
      });     
      self.setState({
        dataforBinding: trendingData
      })
    }
    if (name == "isOpenTask") {debugger;
      var self=this;
      self.setState({
        [name]: true,
        isCompletedTask: false,
        isAll: false,
        isTrending: false,
      })
      let isOpenTask= self.state.mydata.filter(function (data) {
        return  !data.status
      });     
      self.setState({
        dataforBinding: isOpenTask
      })
    }
    if (name == "isCompletedTask") {debugger;
      var self=this;
      self.setState({
        [name]: true,
        isOpenTask: false,
        isAll: false,
        isTrending: false,
      })
      let isTaskCompleted= self.state.mydata.filter(function (data) {
        return  data.status
      });     
      self.setState({
        dataforBinding: isTaskCompleted
      })
    }

  }



  render() {
    return (
      <div>
        <div className="filter-btn">
          Filter By:  <button onClick={this.handleFilterBUttonClick} name="isAll" className={this.state.isAll ? 'active' : ''}>All</button> <button onClick={this.handleFilterBUttonClick} name="isTrending" className={this.state.isTrending ? 'active' : ''} >Trending</button> <button onClick={this.handleFilterBUttonClick} name="isOpenTask" className={this.state.isOpenTask ? 'active' : ''}>Open Tasks</button> <button onClick={this.handleFilterBUttonClick} name="isCompletedTask" className={this.state.isCompletedTask ? 'active' : ''}>Completed Tasks</button>
        </div>
        {this.state && this.state.dataforBinding && this.state.dataforBinding.map((data) => {
          return (<div className="product-info">
            <div className="user-info">
              <div className="user-image">
                <img src={data.authors[0].picture} />
                {/* <img src="images/profile-image.png" /> */}
              </div>
              <div className="user-details">
                <h4>{data.authors[0].name}</h4>
                <p>{data.title}</p>
              </div>{
                data.isTrending && <div className="trending-button">
                  <a href={null}>Trending</a>
                </div>
              }

            </div>

            <div className="product-info-description">
              <h3>Private Encrypted Direct Messaging</h3>
              <p>{data.description}Pea, EOS aims to give developers and designers the tools necessary for creating cean, oranize, and intentional code from the beginning of the development process. Defining your components, their hierarchy, and how they in,ract via state and props, can alleviate the need for refactoring.</p>
            </div>

            <div className="product-pricing">
              <div className="product-pricing-info">
                <div className="product-ss">
                  <img src={data.thumbnail} />
                </div>
                <div className="product-price">
                  <h3>${data.pledgeTotal}</h3>
                  <p>pledged of ${data.pledgeGoal} goal <a href={null} className={data.status?'myColor':''}>{!data.status?'Pledge':'View Submision'}</a></p>
                  <h4>{data.pledgerCount}</h4>
                  <p>pledgers</p>
                </div>
                <div className="product-source">
                  <ul>
                    <li>
                      <a href={null}>View Source</a>
                    </li>
                    <li>
                      <a href={null}> Code Submissions ({data.codeSubmissionTotal}) </a>
                    </li>{
                      !data.status&&                    
                    <li className="claim-button">
                      <a href={null}>Claim $5000</a>
                    </li>}
                  </ul>
                </div>
              </div>
            </div>


            <div className="comment-section">
              <ul>
                <li>
                  <a href={null}>
                    <img src={image4} />
                    {/* <img src="images/comment.png" /> */}
                    Comments ({data.numComments})</a>
                </li>
                <li>
                  <a href={null}>
                    <img src={image1} />
                    {/* <img src="images/right-arrow.png" /> */}
                    Share </a>
                </li>
                <li className="more-option">
                  <button className="more-button">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="clear"></div>
          </div>
          )
        })}

      </div>
    );
  }
}

export default Form;
