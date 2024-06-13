
import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Typography from '@mui/joy/Typography';

export default function Reports() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <Typography level="h2" component="h1">
        Relatórios
      </Typography>
      <canvas ref={chartRef}></canvas>
    </>
  );
}

