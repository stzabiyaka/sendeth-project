import Footer from '../Footer';
// import Loader from '../Loader';
import NavBar from '../NavBar';
import Services from '../Services';
import Transactions from '../Transactions';
import Welcome from '../Welcome';
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
