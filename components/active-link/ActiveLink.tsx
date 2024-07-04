'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import style  from "./ActiveLink.module.css";



interface Props{
    path:string;
    text:string;
}

export const ActiveLink = ({path, text}:Props) => {
const usePath = usePathname();

  return (
    <Link 
        className={`${style.link} ${ (usePath == path) && style['active-link']}`} 
        href={path}>
                {text}
    </Link>
  )
}
