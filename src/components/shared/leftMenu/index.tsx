import {
  LogoStyled,
  SideContainer,
  MenuContainer,
  TwitButton,
  PerfilConfigButton,
} from "./styles";
import HomeIcon from "../../../../public/images/home-icon.svg";
import ExploreIcon from "../../../../public/images/explore-icon.svg";
import NotIcon from "../../../../public/images/notification-icon.svg";
import MessagesIcon from "../../../../public/images/messages-icon.svg";
import BookMark from "../../../../public/images/bookMarks-icon.svg";
import ListsIcon from "../../../../public/images/lists.icon.svg";
import ProfileIcon from "../../../../public/images/profile-icon.svg";
import ConfigIcon from "../../../../public/images/three-dots.svg";
import FeatherIcon from "../../../../public/images/feather-icon.svg";
import Capa from "../../../../public/images/profile/perfil.jpg";
import Image from "next/image";

const LeftMenu = () => {
  return (
    <SideContainer>
      <MenuContainer>
        <li>
          <a href="/">
            <div>
              <LogoStyled />
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <HomeIcon />
              <span>Página Inicial</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <ExploreIcon />
              <span>Explorar</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <NotIcon />
              <span>Notificações</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <MessagesIcon />
              <span>Messagens</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <BookMark />
              <span>Itens Salvos</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <ListsIcon />
              <span>Listas</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <ProfileIcon />
              <span>Perfil</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <ConfigIcon />
              <span>Mais</span>
            </div>
          </a>
        </li>
      </MenuContainer>
      <TwitButton>
        <FeatherIcon />
        <span> Tweetar </span>
      </TwitButton>
      <PerfilConfigButton>
        <div className="image-container">
          <Image width={100} height={100} src={Capa} alt="perfil" />
        </div>
        <div className="names">
          <div>matheus</div>
          <div>@krisciumas</div>
        </div>
        <div className="config">
          <ConfigIcon />
        </div>
      </PerfilConfigButton>
    </SideContainer>
  );
};

export default LeftMenu;
