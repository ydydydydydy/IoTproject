<<<<<<< HEAD
import { Card, CardBody, CardSubtitle, CardTitle, Row, Col, Table } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import axios from "../axios";
import user1 from "../images/users/user.png";
import Feeds from "./Feeds";

=======
import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import axios from "../axios";
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e

const WalkingChart = () => {

  let user = JSON.parse(sessionStorage.getItem('user') || null);

<<<<<<< HEAD
  const [rf_members, setRfMembers] = useState([]);
  const [lf_members, setLfMembers] = useState([]);

  const [info_members, setInfoMembers] = useState([]);
  const [info_walking, setInfoWalking] = useState([]);
  
    useEffect(() => {
      axios
        .post('/user/survey', { id: user.id })
        .then((res) => {
          
          const data = res.data
          // const gyroRfData = res.data.gyroRfData;
          // const gyroLfData = res.data.gyroLfData;
          
          // if (Array.isArray(gyroRfData)) {
          //   const rfDataSlice = gyroRfData.slice(0, 5);
          //   setRfMembers(rfDataSlice);
          // } else {
          //   console.error('gyroRfData is not an array:', gyroRfData);
          // }

          // if (Array.isArray(gyroLfData)) {
          //   const lfDataSlice = gyroLfData.slice(0, 5);
          //   setLfMembers(lfDataSlice);
          // } else {
          //   console.error('gyroLfData is not an array:', gyroLfData);
          // }

          console.log(res.data);

          const gyroRfData = res.data.gyroRfData;
          const gyroLfData = res.data.gyroLfData;
          const userData = res.data.userData;
          const walkingData = res.data.walkingData;

          setRfMembers(gyroRfData);
          setLfMembers(gyroLfData);
          setInfoMembers(userData);
          if (walkingData && walkingData.length > 0) {
            setInfoWalking([walkingData[0]]);
          } else {
            console.error('Walking 데이터가 없습니다.');
          }
  
        })
        .catch((error) => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
        });
    }, []);
=======
  const [members, setMembers] = useState([]);

  /* 회원 검색을 요청하는 useEffect 구현 */
  useEffect(() => {
    axios
        .post('/user/result', {id:user.id})
        .then((res)=>{
          setMembers(res.data.walkingData[0]);

        });
  }, []);
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e

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
    colors: ["#ff0000", "#004bfb", "#fbee00", "#15fb00", "#fb00e2"],

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


  const selectedIndices = Array.from({ length: 20 }, (_, i) => i * 10 + 1);

  // gyro 및 acc 값들을 추출
  const lfGyroValues = lf_members.filter((_, index) => selectedIndices.includes(index + 1)).map((member) => ({
    gyro_x: member.gyro_x,
    gyro_y: member.gyro_y,
    gyro_z: member.gyro_z,
    acc_x: member.acc_x,
    acc_y: member.acc_y,
    // acc_z: member.acc_z,
  }));

  // gyro 및 acc 값들을 추출
  const rfGyroValues = rf_members.filter((_, index) => selectedIndices.includes(index + 1)).map((member) => ({
    gyro_x: member.gyro_x,
    gyro_y: member.gyro_y,
    gyro_z: member.gyro_z,
    acc_x: member.acc_x,
    acc_y: member.acc_y,
    // acc_z: member.acc_z,
  }));

// series를 생성
const series = lfGyroValues.length > 0
  ? Object.keys(lfGyroValues[0]).map((key) => ({
      name: key,
      data: lfGyroValues.map((value) => value[key]),
    }))
  : [];

  const rfseries = rfGyroValues.length > 0
  ? Object.keys(rfGyroValues[0]).map((key) => ({
      name: key,
      data: rfGyroValues.map((value) => value[key]),
    }))
  : [];

  // 나이 계산 함수
  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    
    <div>
    <Row>
      <Col>
      <CardTitle tag="h5"><strong>profile</strong></CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        Overview of the projects
      </CardSubtitle>

      <Table className="no-wrap mt-3 align-middle" responsive borderless>
        <thead>
          <tr>
            <th>아이디</th>
            <th>나이</th>
            <th>키</th>
            <th>몸무게</th>
          </tr>
        </thead>
        <tbody>
          {info_members.map((member, index) => (
            <tr key={index} className="border-top">
              <td>
                <div className="d-flex align-items-center p-2">
                  <img
                    src={user1}
                    className="rounded-circle"
                    alt="user"
                    width="45"
                    height="45"
                  />
                  <div className="ms-3">
                    <h6 className="mb-0">{member.user_id}</h6>
                  </div>
                </div>
              </td>
              <td>{calculateAge(member.user_birthdate)}</td>
              <td>{member.user_height}</td>
              <td>{member.user_weight}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col>
    </Row>
    <div style={{ display: 'flex' }}>
          <div style={{ width: '90%', height: '100%'}}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Walking Summary</CardTitle>
              <CardSubtitle className="text-muted" tag="h6">
                보행
              </CardSubtitle>
              <div className="bg-primary text-white my-3 p-3 rounded">
                <Row>
                  
                {info_walking.map((member, index) => (
                <tr key={index}  >
                  <div style={{display:"flex"}}>
                  <Col md="4">
                    <h6>걸음수</h6>
                    <h4 className="mb-0 fw-bold">{member.steps}</h4>
                  </Col>
                  <Col md="4">
                    <h6>거리</h6>
                    <h4 className="mb-0 fw-bold">{member.distance}</h4>
                  </Col>
                  <Col md="4">
                    <h6>각도</h6>
                    <h4 className="mb-0 fw-bold">{member.angle}</h4>
                  </Col>
                  </div>
                </tr>
              ))}

            </Row>
          </div>
          <Chart options={options} series={series} type="area" height="279" />
          <Chart options={options} series={rfseries} type="area" height="279" />
        </CardBody>
      </Card>
      </div>
      <Feeds />
      </div>
    </div>
  );
};

export default WalkingChart;
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
