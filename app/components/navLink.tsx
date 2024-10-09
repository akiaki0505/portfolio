import React from 'react'
import Link from 'next/link';

type Props = {
    href: string;
    className: string;
    linkName: string;
}

export const NavLink = ({href, className, linkName}:Props) => {
  return (
    <Link href={href} className={className} >{linkName}</Link>
  )
}
