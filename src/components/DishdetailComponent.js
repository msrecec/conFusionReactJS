import React from 'react';
import {
  Card,
  CardImg,
  // eslint-disable-next-line no-unused-vars
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

function RenderDish({ dish }) {
  if (dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <strong>{dish.name}</strong>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function RenderComments({ comments }) {
  if (comments.length) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{' '}
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.selectedDish) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.selectedDish} />
          <RenderComments comments={props.selectedDish.comments} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div></div>
      </div>
    );
  }
};

export default DishDetail;
