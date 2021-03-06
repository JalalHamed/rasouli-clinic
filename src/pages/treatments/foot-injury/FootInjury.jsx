// Container
import Treatments from '../Treatments';
// Components
import GenerateImage from '../../../components/GenerateImage';
// Images
import grade0 from '../../../assets/imgs/foot-injury/0.jpg';
import grade1 from '../../../assets/imgs/foot-injury/1.jpg';
import grade2 from '../../../assets/imgs/foot-injury/2.jpg';
import grade3 from '../../../assets/imgs/foot-injury/3.jpg';
import grade4 from '../../../assets/imgs/foot-injury/4.jpg';

export default function FootInjury() {
  return (
    <Treatments>
      <section>
        <h3>زخم پای دیابتی</h3>
        <p>
          زخم پا در افراد دیابتی که دیابت کنترل نشده دارند بسیار شایع است، این
          زخم ها غالباً در اثر تخریب پوست و قرارگیری بافت های زیر پوست، در معرض
          آلودگی ایجاد می شود. زخم پای دیابتی اغلب زیر انگشت شست و کف پا ایجاد
          می شوند . این زخم ها می توانند روی راه رفتن افراد تاثیر بگذارند. تمامی
          افراد دیابتی در معرض خطر ابتلا به زخم پای دیابتی هستند اما مراقبت صحیح
          از پا می تواند از بروز{' '}
          <a
            href='https://fa.wikipedia.org/wiki/%D8%B2%D8%AE%D9%85'
            target='_blank'
            rel='noreferrer'
          >
            زخم
          </a>{' '}
          پای دیابتی جلوگیری کند.
        </p>
      </section>
      <section>
        <h3>علائم زخم پای دیابتی</h3>
        <p>
          از شایع ترین علائم زخم پای دیابتی می توان به وجود ترشح روی جوراب یا
          حتی کفش افراد دیابتی اشاره کرد. التهاب، تورم، قرمزی، بوی بد نیز می
          توانند از علائم زخم پای دیابتی باشند. بیشترین علائم قابل مشاهده در زخم
          پای دیابتی وجود بافت سیاه رنگ (نکروتیک) در اطراف و حاشیه زخم است این
          بافت های سیاه رنگ به علت کاهش خونرسانی در حاشیه زخم ایجاد می شوند.
          نکروز (گانگرن یا سیاه شدگی) به صورت کامل یا جزئی به دنبال عفونت در
          بافت مرده می تواند در حاشیه زخم ها وجود داشته باشد. به دنبال نکروز در
          افراد مختلف بوی بد، ترشح، درد و یا حتی بی حسی می تواند رخ دهد.
        </p>
      </section>
      <section>
        <h3>زمان مراجعه به پزشک</h3>
        <p>
          به محض روئیت هر علامت غیر طبیعی شامل تغییر رنگ (خصوصاً سیاه شدن) درد،
          تاول، پینه، التهاب سریعاً به پزشک معالج زخم مراجعه کنید.
        </p>
      </section>
      <section>
        <h3>درجه بندی زخم پای دیابتی</h3>
        <p>
          درجه 0: در این مرحله هنوز زخمی ایجاد نشده است یا زخم قبلی درمان شده
          است.
        </p>
        <GenerateImage id={0} src={grade0} />
        <p>درجه 1 : زخم سطحی بدون گسترش به لایه های عمقی تر</p>
        <GenerateImage id={1} src={grade1} />
        <p>درجه 2: زخم های عمقی با گسترش به تاندون، استخوان مفصل</p>
        <GenerateImage id={2} src={grade2} />
        <p>
          درجه 3: زخم های عمقی تر با آسیب به استخوان ( استئومیلیت) و تاندون (
          تاندونیت)
        </p>
        <GenerateImage id={3} src={grade3} />
        <p>درجه 4: نکروز در بخشی از پا یا پاشنه</p>
        <GenerateImage id={4} src={grade4} />
        <p>درجه 5: نکروز گسترده پا که کل پارا در بر گرفته</p>
      </section>
      <section>
        <h3>علل ایجاد زخم پای دیابتی</h3>
        <p>زخم پای دیابتی در افراد دیابتی به علل زیر ایجاد می شوند.</p>
        <ol>
          <li>گردش خون ضعیف</li>
          <li>بالا بودن قند خون</li>
          <li>آسیب به اعصاب پا (نوروپاتی)</li>
        </ol>
      </section>
      <section>
        <h3>علائم خطر زخم پای دیابتی</h3>
        <p>
          تمامی افراد دیابتی در معرض زخم های دیابتی هستند که می تواند علل متعددی
          داشته باشد.
        </p>
        <ul>
          <li>استفاده از کفش و دمپایی نامناسب</li>
          <li>عدم رعایت بهداشت</li>
          <li>کوتاه کردن نامناسب ناخن انگشتان</li>
          <li>مصرف الکل</li>
          <li>مصرف دخانیات</li>
          <li>بیماری های چشم و کم بینایی به دنبال دیابت</li>
          <li>بیماری قبلی</li>
          <li>بیماری های کلیوی</li>
          <li>چاقی</li>
        </ul>
      </section>
      <section>
        <h3>درمان زخم پای دیابتی</h3>
        <p>
          خط اول در درمان زخم پای{' '}
          <a
            href='https://fa.wikipedia.org/wiki/%D8%AF%DB%8C%D8%A7%D8%A8%D8%AA'
            target='_blank'
            rel='noreferrer'
          >
            دیابتی
          </a>{' '}
          جلوگیری از وزن گذاری روی زخم می باشد.
        </p>
        <p>راه های جلوگیری از وزن گذاری (آفلودینگ)</p>
        <ol>
          <li>کفش های طراحی شده مخصوص پای شما</li>
          <li>گچ گیری</li>
          <li>استفاده از بریس</li>
          <li>استفاده از باندهای کشی مخصوص</li>
          <li>کفش های مخصوص پیشگیری از تشکیل پینه</li>
        </ol>
        <p>
          اگر عدم وزن گذاری روی زخم در بهبود زخم نتیجه ای نداشت پزشک شما راه های
          درمانی دیگری را انتخاب می کند.
        </p>
      </section>
      <section>
        <h3>عفونت زخم پای دیابتی</h3>
        <p>
          عفونت در زخم پای دیابتی یک شرایط جدی است که مستلزم درمان سریع می باشد
          ولی باید توجه داشت که تمامی عفونت ها به یک شیوه درمان نمی شود.
        </p>
        <p>راه های جلوگیری از عفونت زخم پای دیابتی</p>
        <ol>
          <li>شتسشوی پا</li>
          <li>ضد عفونی کردن اطراف زخم</li>
          <li>تعویض صحیح و به موقع پانسمان</li>
          <li>استفاده از پانسمان های مناسب برای جلوگیری از رشد باکتری</li>
          <li>آنتی بیوتیک</li>
        </ol>
      </section>
      <section>
        <h3>راه های پیشگیری از زخم پای دیابتی</h3>
        <ul>
          <li>شستشوی روزانه پا</li>
          <li>مرطوب کردن و خشک کردن پا</li>
          <li>تعویض مکرر جوراب</li>
          <li>استفاده از کفش های مناسب دیابتی ها</li>
          <li>کوتاه کردن مناسب ناخن ها</li>
          <li>برداشت صحیح و اصولی پینه توسط پزشک</li>
        </ul>
      </section>
    </Treatments>
  );
}
