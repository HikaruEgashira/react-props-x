import { FCX, PX } from "react-props-x";

const Link: React.FC<{ href: string }> = ({ href, children }) => (
    <a href={href}>{children}</a>
);

const Link1: FCX<"a"> = ({ children, ...props }) => (
    <a {...props}>{children}</a>
);

const Link2 = ({ children, ...props }: PX<typeof Link>) => (
    <Link {...props}>{children}</Link>
);
