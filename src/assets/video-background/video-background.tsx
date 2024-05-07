import styles from "./video-background.module.css";

const videoBackground = () => {
  return (
    <>
      <video
        autoPlay={true}
        loop={true}
        className={styles.videoBackground}
        src="https://svs.gsfc.nasa.gov/vis/a030000/a030000/a030082/viirs_dnb_night_lights_rotating_earth_2304p.mp4"
      />
    </>
  );
};

export default videoBackground;
