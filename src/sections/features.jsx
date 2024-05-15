import { Card } from "../components/Card";
import { FaCoffee } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsCardHeading, BsBootstrap } from "react-icons/bs";

export const Features = () => {
  return (
    <div>
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <Card
              title={"Fresh new layout"}
              info={
                "With Bootstrap 5, we've created a fresh new layout for this template!"
              }
              Icons=<FaCoffee />
            />
            <Card
              title={"Free to download"}
              info={
                "As always, Start Bootstrap has a powerful collectin of free templates."
              }
              Icons=<IoCloudDownloadOutline />
            />
            <Card
              title={"Jumbotron hero header"}
              info={
                "The heroic part of this template is the jumbotron hero header!"
              }
              Icons=<BsCardHeading />
            />
            <Card
              title={"Feature boxes"}
              info={
                "We've created some custom feature boxes using Bootstrap Icons!"
              }
              Icons=<BsBootstrap />
            />
            <Card
              title={"Simple clean code"}
              info={
                "We keep our dependencies up to date and squash bugs as they come!"
              }
              Icons=<FaCoffee />
            />
            <Card
              title={"A name you trust"}
              info={
                "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
              }
              Icons=<FaCoffee />
            />
          </div>
        </div>
      </section>
    </div>
  );
};
