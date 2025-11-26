import { memberDetails } from "../assets/data/team";
import Header from "../components/Header";
import Header_TeamCard from "./essentials/Header_TeamCard";

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 justify-items-center">
        {memberDetails.map((member) => (
          <Header_TeamCard member={member} />
        ))}
      </div>
    </>
  );
};

export default Home;
