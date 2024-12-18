import { apiClient } from "@/src/utils/Api";
import { loginBody, ProfileBody, SignUpBody } from "../Types/AuthTypes";

export const loginUser = async (body: loginBody): Promise<any> => {
  try {
    const response = await apiClient.post("/login", body);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const sendAuthOtp = async (email: string): Promise<any> => {
  let reqBody = {
    email,
  };

  try {
    const response = await apiClient.post("/otp-request", reqBody);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (body: SignUpBody): Promise<any> => {
  try {
    const response = await apiClient.post("/sign-up", body);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const checkProfileStatus = async (id: string | null): Promise<any> => {
  try {
    const response = await apiClient.get(`/profile/check/${id}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const uploadProfilePicture = async (
  body: ProfileBody
): Promise<any> => {
  const formData = new FormData();

  if (body.profile_picture) {
    formData.append("files", {
      uri: body.profile_picture as any, // Use `as any` for TypeScript compatibility
      name: "profile_picture.png", // Set a filename with an extension
      type: "image/png", // Specify the MIME type
    } as unknown as Blob); // Type assertion to Blob
  }

  try {
    const response = await apiClient.post("/upload-profile-picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const ProfileSetup = async (
  id: string,
  body: ProfileBody,
  profileUrl: string
): Promise<any> => {
  let reqBody = {
    name: body.name,
    phone_number: body.phone_number,
    location: body.location,
    profile_picture: profileUrl,
    bio: body.bio,
    date_of_birth: body.date_of_birth,
  };
  try {
    const response = await apiClient.post(`/profile/${id}`, reqBody);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
