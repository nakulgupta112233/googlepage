import React from "react";
import logo from '../google_logo.png'
import '../App.css'


function SearchBox() {
    return (
        <div className="container">
            <div className="row">
                <img src={logo} className="mx-auto d-block" alt="google"></img>
            </div>
            <div class="form mx-auto d-block">
                <form>
                    <input type="text" id="form-search" placeholder=" Search Google or type URL" />
                </form>
            </div>
        </div>

    );
}

export default SearchBox;
