import React, { useState } from "react";

const Navbar = () => {
  const NAV_DATA = [
    {
      id: 1,
      name: "orientation",
      icon: <i class="fa fa-stop" aria-hidden="true"></i>,
      options: ["orientation", "val2"],
    },
    {
      id: 2,
      name: "background",
      icon: <i class="fa fa-circle" aria-hidden="true" style={{color:"#2160FD"}}></i>,
      options: ["background", "val2"],
    },
    {
      id: 3,
      name: "opacity",
      icon: <i class="fa fa-square" aria-hidden="true" style={{"background": 'linear-gradient(180deg, #000000 -21.43%, rgba(0, 0, 0, 0.3) 100%)'}}></i>,
      options: ["opacity", "val2"],
    },
    {
      id: 4,
      name: "blur",
      icon: <i className="fa fa-eye-slash" aria-hidden="true"></i>,
      options: ["blur", "val2"],
    },
  ];

  const [selected, setSelected] = useState({}); // Store selected items

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      {NAV_DATA.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {/* Custom Dropdown */}
          {/* <label style={{ display: "block", marginBottom: "5px" }}>
            {item.icon} {item.name}
          </label> */}
          <div>
          {item.icon} <select
            style={{
              padding: "5px",
              fontSize: "16px",
              border:"none",
              marginRight:"25px"
            }}
            value={selected[item.name] || ""}
            onChange={(e) =>
              setSelected((prev) => ({
                ...prev,
                [item.name]: e.target.value,
              }))
            }
          >
           
            {item.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
