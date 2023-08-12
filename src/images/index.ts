import { ReactComponent as ArrowCircle } from './icons/arrow-circle.svg';
import { ReactComponent as Calendar } from './icons/calendar-check.svg';
import { ReactComponent as Chevron } from './icons/chevron.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import { ReactComponent as Delete } from './icons/delete.svg';
import { ReactComponent as LogInIcon } from './icons/log-in.svg';
import { ReactComponent as LogOutIcon } from './icons/log-out.svg';
import { ReactComponent as BurgerMenu } from './icons/menu.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as EditIcon } from './icons/pencil.svg';
import { ReactComponent as AddIcon } from './icons/plus.svg';
import { ReactComponent as AddCircleIcon } from './icons/plus-circle.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as UserCheck } from './icons/user-check.svg';
import { ReactComponent as UserAvatar } from './icons/user.svg';
import { ReactComponent as GoogleIcon } from './icons/google.svg';
import { ReactComponent as EyeIcon } from './icons/eye.svg';
import { ReactComponent as EyeClosedIcon } from './icons/eye-slash.svg';
import { ReactComponent as RadioButton } from './icons/rb.svg';
import { ReactComponent as RadioButtonActive } from './icons/rb-active.svg';
import { ReactComponent as NotFoundIcon } from './icons/sad_goose_404.svg';
import { ReactComponent as DropIcon } from './icons/water-drop.svg';
import { ReactComponent as GradeStarGold } from './icons/grade-star-in-gold-color.svg';
import { ReactComponent as GradeStarGrey } from './icons/grade-star-in-grey-color.svg';
import { ReactComponent as SlickArrowNext } from './icons/slick-arrow-next.svg';
import { ReactComponent as SlickArrowPrev } from './icons/slick-arrow-prev.svg';

import register from './register.png';
import rocket from './rocket.png';
import goose from './goose.png';
import motivation from './motivation.png';

import register2x from './register@2x.png';

interface IIcons {
  [key: string]: React.ComponentType<any>;
}

interface IImg {
  [key: string]: string;
}

export const SVG: IIcons = {
  ArrowCircle,
  Calendar,
  Chevron,
  CloseIcon,
  Delete,
  LogInIcon,
  LogOutIcon,
  BurgerMenu,
  MoonIcon,
  EditIcon,
  AddIcon,
  AddCircleIcon,
  SunIcon,
  UserCheck,
  UserAvatar,
  GoogleIcon,
  EyeIcon,
  EyeClosedIcon,
  RadioButton,
  RadioButtonActive,
  NotFoundIcon,
  DropIcon,
  GradeStarGold,
  GradeStarGrey,
  SlickArrowNext,
  SlickArrowPrev,
};

export const IMG: IImg = {
  register,
};

export const IMG2x: IImg = {
  register2x,
};
