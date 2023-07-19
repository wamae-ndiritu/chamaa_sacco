import React from "react";

const NewMembers = () => {
  return (
    <div className="new-member-cont shadow-sm mt-3">
      <h5 className="h5 text-info">New Join Members</h5>
      <div className="member-item">
        <div className="member-profile">
          <img src="/Images/wamae.png" alt="..." />
        </div>
        <div className="member-info">
          <h6 className="h6">Joseph Ndiritu Wamai</h6>
          <p>Software Engineer</p>
        </div>
      </div>
      <div className="member-item">
        <div className="member-profile">
          <img
            src="https://ocdn.eu/pulscms-transforms/1/mJ-k9kuTURBXy8wNGMxYWM0Mi1kN2YyLTQzZGEtYjZlYy03NTE4NzUwYTk3ODUuanBlZ5GTBc0DFs0Brt4AAaEwBQ"
            alt="..."
          />
        </div>
        <div className="member-info">
          <h6 className="h6">Elon Musk</h6>
          <p>Investor & Businessman</p>
        </div>
      </div>
      <div className="member-item">
        <div className="member-profile">
          <img src="/Images/zuckerberg.jpg" alt="..." />
        </div>
        <div className="member-info">
          <h6 className="h6">Mark Zuckerberg</h6>
          <p>Investor</p>
        </div>
      </div>
    </div>
  );
};

export default NewMembers;
