import React, { useEffect, useState } from "react";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import { TiThList } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import "./MainBody.css";
import Card from "../Card/Card";
import { selectData } from "../../Actions/DataAction";

const DashView = () => {
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);

  const getGroup = () => {
    if (localStorage.getItem("group")) {
      return localStorage.getItem("group");
    } else {
      return "status";
    }
  };

  const getOrder = () => {
    if (localStorage.getItem("order")) {
      return localStorage.getItem("order");
    } else {
      return "priority";
    }
  };

  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    if (groupValue === "user") {
      dispatch(selectData(groupValue, { allTickets, allUser }, orderValue));
    } else {
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {!user ? (
                    <DiCodeigniter />
                  ) : (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        alt="UserImage"
                      />
                    </div>
                  )}
                  <span>
                    {elem[index]?.title} {elem[index]?.value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <AiOutlinePlus /> <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((elem, ind) => {
                  return <Card id={elem.id} title={elem.title} tag={elem.tag} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;
