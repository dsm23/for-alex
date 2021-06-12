import { forwardRef, useRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";
import mergeRefs from "react-merge-refs";

import styles from "./styles.module.css";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  inputClasses?: string;
  labelClasses?: string;
  sectionClasses?: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      label,
      list,
      inputClasses = "",
      labelClasses = "",
      sectionClasses = "",
      ...props
    },
    ref
  ) => {
    const localRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      localRef.current!.focus();
      if (list) {
        localRef.current!.click();
      }
    };

    return (
      <section
        className={clsx("elevation", styles.section, sectionClasses)}
        onClick={handleClick}
      >
        <input
          id={id}
          className={clsx(styles.input, inputClasses)}
          placeholder=" "
          ref={mergeRefs([localRef, ref])}
          list={list}
          {...props}
        />
        <label className={clsx(styles.label, labelClasses)}>{label}</label>
      </section>
    );
  }
);

export default TextField;
