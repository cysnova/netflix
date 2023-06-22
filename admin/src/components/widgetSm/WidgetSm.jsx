import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers,setNewUsers] = useState([])

  useEffect(()=>{
    const getNewUsers = async()=>{
      try {
        const res = await axios.get('/api/users?new=true', {
          headers: {
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTM2MDA0YTA3MjQyOWY3NjY3NjI5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzM4MDE2NiwiZXhwIjoxNjg3ODEyMTY2fQ.Y2R48kN4xe4k-dvLwWPMgwGaIM3o629qldavYTT6_XI",
        },
      });
      setNewUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getNewUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
