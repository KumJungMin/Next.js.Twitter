import Image from 'next/image'; // Image는 next에서 제공하는 이미지 태그
import Link from 'next/link'; // Link는 next에서 제공하는 링크 태그로, 페이지 새로고침 없이 이동 가능
import styles from './page.module.css';
import zLogo from '../../public/zlogo.png';

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나는 있는 일</h1>
        <h2>지금 가입하세요</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
