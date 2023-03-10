import React from "react";


import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";


const { Meta } = Card;

const Details = (props) => {
  let users = props.data;

  return (
    <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {users.map((x) => {
        return <div >
          <Card
            style={{ width: 300 ,margin:"20px"}}
            cover={
              <img
                alt="example"
                src={`https://avatars.dicebear.com/v2/avataaars/${x.username}.svg?options[mood][]=happy`}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src= {`https://avatars.dicebear.com/v2/avataaars/${x.username}.svg?options[mood][]=happy`} />}
              title={x.username}
              description={x.email}
            />
            <p style={{ marginLeft: "50px" }}>{x.phone}</p>
            <h4 style={{ marginLeft: "50px", marginTop: "-10px" }}>
              {x.address}
            </h4>
          </Card>
        </div>;
      })}
    </div>
  );
  
};

export default Details;
