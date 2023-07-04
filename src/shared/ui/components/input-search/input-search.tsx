import styles from "./input-search.module.scss"

const InputSearch = () => {
    return (
        <form className={styles.containerInput}>
            <input type="text" placeholder="Что хотите посмотреть?"/>
            <button type="submit">Найти</button>
        </form>
    );
};

export {InputSearch};
