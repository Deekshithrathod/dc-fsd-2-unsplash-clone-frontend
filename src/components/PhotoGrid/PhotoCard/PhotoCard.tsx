import { useRef, useState } from "react";
import "./PhotoCard.css";

const PhotoCard = ({ photo, label }: { photo: string; label: string }) => {
  const [_isHover, setIsHover] = useState(false);
  const btn = useRef(null);
  const lable = useRef(null);
  const img = useRef(null);

  const toggle = () => {
    if (!btn.current || !lable.current || !img.current) return;

    (btn.current as HTMLElement).classList.toggle("hide");
    (lable.current as HTMLElement).classList.toggle("hide");
    (img.current as HTMLImageElement).classList.toggle("hide-img");
  };

  return (
    <div
      className="photo-card"
      onMouseOver={() => {
        setIsHover(true);
        toggle();
      }}
      onMouseLeave={() => {
        setIsHover(false);
        toggle();
      }}>
      <img src={photo} ref={img} />
      <div className="photo-card-top hide" ref={btn}>
        Delete
      </div>

      <div className="photo-card-bottom hide" ref={lable}>
        {label}
      </div>
    </div>
  );
};
export default PhotoCard;
