import { Col, Row, Form } from "react-bootstrap";
import { OperatorLinksComponent } from "../components/operatorComponent/OperatorLinksComponent";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const OperatorAnalyticsPage = () => {
  const data = [
    {
      name: "12: 00 AM",
      "2022 year": 4000,
      "2021 year": 3000,
    },
    {
      name: "13: 00 AM",
      "2022 year": 4400,
      "2021 year": 3500,
    },
    {
      name: "14: 00 AM",
      "2022 year": 4000,
      "2021 year": 3500,
    },
    {
      name: "15: 00 AM",
      "2022 year": 4080,
      "2021 year": 3000,
    },
    {
      name: "16: 00 AM",
      "2022 year": 7000,
      "2021 year": 2000,
    },
  ];
  return (
    <Row className="m-5">
      <Col md={2}>
        <OperatorLinksComponent />
      </Col>
      <Col md={10} width="100%" height="100%">
        <h1>Black friday</h1>
        <Form.Group controlId="firstDateToCompare">
          <Form.Label>Select First date to compare</Form.Label>
          <Form.Control
            type="data"
            name="firstDateToCompare"
            placeholder="first date to compare"
          />
        </Form.Group>
        <Form.Group controlId="secondDateToCompare">
          <Form.Label>Select Second date to compare</Form.Label>
          <Form.Control
            type="data"
            name="secondDateToCompare"
            placeholder="second date to compare"
          />
        </Form.Group>
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              label={{
                value: "TIME",
                offset: 50,
                position: "insideBottomRight",
              }}
              allowDuplicatedCategory={false}
            />
            <YAxis
              label={{
                value: "REVENUE ($)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Area
              type="monotone"
              dataKey="2022 year"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="2021 year"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};
