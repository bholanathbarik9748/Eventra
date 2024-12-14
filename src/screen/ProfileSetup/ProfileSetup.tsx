import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { color } from "@/src/utils/Constant";
import { ProfileSetupBody } from "@/src/Types/AuthTypes";
import { globalFormHandler } from "@/src/utils/FormHandler";
import { styles } from "./Styles/Styles";
import {
  profileSetUp,
  uploadProfilePicture,
} from "@/src/Services/AuthServices";
import { ErrorAlert } from "@/src/modules/ErrorAlert";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "@/app/RootStackParamType";

const ProfileSetup: React.FC<any> = ({ route }) => {
  const { id } = route.params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigationController = useNavigation<HomeScreenNavigationProp>();
  const [profile, setProfile] = useState<ProfileSetupBody>({
    name: "",
    phone_number: "",
    location: "",
    bio: "",
    date_of_birth: "",
    profile_picture: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  // Handle Image Upload
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfile({ ...profile, profile_picture: result.assets[0].uri });
    }
  };

  // Date Picker Handler
  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      setDate(selectedDate);
      setProfile({ ...profile, date_of_birth: formattedDate });
    }
  };

  // Helper function for image upload
  const handleImageUpload = async (profile: any): Promise<any> => {
    try {
      const response = await uploadProfilePicture(profile);
      return response?.status === "success" ? response?.url : "";
    } catch (error: any) {
      ErrorAlert(
        "Error",
        error?.data?.message?.[0] || "Image upload failed",
        "Close"
      );
    }
  };

  // Submit Handler
  const handleSubmit = async () => {
    setIsLoading(true);
    if (!profile.name || !profile.location) {
      alert("Please fill in all required fields: Name, Email, and Location.");
      return;
    }

    try {
      // Upload profile picture if available
      const imageURL = profile.profile_picture
        ? await handleImageUpload(profile)
        : "";

      const response = await profileSetUp(id, profile, imageURL);
      if (response?.status === "success") {
        navigationController.navigate("Home");
      }
    } catch (error: any) {
      ErrorAlert("Error", error?.data?.message[0], "Close");
    }
    setIsLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile Setup</Text>

      {/* Profile Picture */}
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {profile.profile_picture ? (
          <Image
            source={{ uri: profile.profile_picture }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.imagePlaceholder}>Upload Picture</Text>
        )}
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name*"
        placeholderTextColor={color.TextSecondary}
        value={profile.name}
        onChangeText={(text) => globalFormHandler("name", text, setProfile)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor={color.TextSecondary}
        keyboardType="phone-pad"
        value={profile.phone_number}
        onChangeText={(text) =>
          globalFormHandler("phone_number", text, setProfile)
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Location*"
        placeholderTextColor={color.TextSecondary}
        value={profile.location}
        onChangeText={(text) => globalFormHandler("location", text, setProfile)}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Bio"
        placeholderTextColor={color.TextSecondary}
        multiline
        value={profile.bio}
        onChangeText={(text) => globalFormHandler("bio", text, setProfile)}
      />

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>
          {profile.date_of_birth || "Select Date of Birth"}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
          maximumDate={new Date()}
        />
      )}
      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              profile.name && profile.location ? color.AccentColor : "#555",
          },
        ]}
        onPress={handleSubmit}
        disabled={!profile.name || !profile.location || isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Saving..." : "Save Profile"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileSetup;
