import { ReactNode } from "react";

export interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
}
export interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}
export interface BentoTiltProps{
  children: ReactNode;
  className?: string
}
export interface BentoCardProps{
  src: string;
  title: ReactNode;
  description?: string;
  isComingSoon?: boolean
}

export interface ImageClipBoxProps{
  src: string,
  clipClass: string
}