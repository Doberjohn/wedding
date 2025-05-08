import {JSX} from "react";

interface ButtonProps {
  children: string | JSX.Element;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}
      className="bg-transparent hover:bg-stone-700 text-brown-700 font-semibold hover:text-white py-2 px-4 border border-brown-700 hover:border-transparent rounded cursor-pointer">
      {props.children}
    </button>
  )
}