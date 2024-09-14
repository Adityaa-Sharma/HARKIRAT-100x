import Image from "next/image";
import localFont from "next/font/local";
import {VideoCard} from "../components/VideoCard";

export default function Home() {
  return (
    <div>
      <VideoCard title="India's got latent"
      image="photo.jpg"
      thumb="samay.jpg"
      channel="Samay Raina"
      views="46Mn"
      timestamp="4 days ago">
      </VideoCard>

    </div>
  );
}
