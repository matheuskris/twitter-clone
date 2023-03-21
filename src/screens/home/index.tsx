import MainContent from "@src/components/homeComponents/mainContent";
import LeftMenu from "@src/components/shared/leftMenu";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftMenu />
      <MainContent />
    </div>
  );
};

export default Home;
