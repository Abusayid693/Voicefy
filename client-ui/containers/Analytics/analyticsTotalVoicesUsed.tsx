import {Heading} from '@chakra-ui/react';
import {useAnalyticsTotalVoicesUsedQuery} from 'generated/graphql';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

export const AnalyticsTotalVoicesUsed = () => {
  const {data, loading}: {data: any; loading: boolean} =
    useAnalyticsTotalVoicesUsedQuery();

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '20px',
        width: '100%',
        height: '300px'
      }}
    >
      <Heading fontSize={18}>Total Voices Used</Heading>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data?.analyticsTotalVoicesUsed}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
