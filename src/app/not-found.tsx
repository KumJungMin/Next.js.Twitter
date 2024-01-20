import Link from 'next/link';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
};

export default NotFound;
