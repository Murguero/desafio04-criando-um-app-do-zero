import Link from 'next/link';
import styles from './header.module.scss';

interface HeaderProps {
  isHome: boolean;
}

export default function Header({ isHome }: HeaderProps) {
  return (
    <Link href="/">
      <header
        className={isHome ? styles.headerContainer : styles.headerContainerPost}
      >
        <img src="/images/logo.svg" alt="logo" />
      </header>
    </Link>
  );
}
