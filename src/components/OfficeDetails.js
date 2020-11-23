import React from "react";

export default function OfficeDetails() {
  const isBusinessHours = () => {
    const HoursOfDay = new Date().getHours();
    return HoursOfDay > 9 && HoursOfDay < 18;
  };
  return (
    <div>
      <h5>We are: {isBusinessHours() ? "Open" : "Closed"}</h5>
      <p>To make an appointment call: (69)123 420 7890</p>
    </div>
  );
}
