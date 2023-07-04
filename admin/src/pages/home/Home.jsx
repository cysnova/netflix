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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTIxYmEyOTYyNDNjM2I3ZTMyYTU3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODM1Nzg2NywiZXhwIjoxNjg4Nzg5ODY3fQ.N7jx4yr2bxHh6U8OkwN7OrKlmvYk7797hqJFJva7TC8",
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
    <div className="home" style={{ display: "flex" }}>
      <div className="chartContainer" style={{ width: "70%" ,height: "800px" }}>
        <Chart data={usersStats} title="User Analytics" grid dataKey="New User" />
      </div>
      <div className="homeWidgets" style={{ width: "25%", height: "450px" }}>
        <WidgetSm />
      </div>
    </div>
  );
  
  
  }  
