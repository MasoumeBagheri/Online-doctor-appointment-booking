import Link from "next/link";
import Image from "next/image";

import idkLogo from "@/assets/logo/idk.svg";
import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";

import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>رزرو آنلاین نوبت پزشک</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="IDK Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="Certificate Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="Enamad Logo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="#" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/masoumehbagheri/"
              target="_blank"
            >
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        من می‌باشد!
      </p>
    </footer>
  );
};
