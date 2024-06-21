import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
        let linkItem = document.querySelector("#home");
        let linkItem2 = document.querySelector("#home2");

        if (linkItem) {
            linkItem.classList.add("active");
            linkItem.classList.remove("hover_effect");
        }

        if (linkItem2) {
            linkItem2.classList.add("active");
            linkItem2.classList.remove("hover_effect");
        }

        return () => {
            if (linkItem) {
                linkItem.classList.remove("active");
                linkItem.classList.add("hover_effect");
            }

            if (linkItem2) {
                linkItem2.classList.remove("active");
                linkItem2.classList.add("hover_effect");
            }
        }
    }, []);

    return (
        <main className="home h-screen">
            <div className="div-home h-screen">
                <div className="f-child">
                    <h4 className="top-el">So, you want to travel to</h4>
                    <h1>Space</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="s-child wrap">
                    <Link className="button-homepage" to="/fm-space-tourism-website/destination/Moon">Explore</Link>
                </div>
            </div>
        </main>
    );
}

export default Home;
