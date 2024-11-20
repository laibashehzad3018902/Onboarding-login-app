import Mybutton from "@/app-example/components/Mybutton";
import { View, Text, Image, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  // State variables for email, password, error messages, and password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validateEmail = (email) => {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onLogin = () => {
    setError(""); // Reset error message

    // Validation checks
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Show success message
    Alert.alert("Success", "Login successful!");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const goToSignup = () => {
    router.push("/signup");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/loginn.png")}
        style={{
          width: "100%",
          height: 300,
        }}
        resizeMode="center"
      />

      <View style={{ padding: 20, gap: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            alignItems: "center",
            fontSize: 25,
          }}
        >
          Welcome to Login!
        </Text>

        {/* Email Input */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            padding: 10,
            borderRadius: 10,
          }}
        />

        {/* Password Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            height: 50,
          }}
        >
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Your Password"
            secureTextEntry={!isPasswordVisible}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text style={{ color: "blue" }}>
              {isPasswordVisible ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Validation Error Message */}
        {error ? (
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
        ) : null}

        <Text style={{ color: "red" }}>Forgot Password?</Text>

        {/* Login Button */}
        <Mybutton title={"Login"} OnPress={onLogin} />

        {/* Signup Link */}
        <TouchableOpacity onPress={goToSignup}>
          <Text style={{ color: "red", marginTop: 10 }}>
            Don't have an account? Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
