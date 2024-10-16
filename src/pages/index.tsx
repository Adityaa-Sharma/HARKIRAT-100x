import Image from "next/image";
import localFont from "next/font/local";
import {VideoCard} from "../components/VideoCard";
import { VideoGrid } from "../components/VideoGrid";
import {AppBar} from "../components/AppBar";

export default function Home() {
  return (
    <div>
      <AppBar/>
      <VideoGrid/>

    </div>
  );
}
