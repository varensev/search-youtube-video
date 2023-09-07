import { Link, useRouteError } from "react-router-dom";
import { APP_ROUTER } from "../../providers/router/config/app-routes.constants";
import styles from "./error-paga.module.scss";
import { classNames } from "../../shared/lib/class-names";

interface ErrorType {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;

  return (
    <div id="error-page" className={classNames("container", {}, [styles.wrapper])}>
      <p className={styles.oops}>Oops!</p>
      <p className={styles.info}>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className={styles.info}>{error.statusText || error.message}</i>
      </p>
      <Link className={classNames(styles.button, {}, ["\"fa fa-angle-left\""])} to={APP_ROUTER.ROOT}>
        Вернуться на главную
      </Link>

    </div>
  );
}
