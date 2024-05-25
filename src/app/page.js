import CommentPage from "@/pages/CommentPage";
import DownloadPage from "@/pages/DownloadPage";
import FooterPage from "@/pages/FooterPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import IntroductionPage from "@/pages/IntroductionPage";
import MissionPage from "@/pages/MissionPage";
import SafetyPage from "@/pages/SafetyPage";
import TransformsPage from "@/pages/TransformsPage";
import VisionPage from "@/pages/VisionPage";

export default function Home() {
  return (
    <div className=" w-[100%]">
      <div>
        <IntroductionPage />
      </div>
      <div>
        <HowItWorksPage />
      </div>
      <MissionPage />
      <div>
        <VisionPage />
      </div>
      <div>
        <TransformsPage />
      </div>
      <SafetyPage/>
      <CommentPage/>
      <DownloadPage/>
    </div>
  );
}
