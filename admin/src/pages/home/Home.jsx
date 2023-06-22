import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState,useEffect, useMemo } from "react";
import axios from "axios";


export default function Home() {
  const MONTHS = useMemo(()=> [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )
  const [usersStats, setUserStats] = useState([]);
  useEffect(()=>{
    const getStats = async ()=>{
      try {
        const res = await axios.get("/api/users/stats",{
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTM2MDA0YTA3MjQyOWY3NjY3NjI5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzM4MDE2NiwiZXhwIjoxNjg3ODEyMTY2fQ.Y2R48kN4xe4k-dvLwWPMgwGaIM3o629qldavYTT6_XI",
          },
        });

        const statsList = res.data.sort(function(a,b){
          return a._id - b._id;
        })
        statsList.map(item => setUserStats(prev => [...prev,{name:MONTHS[item._id-1],"New User":item.total}]))
      } catch(err){
        console.log(err)
      }
    };
    getStats();
  },[MONTHS]);
 
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={usersStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
