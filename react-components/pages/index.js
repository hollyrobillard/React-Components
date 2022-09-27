import "bootstrap/dist/css/bootstrap.css"


import Header from './Header';
import HomeBody from './HomeBody';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="Home text-center">
      <Header />
      <HomeBody />
      <Footer />
    </div>
  )
}
