import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">logo here</div>
      <div className="navbar-menu">
        <span>HOME</span>
        <span>WEBPOS</span>
      </div>
      <div style={{ position: "relative" }}>
        <AccountCircleIcon style={{ fontSize: "40px", cursor: "pointer" }} />
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "gray",
            padding: "1rem",
            gap: '.5rem',
            color: 'white',
            right: '1px',
            borderRadius: '1rem',
            width: 'max-content'
          }}
        >
          <h3>Login</h3>
          <h3>Signup</h3>
          <h3>menu1</h3>
        </div>
      </div>
    </div>
  );
}
