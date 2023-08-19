import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { useRouter } from "next/router";
import { localeNames, locales } from "@/locale/constants";

export const Header = () => {
  // Traemos la información del idioma utilizando useRouter()
  const { locale, asPath } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <figure>
          <Image src="/img/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>Tienda</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./">Productos Destacados</Link>
        <Link href="./tycs">Términos y condiciones</Link>
      </div>
      <div className={styles.localeSwitch}>
        {/* Mediante el atributo locale le indicamos a Next que idioma queremos utilizar al hacer la
          redirección
           */}

        <Link href={asPath} locale={locales.ES_ES}>
          <p className={locale === locales.ES_ES ? styles.active : ""}>
            <Image
              src="/img/spanish.png"
              alt="spanish"
              width={40}
              height={40}
            />
            {localeNames[locales.ES_ES as keyof typeof localeNames]}
          </p>
        </Link>

        <Link href={asPath} locale={locales.EN_US}>
          <p className={locale === locales.EN_US ? styles.active : ""}>
            <Image
              src="/img/usa.png"
              alt="english"
              width={40}
              height={40}
            />
            {localeNames[locales.EN_US as keyof typeof localeNames]}
          </p>
        </Link>

        <Link href={asPath} locale={locales.PT_BR}>
          <p className={locale === locales.PT_BR ? styles.active : ""}>
            <Image
              src="/img/brazil.png"
              alt="protugues"
              width={40}
              height={40}
            />
            {localeNames[locales.PT_BR as keyof typeof localeNames]}
          </p>
        </Link>
      </div>
    </header>
  );
};


