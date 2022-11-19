import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "./../../index.css";
export default function CardApp({ item }: any) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + item.poster_path;
  return (
    <>
      <Card>
        <Link to={"/movie/" + item.id}>
          <CardImg top width="100%" src={imageUrl} alt={item.title} />
        </Link>
        <CardBody className="text-center text-decoration-none">
          <CardTitle tag="h4" className="fw-bold">
            {item.title}
          </CardTitle>
          <CardSubtitle>
            <small className="text-muted">{item.release_date}</small>
          </CardSubtitle>
          <CardText className="text-sm-start text-md-start text-lg-start">
            {item.overview}
          </CardText>
          <CardText></CardText>
        </CardBody>
      </Card>
    </>
  );
}
