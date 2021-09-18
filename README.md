# react-props-x

```tsx
import { FCX, PX } from "react-props-x";

/**
 * Without this library
 */
const Link: React.FC<{ href: string }> = ({ href, children }) => (
    <a href={href}>{children}</a>
);

/**
 * Using FCX
 */
const Link1: FCX<"a"> = ({ children, ...props /** ←typed! */ }) => (
    <a {...props}>{children}</a>
);

/**
 * Using PX
 */
const Link2 = ({ children, ...props }: PX<typeof Link>) => (
    <Link {...props}>{children}</Link>
);
// → Link2: FCX<typeof Link>
```
