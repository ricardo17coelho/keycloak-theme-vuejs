export interface EnvUrl {
  registration: string;
  loginResetCredentials: string;
  login: string;
  loginAction: string;
  registrationAction: string;
}

export interface EnvTitle {
  loginAccountTitle: string;
  registerTitle: string;
  emailForgotTitle: string;
}

export interface EnvPermission {
  usernameEditDisabled: boolean;
  loginWithEmailAllowed: boolean;
  registrationEmailAsUsername: boolean;
  rememberMe: boolean;
  resetPasswordAllowed: boolean;
  password: boolean;
  registrationAllowed: boolean;
  registrationDisabled: boolean;
  passwordRequired: boolean;
}

export interface EnvLabel {
  firstName: string;
  lastName: string;
  username: string;
  usernameOrEmail: string;
  email: string;
  password: string;
  passwordConfirm: string;
  rememberMe: string;
  doForgotPassword: string;
  doLogIn: string;
  doSubmit: string;
  noAccount: string;
  doRegister: string;
  backToLogin: string;
}

export interface EnvForm {
  loginUsername: string;
  loginRememberMe: boolean;
  selectedCredential: string;
  registerFirstName: string;
  registerLastName: string;
  registerEmail: string;
  registerUsername: string;
}

export interface EnvValidation {
  firstName: string;
  lastName: string;
  email: string;
  usernameOrPassword: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface EnvMessage {
  type: string;
  sumary: string;
}

export interface EnvSocial {
  alias: string;
  displayName: string;
  loginUrl: string;
}

export interface Environment {
  urls: EnvUrl;
  titles: EnvTitle;
  permissions: EnvPermission;
  labels: EnvLabel;
  forms: EnvForm;
  validations: EnvValidation;
  message: EnvMessage;
  social: EnvSocial[];
}
