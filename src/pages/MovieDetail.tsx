import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
  Button,
} from "reactstrap";
import { get } from "../data/httpClient";
import { getImage } from "../utils/getImage";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie]: any = useState([]);

  useEffect(() => {
    if (id == "") {
    }
    get("/movie/" + id).then((x) => {
      setMovie(x);
    });
  }, [id]);

  const imageUrl = getImage(movie.poster_path, 500);

  return (
    <Row className="mt-5">
      <Col className="my-5" md="3" xl="3" sm="4" xs="5">
        <Card>
          <CardImg alt={movie.title} src={imageUrl} top width="100%" />
        </Card>
      </Col>
      <Col className="my-5">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Title: {movie.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Date: {movie.release_date}
            </CardSubtitle>
            <CardText>
              <strong>Description: </strong> {movie.overview}
            </CardText>
            <Button color="danger" tag="a" href="/">
              ⬅️ Back
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
