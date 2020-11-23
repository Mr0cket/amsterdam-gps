import React from "react";

export default function OfficeDetails() {
  const isBusinessHours = () => {
    const HoursOfDay = new Date().getHours();
    return HoursOfDay > 9 && HoursOfDay < 18;
  };
  return (
    <div>
      <h5>
        We are:{" "}
        {isBusinessHours() ? (
          <span className="open">Open</span>
        ) : (
          <span className="Closed">Closed</span>
        )}
      </h5>
      <p>To make an appointment call: (69)123 420 7890</p>
    </div>
  );
}
