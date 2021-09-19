import { FCX, PX } from "react-props-x";
import { Document } from "react-pdf";

const Link: React.FC<{ href: string }> = ({ href, children }) => (
    <a href={href}>{children}</a>
);

// alternative syntax
const Link1: FCX<"a"> = ({ children, ...props }) => (
    <a href={props.href}>{children}</a>
);

// extends functional component
const Link2 = ({ children, ...props }: PX<typeof Link1>) => (
    <Link1 {...props}>{children}</Link1>
);

// using library
const Pdf: FCX<Document> = (props) => <Document {...props} />;

const Main = () => (
    <>
        <Link2 className="text-xl" style={{ opacity: 80 }} href="#hello">
            Hello
        </Link2>
    </>
);
