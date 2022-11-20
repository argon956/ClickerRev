const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? "login-alert-error" : "login-alert-success"
      } bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}
      data-cy="login-alert-required-field"
    >
      {alert.msg}
    </div>
  );
};

export default Alert;
