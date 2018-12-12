import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'

    function RenderDish({dish}){
        return (
            <React.Fragment>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }

    function RenderComments({comments}){
        if (comments == null) {
            return (<div></div>);
        }

        return ( 
            <React.Fragment>
                <h4>Comments</h4>
                <ul className="list-unstyled">    
                    {comments.map(c => {
                        return <li key={c.id}>
                                    <p>{c.comment}</p>
                                    <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
                                </li>
                    })}
                </ul>
            </React.Fragment>
        ); 
    }

    function DishDetail(props){
        if (props.selectedDish == null) {
            return (<div></div>);
        }

        return (  
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.selectedDish.comments} />
                    </div>
                </div>
            </div>
        )
    }

export default DishDetail;