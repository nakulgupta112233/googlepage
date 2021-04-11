import React from "react"
import Navbar from "./components/navbar"
import SearchBox from "./components/searchbar"
import Footer from "./components/footer"

function App() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
      <SearchBox />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
