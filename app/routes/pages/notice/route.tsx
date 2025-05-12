interface Notice {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Notice() {
  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>공지사항테이블</div>
        <div>공지사항 페이지네이션</div>
      </div>
    </section>
  );
}
