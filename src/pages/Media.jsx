import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import Wrapper from '../assets/wrappers/DashboardFormPage';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const Media = () => {
  const data = [4000, 3000, 2000, null, 1890, 2390, 3490];
const xData = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];
  return (
    <Wrapper>
    <LineChart
      className='form'
      width={500}
      height={300}
      series={[
        { data: uData, label: 'uv', area: true, stack: 'total', showMark: false },
        { data: pData, label: 'pv', area: true, stack: 'total', showMark: false },
        {
          data: amtData,
          label: 'amt',
          area: true,
          stack: 'total',
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
    />
    <Stack sx={{ width: '100%' }}>
    <LineChart
      xAxis={[{ data: xData, scaleType: 'point' }]}
      series={[{ data, showMark: false, area: true }]}
      height={200}
      margin={{ top: 10, bottom: 20 }}
    />
    <LineChart
      xAxis={[{ data: xData, scaleType: 'point' }]}
      series={[{ data, showMark: false, area: true, connectNulls: true }]}
      height={200}
      margin={{ top: 10, bottom: 20 }}
    />
  </Stack>
  </Wrapper>
  );
}

export default Media;