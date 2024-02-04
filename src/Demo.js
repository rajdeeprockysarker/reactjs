import { useState } from "react";
import ReactDOM from "react-dom/client";

function Demo(props) {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  const a = { name: "fdsfdssdf" };

  const aa = [1, 2, 3, 4];
  const bb = [5, 6, 7, 8, 9, 0];

  const aabb = [aa, bb];

  const myFunction = () => {
    console.log("object" + props.name + aabb);
    setBrand("Maruti");
    setModel(" 800");

    document.getElementById("button1").style.display = "visible";
  };

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <label> {"rajdeep"} </label>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form className="d-flex">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      <h1>Rajdeep</h1>

      <>
        <h1>My {brand}</h1>
        <button onClick={myFunction} id="button1">
          Hello World
        </button>
        <p>
          It is a {color} {model} from {a.name}.
        </p>
        <div className="container px-">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">
              An active item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
            <h>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex
              placeat tempora odio dolor iure mollitia ad nisi ducimus quasi
              cumque a, eum perspiciatis reprehenderit impedit veritatis
              doloremque dolore porro!
            </h>
          </ul>
          <img
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg"
            alt="No Image"
            width={400}
            height={400}
          />
          <br />
          <big>jgjgjgjg</big>
          <br />
          <hr />
          <small>nvvhhvhhhh</small>
          <p>
            co<sub>2</sub>
          </p>
          <p>
            A<sup>3</sup>
          </p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              perspiciatis accusantium, animi vero aspernatur tempora quo atque
              modi ipsa fuga dignissimos laudantium expedita pariatur cupiditate
              vel. Voluptatem nobis veritatis minima repudiandae eos delectus
              porro nam.
            </div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
          </div>
        </div>
      </>
    </>
  );
}

export default Demo;
