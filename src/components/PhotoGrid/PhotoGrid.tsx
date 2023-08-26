import PhotoCard from "./PhotoCard/PhotoCard";
import photos from "../../assets/defaultPhotos.json";
import Masonry from "@mui/lab/Masonry";
import "./PhotoGrid.css";

const PhotoGrid = () => {
  return (
    <main>
      <Masonry
        columns={3}
        spacing={4}
        sx={{
          marginLeft: 0,
        }}>
        {photos.map((photo) => {
          return <PhotoCard key={photo.photo} {...photo} />;
        })}
      </Masonry>
    </main>
  );
};
export default PhotoGrid;
