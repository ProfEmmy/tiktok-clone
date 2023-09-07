import { Beau_Rivage } from "next/font/google"
import styles from "../styles/signupstyles.module.css"
import Image from "next/image"
import Head from "next/head"

export default function () {
    return (
        <>
            <Head>
                <title>SignUp</title>
            </Head>
            <div className={styles.main_content_div}>
                <div className={styles.main_content}>
                    <div className={styles.tiktok_img_div}>
                        <Image src="/tiktokimg1.jpg" width={100} height={100} className={styles.tiktok_img} />
                    </div>
                    <div className={styles.signup_div}>
                        <div className={styles.signup_innerdiv}>
                            <h1 className={styles.signup_txt}>SignUp</h1>
                            <form className={styles.signup_form}>
                                <input type="text" className={styles.input_field} placeholder="username" />
                                <br />
                                <input type="text" className={styles.input_field} placeholder="password" />
                                <br />
                                <input type="submit" className={styles.signup_btn} value="SignUp" />
                            </form>
                            <p className={styles.login_option_txt}>Already have an account? <a href="/login" className={styles.login_option_link}>Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}