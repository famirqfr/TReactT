import React from 'react';
import { Link } from 'react-scroll'
function DownIcon(prop) {
  return (
    <Link activeClass="active" to={prop.to} spy={true} smooth={true} offset={50} duration={500}>
        <i className={`fa ${prop.up ? "fa-angle-double-up" : "fa-angle-double-down"} go-down`} aria-hidden="true"></i>
    </Link>
  );
}

export default DownIcon