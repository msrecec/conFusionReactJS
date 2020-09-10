import React, { Component } from 'react';
import {
  Card,
  CardImg,
  // eslint-disable-next-line no-unused-vars
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

class DishDetail extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
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

  renderComments(array) {
    if (array.length) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {array.map((comment) => {
            return (
              <ul className="list-unstyled">
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
              </ul>
            );
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    let dish;
    if (this.props.selectedDish) {
      dish = (
        <div className="row">
          {this.renderDish(this.props.selectedDish)}
          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      );
    } else {
      dish = <div></div>;
    }
    return <div className="container">{dish}</div>;
  }
}

export default DishDetail;
