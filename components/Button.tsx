import {JSX} from "react";

interface ButtonProps {
  children: string | JSX.Element;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}
      className="bg-white font-semibold text-lg text-[#c9b872] border border-[#c9b872] hover:bg-[#c9b872] hover:text-white hover:border-transparent py-3 px-6 rounded cursor-pointer">
      {props.children}
    </button>
  )
}