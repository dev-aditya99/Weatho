import React, { useEffect, useState } from "react";

function BgVideo(props) {
  const bgVideosArr = [
    "https://player.vimeo.com/progressive_redirect/playback/359803806/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=294b4d9734a58de7e96c0710add77fc51ab9a8b11561a45ccd1983ca63b24beb",
    "https://player.vimeo.com/progressive_redirect/playback/283952753/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=6ce63d25b0c8e2ec6c78d9ae7a31b23c1b2cf66d5a3c64219c45dc42f6f43aed",
    "https://player.vimeo.com/progressive_redirect/playback/357195613/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=4ae41bdf721cf05833e8cfc74bece1736953fd53b0daa7123b1c989bfab63462",
    "https://player.vimeo.com/progressive_redirect/playback/218409805/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=fcb7e8bc7983c8cc3d45d94c775f9ac2cac8d2995ac1dc47eb45ad0af3dc2859",
    "https://player.vimeo.com/progressive_redirect/playback/293913779/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=641dcae78853bb68f8e13d4f66233da6a107563257c6e63b236c3423eba76aaf",
    "https://player.vimeo.com/progressive_redirect/playback/793104539/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=9f998b207fc003634fb7d82400639493b38d74faf93bff2b2b737af4637167f3",
    "https://player.vimeo.com/progressive_redirect/playback/208796540/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=11fc9b787d1194ad8f0e75f4675594f2570bf8fa39a5bbd16d4ee28063148ab6",
    "https://player.vimeo.com/progressive_redirect/playback/683885794/rendition/360p?loc=external&oauth2_token_id=57447761&signature=74d3981f4a26b10bbaab3fb2c187529d18a56ee75100f98338a39d2daa33f409",
  ];

  const [weatherCondition, setWeatherCondition] = useState("");

  const [bgVideo, setbgVideo] = useState("");

  const wethConditionHandler = () => {
    if (props.weatherData.cod === 200) {
      setWeatherCondition(props.weatherData.weather[0].main);
    }
  };

  useEffect(() => {
    console.log(weatherCondition);
    // setbgVideo("");
    weatherCondition === "Clear"
      ? setbgVideo(bgVideosArr[1])
      : weatherCondition === "Clouds"
      ? setbgVideo(
          "https://player.vimeo.com/progressive_redirect/playback/347938094/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=0f195d121e4996f34c6347f7036a59ca42a43582dc905801f7990d55c05a62ee"
        )
      : weatherCondition === "Rain"
      ? setbgVideo(bgVideosArr[4])
      : weatherCondition === "Haze"
      ? setbgVideo(bgVideosArr[7])
      : weatherCondition === "Snow"
      ? setbgVideo(bgVideosArr[6])
      : setbgVideo(
          "https://player.vimeo.com/progressive_redirect/playback/368745224/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=6223c35fa0c59bcda1a980fbb2a2311e49701d539c42f8cd394b3a0ce541fc15"
        );

    console.log(bgVideo);
  }, [weatherCondition]);

  useEffect(() => {
    wethConditionHandler();
  }, [props.weatherData.name]);

  return (
    <video
      src={`
        ${bgVideo}
          `}
      className="bg-video position-fixed"
      autoPlay={true}
      loop={true}
    ></video>
  );
}

export default BgVideo;
