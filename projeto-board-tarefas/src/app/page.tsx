import Head from "next/head";
import Image from "next/image";
import style from "@/app/home.module.css";
//import heroImg from "@/public/assets/hero.png";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
      </Head>

      <main className={style.main}>
        <div className={style.logoContent}>
          <Image
            className={style.hero}
            alt="Logo Tarefas"
             src="/assets/hero.png" 
             width={400}
             height={400}
            priority
          />
        </div>
        <h1 className={style.title}>
          Sistemas feito para você organizar <br />
          seus estudos e tarefas
        </h1>
        <div className={style.infoContent}>
          <section className={style.box}>
            <span>+12 posts</span>
          </section>
          <section className={style.box}>
            <span>+90 comentários</span>
          </section>
        </div>
      </main>
    </div>
  );
}
