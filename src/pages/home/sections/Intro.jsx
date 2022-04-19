export default function Intro({ theRef }) {
  return (
    <section ref={theRef} id='intro'>
      <div className='title'>
        <p>کلینیک درمان زخم</p>
        <h1>
          <span>دکتر</span> رسولی نوذری
        </h1>
      </div>
      <div className='team'>
        در کنار تیم ارتوپدی - جراح عروق - متخصص غدد - متخصص عفونی - چشم پزشک -
        متخصص کلیه - پروتز اندام های مصنوعی
      </div>
    </section>
  );
}
