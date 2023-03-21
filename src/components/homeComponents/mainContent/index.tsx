import PostsSection from "../PostsSection";
import StarsIcon from "../../../../public/images/stars-icon.svg";

import { ContentContainer, TweetInput } from "./styles";
import Aside from "../aside";

const MainContent = () => {
  return (
    <>
      <ContentContainer>
        <nav>
          <div>Tweets Mais Recentes</div>
          <StarsIcon />
        </nav>
        <TweetInput>
          <input type="text" placeholder="O que está acontecendo?" />
          <div>
            <span>Icons</span>
            <button>Tweetar</button>
          </div>
        </TweetInput>
        <PostsSection />
      </ContentContainer>
      <Aside />
    </>
  );
};

export default MainContent;
