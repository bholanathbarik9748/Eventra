export interface loginBody {
  email: string;
  password: string;
}

export interface authOtpRequestBody {
  email: string;
  password: string;
  role: string;
}

export interface SignUpBody {
  email: string;
  password: string;
  role: string;
  otp: string;
}
