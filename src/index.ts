export type PX<
    T extends React.Component | keyof JSX.IntrinsicElements,
    U = {}
> = U &
    (T extends React.Component<infer V>
        ? V
        : T extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
              infer Attr,
              unknown
          >
            ? Attr
            : never
        : never);

export type FCX<
    T extends React.Component | keyof JSX.IntrinsicElements,
    U = {}
> = React.FC<PX<T, U>>;
