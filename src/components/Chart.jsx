import React from "react";
import {
	BarChart,
	Bar,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

const data = [
	{
		name: "Category 1",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Category 2",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Category 3",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Category 4",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Category 5",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
];

const Chart = () => {
	return (
		<ResponsiveContainer width={600} height={300}>
			<BarChart width={150} height={40} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
				<Bar dataKey="uv" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Chart;
