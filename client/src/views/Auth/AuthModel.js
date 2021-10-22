import api from '../../serverUtils';

const RegisterUser = (setUser) => (history, username, password, isDriver, paymentMethods) => {
  api.auth.register(username, password, isDriver, paymentMethods)
    .then((response) => {
      if (response.status === 201) {
        setUser(response.data);
        history.push('/');
      }
    });
};

export default RegisterUser;
