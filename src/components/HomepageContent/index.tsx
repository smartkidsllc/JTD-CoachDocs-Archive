import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <p className="features">
                        Written by the coaches from Codewiz Reading.
                    </p>
                </div>
            </div>
        </section>
    );
}
