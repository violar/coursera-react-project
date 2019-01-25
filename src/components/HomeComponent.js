import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';


function RenderCard({item, isLoading, errMess}) {
    console.log("inside Home RenderCard 1c");
    if (isLoading) {
        console.log("Loading Component in Home");
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
    console.log("rendering home card 1d");
        return(
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>{console.log("rendering card now")}
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
                {console.log(item.name)}</Card>
        </FadeTransform>
        );
}

function Home(props) {
    console.log("inside Home Component 1b");
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading} 
                    errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                    isLoading={props.promosLoading} 
                    errMess={props.promosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}
                    isLoading={props.leadersLoading}
                    errMess={props.leadersErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;