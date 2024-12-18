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

export interface ProfileBody {
  name: string;
  phone_number: string;
  location: string;
  bio: string;
  date_of_birth: any;
  profile_picture: any;
}
