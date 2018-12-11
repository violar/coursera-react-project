import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'

class DishDetail extends Component{

    renderDish(dish){
        return (
            <div key={dish.id}>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        if (comments == null) {
            return (<div></div>);
        }

        return ( 
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">    
                    {comments.map(c => {
                        return <li key={c.id}>
                                    <p>{c.comment}</p>
                                    <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
                                </li>
                    })}
                </ul>
            </div>
        ); 
    }

    render() {
        if (this.props.selectedDish == null) {
            return (<div></div>);
        }

        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;