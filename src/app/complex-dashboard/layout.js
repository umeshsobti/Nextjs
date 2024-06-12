export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,login
}) {
  const IsLoggedin = true;
  return IsLoggedin ? (
    <div>
      <div>{children}</div>
      <div style={{display: "flex"}}>
        <div style={{display: "flex",flexDirection: "column "}}>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div style={{display: "flex" , flex: "1"}}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  )
  
}
