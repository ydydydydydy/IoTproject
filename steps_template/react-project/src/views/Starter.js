import { Col, Row } from "reactstrap";
import WalkingChart from "../components/WalkingChart.js";
import Feeds from "../components/Feeds.js";
import ProjectTables from "../components/ProjectTable.js";

import Blog from "../components/Blog";
import bg1 from "../images/bg/bg1.jpg";
import bg2 from "../images/bg/bg2.jpg";
import bg3 from "../images/bg/bg3.jpg";
import bg4 from "../images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
<<<<<<< HEAD
        <Col>
          <WalkingChart />
        </Col>
        {/* <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col> */}
=======
        <Col sm="6" lg="6" xl="7" xxl="8">
          <WalkingChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
<<<<<<< HEAD
          {/* <ProjectTables /> */}
=======
          <ProjectTables />
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
<<<<<<< HEAD
            {/* <Blog
=======
            <Blog
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
<<<<<<< HEAD
            /> */}
=======
            />
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
