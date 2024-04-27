export const Profile = () => {
  return (
    <div className="profile">
      <img src="/profile-icon.svg" alt="" />
    </div>
  );
};

const Header = () => {
  return (
    <header className="app-header">
      <Profile />
      <div>seacr</div>
      <div>اخبار سراسری</div>
    </header>
  );
};

export default Header;
