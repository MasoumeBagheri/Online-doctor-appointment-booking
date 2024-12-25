import { GlobalSearchBox } from "@/components/global-search-box";

import MyDoctorLogo from "@/logo/my-doctor.logo";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        رزرو آنلاین نوبت پزشک
      </h1>
      <GlobalSearchBox />
      <div className={styles.history}>
        <div>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
