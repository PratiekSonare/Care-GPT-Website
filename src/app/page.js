import Image from "next/image";
import Circle from "./Circle";
import Header from "./header/Header";
import StartLine from "./component/StartLine";
import Blocks from './component/Blocks'
import Video from "./component/Video";
import Final from "./component/Final";
import Footer from "./footer/Footer";
import MastiFooter from "./footer/MastiFooter";

export default function Home() {
  return (
    <>
      <Header />

      <div className="">
        {/* <h1>Scroll Down to See the Circle</h1>
        <Circle /> */}
      </div>

      <div className='my-[450px]'></div>

      <StartLine />

      <div className='my-[700px]'></div>

      <Blocks />

      <div className='my-[300px]'></div>

      <Video />

      {/* <div className=''></div> */}

      <div className='my-[500px]'></div>

      <Final />

      <div className='my-[100px]'></div>

      <Footer />
      {/* <MastiFooter /> */}
    </>
  );
}
