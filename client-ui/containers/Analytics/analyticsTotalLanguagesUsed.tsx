import {Heading} from '@chakra-ui/react';
import {useAnalyticsTotalLanguagesUsedQuery} from 'generated/graphql';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

export const AnalyticsTotalLanguagesUsed = () => {
  const {data, loading}: {data: any; loading: boolean} =
    useAnalyticsTotalLanguagesUsedQuery();

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '20px',
        width: '100%',
        height: '400px'
      }}
    >
      <Heading fontSize={18}>Total Languages Used</Heading>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data?.analyticsTotalLanguagesUsed}
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
          <Area
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
