import AboutPage from "./about/page";
import BannerPage from "./banner/page";
import CollectionPage from "./collection/page";
import ExperiencePage from "./experience/page";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
<AboutPage/>
<CollectionPage/>
<ExperiencePage/>
<BannerPage/>
    </div>
  );
}
