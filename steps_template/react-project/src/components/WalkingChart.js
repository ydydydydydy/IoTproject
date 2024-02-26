import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import axios from "../axios";

const WalkingChart = () => {

  let user = JSON.parse(sessionStorage.getItem('user') || null);

  const [members, setMembers] = useState([]);

  /* 회원 검색을 요청하는 useEffect 구현 */
  useEffect(() => {
    axios
        .post('/user/result', {id:user.id})
        .then((res)=>{
          setMembers(res.data.walkingData[0]);

        });
  }, []);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#009efb", "#6771dc"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "2020",
      data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    },
    {
      name: "2022",
      data: [10, 20, 40, 60, 20, 40, 50, 60, 20],
    },
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Walking Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <div className="bg-primary text-white my-3 p-3 rounded">
          <Row>
            <Col md="4">
              <h6>걸음수</h6>
              <h4 className="mb-0 fw-bold">{members.steps}</h4>
            </Col>
            <Col md="4">
              <h6>거리</h6>
              <h4 className="mb-0 fw-bold">{members.distance}</h4>
            </Col>
            <Col md="4">
              <h6>신체 균형</h6>
              <h4 className="mb-0 fw-bold">{members.angle}</h4>
            </Col>
          </Row>
        </div>
        <Chart options={options} series={series} type="area" height="279" />
      </CardBody>
    </Card>
  );
};

export default WalkingChart;
