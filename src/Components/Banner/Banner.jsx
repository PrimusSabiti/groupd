import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/";
import Video from "../../Videos/Video.mp4";


const Banner = () => {
  const navigate = useNavigate();
  const { productDispatch } = useFilter();
  return (
    <main className="main-page-container">
       <section className="main-banner">
        <div className="link" >
        
          <div className="main-banner-image border-radius-4"><button id="btn" onClick={() => {
          
          productDispatch({
            type: "CATEGORY",
            payload: "all"
          });
         
                navigate("/products")
        }}
          ><blink>SHOP NOW !</blink></button></div>
        </div>
      </section>
    </main>
  );
};

export { Banner };
