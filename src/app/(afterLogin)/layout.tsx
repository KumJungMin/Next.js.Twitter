// AfterLoginLayout은 로그인 후에 보여지는 페이지의 레이아웃을 담당합니다.

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
