import { FCX, PX } from "react-props-x";
import { Document } from "react-pdf";

const Link: React.FC<{ href: string }> = ({ href, children }) => (
    <a href={href}>{children}</a>
);

const Link1: FCX<"a"> = ({ children, ...props }) => (
    <a href={props.href}>{children}</a>
);

const Link2 = ({ children, ...props }: PX<typeof Link>) => (
    <Link {...props}>{children}</Link>
);

const Pdf: FCX<Document> = (props) => <Document {...props} />;
