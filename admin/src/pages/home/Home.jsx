import Chart from '../../components/chart/Chart';
import './home.css';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export default function Home() {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );
  const [usersStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/api/users/stats', {
          headers: {
            token:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home" style={{ display: 'flex' }}>
      <div className="chartContainer" style={{ width: '70%', height: '800px' }}>
        <Chart
          data={usersStats}
          title="User Analytics"
          grid
          dataKey="New User"
        />
      </div>
      <div className="homeWidgets" style={{ width: '25%', height: '450px' }}>
        <WidgetSm />
      </div>
    </div>
  );
}
