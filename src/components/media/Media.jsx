import React from "react";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import FmdGoodIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneIcon from "@mui/icons-material/Phone";
import Phone from "../phone/Phone";

const Media = () => {
  return (
    <div className="media">
      <ul className={"media__list"}>
        <li className={"media__item"}>
          <div className="media__icon">
            <EmailIcon />
          </div>
          <a href={'mailto:ifvictorybf@gmail.com'} className={"media__text"}>ifvictorybf@gmail.com</a>
        </li>
        <li className={"media__item"}>
            <Phone phone="068 163 30 37"/>
        </li>
      </ul>
    </div>
  );

};

export default Media;
