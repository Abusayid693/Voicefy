import {Heading} from '@chakra-ui/react';
import {useAnalyticsTotalServicesUsedQuery} from 'generated/graphql';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

export const AnalyticsTotalServicesUsed = () => {
  const {data, loading}: {data: any; loading: boolean} =
    useAnalyticsTotalServicesUsedQuery();

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '20px',
        width: '100%',
        height: '300px'
      }}
    >
      <Heading fontSize={18}>Total Services Used</Heading>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data?.analyticsTotalServicesUsed}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Bar
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
