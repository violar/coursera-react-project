import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  console.log("map state to props => initial state set up");
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) },
  fetchLeaders: () => { dispatch(fetchLeaders()) }
});

class Main extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("mounting begin ");
    this.props.fetchDishes();
    console.log("dishes mounted");
    this.props.fetchComments();
    console.log("comments mounted");
    this.props.fetchPromos();
    console.log("promos mounted");
    this.props.fetchLeaders();
    console.log("leaders mounted");
  }

  render() {
    console.log("render method called");
    const HomePage = () => {
      console.log("isLoading Home 1a");
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading} 
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}/>
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading} 
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}/>
      );
    };

    const AboutPage = () => {
      console.log("isLoading About 1a");
      return (
          <About leaders={this.props.leaders.leaders}
            leadersLoading={this.props.leaders.isLoading}
            leadersErrMess={this.props.leaders.errMess} />
      );
    }

    return (
      <div>
        <Header />
            {console.log("before switch")}
              <Switch>
              {console.log("before home route")}<Route path="/home" component={HomePage} />{console.log("after home route")}
              {console.log("before about route")} <Route exact path="/aboutus" component={AboutPage} />} />{console.log("after about route")}
                  <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                  <Route path='/menu/:dishId' component={DishWithId} />
                  <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                  <Redirect to="/home" />
              </Switch>
            
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
