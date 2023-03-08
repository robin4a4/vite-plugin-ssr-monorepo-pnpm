export { Link };

import React from "react";

function Link({ href, children }: { href: string; children: string }) {
  const isActive = true;
  return (
    <a href={href} className={isActive ? "is-active" : undefined}>
      {children}
    </a>
  );
}
