import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { get } from "../data/httpClient";
import CardApp from "../components/CardApp/CardApp";

function CardContext() {
  const [movies, setMovies]: any = useState([]);
  useEffect(() => {
    get("/discover/movie").then((x) => {
      setMovies(x.results);
      // console.log(x.results);
    });
  }, []);
  return (
    <>
      <Row className="mt-5">
        {movies.map((x: any) => (
          <Col
            xs="4"
            sm="4"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            className="my-3"
          >
            <CardApp item={x}></CardApp>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CardContext;
