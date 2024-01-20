import { redirect } from 'next/navigation';

// redirect가 있으므로, /login 으로 이동시, 강제로 /i/flow/login 으로 이동시킴
export default function Login() {
  redirect('/i/flow/login');
}
