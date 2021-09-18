import React from "react";

/**
 * 1. tag ... `<a>, <button>` → `"a", "button"`
 * 2. Class Component ... `class Link extends React.Component { ... }` → `Link`
 * 3. Functional Component ... `const Link = (props) => { ... }` → `typeof Link`
 */
type ReactComponent =
    | keyof JSX.IntrinsicElements
    | React.Component
    | React.FC<any>;

/**
 * @example
 * const Link = (props: PX<"a">) => {
 *   return <a href={props.href}>{props.children}</a>;
 * };
 *
 * const MyButtonPrimary = (props: PX<typeof MyButton>) => {
 *   return <MyButton {...props} className="text-primary" />;
 * };
 */
export type PX<T extends ReactComponent, U = {}> = U &
    (T extends React.Component<infer V>
        ? V
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

/**
 * @example
 * const Link: FCX<"a"> = (props) => {
 *   return <a href={props.href}>{props.children}</a>;
 * };
 *
 * const MyButtonPrimary: FCX<typeof MyButton> = (props) => {
 *   return <MyButton {...props} className="text-primary" />;
 * };
 */
export type FCX<T extends ReactComponent, U = {}> = React.FC<PX<T, U>>;
