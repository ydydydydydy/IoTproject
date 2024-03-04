import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
<<<<<<< HEAD
=======
  Button,
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e
} from "reactstrap";

const Blog = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
<<<<<<< HEAD
=======
        <Button color={props.color}>Read More</Button>
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e
      </CardBody>
    </Card>
  );
};

export default Blog;
