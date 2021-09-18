import React from "react";

export type PX<
    T extends React.FC<any> | React.Component | keyof JSX.IntrinsicElements,
    U = {}
> = U &
    (T extends React.Component<infer V>
        ? T
        : T extends React.FC<infer V>
        ? React.PropsWithChildren<V>
        : T extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
              infer Attr,
              unknown
          >
            ? Attr
            : never
        : never);

export type FCX<
    T extends React.FC<any> | React.Component | keyof JSX.IntrinsicElements,
    U = {}
> = React.FC<PX<T, U>>;
