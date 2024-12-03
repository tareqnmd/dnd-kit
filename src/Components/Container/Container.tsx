import React, { forwardRef } from "react";
import classNames from "classnames";

import { Handle } from "../Handle";
import { Remove } from "../Remove";

import styles from "./Container.module.css";

export interface Props {
  children: React.ReactNode;
  label?: string;
  style?: React.CSSProperties;
  handleProps?: React.HTMLAttributes<any>;
  shadow?: boolean;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      handleProps,
      onClick,
      onRemove,
      label,
      style,
      shadow,
      ...props
    }: Props,
    ref
  ) => {
    const Component = onClick ? "button" : "div";

    return (
      <Component
        {...props}
        ref={ref}
        style={style}
        className={classNames(styles.container, shadow && styles.shadow)}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        {label ? (
          <div className={styles.header}>
            <div className={styles.dragHandle}>
              <Handle {...handleProps} />
            </div>
            <div className={styles.label}>{label}</div>
            <div className={styles.actions}>
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
            </div>
          </div>
        ) : null}
        <ul>{children}</ul>
      </Component>
    );
  }
);
