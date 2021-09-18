# react-props-x

```tsx
import { FCX, PX } from "react-props-x";

const Link: FCX<"a"> = ({children ...props}) => <a {...props}>{children}</a>;

const Link2 = (props: PX<Link>) => <a {...props}>{children}</a>;
```
