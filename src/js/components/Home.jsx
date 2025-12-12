import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ count }) => {
	const digits = String(count).padStart(6, "0").split("");
	return (
		<div className="text-center">
         <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            backgroundColor: "#191919",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          <i class="fa-regular fa-clock"></i>
        </div>

        {digits.map((digit, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontFamily: "monospace",
              fontWeight: "bold", 
              color: "#fff",     
              backgroundColor: "#191919",
              borderRadius: "5px",
            }}
          >
            {digit}
          </div>
        ))}
      </div>
		</div>


	);
};

export default Home;
