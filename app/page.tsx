import Image from "next/image";
import Header from "./component/header";
import Link from "next/link";
import background from "@/app/background.jpg"

export default function Home() {
  return (
    <div>
    <div className="blog">
      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={background} alt="Thsi is an image"/> </div></div>
            <h1 className="title">Blog title</h1>
            <p className="discription">Hey there, This is a blog title just like a random paragraph</p>
            <Link href="/read-more"><button  className="readmore">read more</button></Link>
      </div>
    

      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={background} alt="Thsi is an image"/> </div></div>
            <h1 className="title">Blog title</h1>
            <p className="discription">Hey there, This is a blog title just like a random paragraph</p>
            <Link href="/read-more"><button  className="readmore">read more</button></Link>
      </div>


      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={background} alt="Thsi is an image"/> </div></div>
            <h1 className="title">Blog title</h1>
            <p className="discription">Hey there, This is a blog title just like a random paragraph</p>
            <Link href="/read-more"><button  className="readmore">read more</button></Link>
      </div>
      </div>

      <div className="blog">
      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={background} alt="Thsi is an image"/> </div></div>
            <h1 className="title">Blog title</h1>
            <p className="discription">Hey there, This is a blog title just like a random paragraph</p>
            <Link href="/read-more"><button  className="readmore">read more</button></Link>
      </div>


      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={background} alt="Thsi is an image"/> </div></div>
            <h1 className="title">Blog title</h1>
            <p className="discription">Hey there, This is a blog title just like a random paragraph</p>
            <Link href="/read-more"><button  className="readmore">read more</button></Link>
      </div>


      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={background} alt="Thsi is an image"/> </div></div>
            <h1 className="title">Blog title</h1>
            <p className="discription">Hey there, This is a blog title just like a random paragraph</p>
            <Link href="/read-more"><button  className="readmore">read more</button></Link>
      </div>
      </div>
</div>


  );
}
