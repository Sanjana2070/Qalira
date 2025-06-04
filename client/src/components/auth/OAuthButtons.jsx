// src/components/auth/OAuthButtons.jsx
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { auth } from '../../config/firebase';
import { GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const OAuthButtons = ({ onSuccess, onError }) => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      onSuccess?.(result.user);
    } catch (error) {
      console.error('Google sign-in error:', error);
      onError?.(error.message);
    }
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: () => {
          console.log('Recaptcha Verified');
        },
      }, auth);
    }
  };

  const handlePhoneLogin = async () => {
    const phoneNumber = window.prompt('Enter your phone number (with country code, e.g. +91...)');
    if (!phoneNumber) return;

    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      const otp = window.prompt('Enter the OTP sent to your phone:');
      if (!otp) return;

      const result = await confirmationResult.confirm(otp);
      onSuccess?.(result.user);
    } catch (error) {
      console.error('Phone login error:', error);
      onError?.(error.message);
    }
  };

  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      <Button variant="outlined" fullWidth onClick={handleGoogleLogin}>
        Continue with Google
      </Button>
      <Button variant="outlined" fullWidth onClick={handlePhoneLogin}>
        Continue with Phone Number
      </Button>
      {/* Hidden element required by Firebase Recaptcha */}
      <div id="recaptcha-container"></div>
    </Stack>
  );
};

export default OAuthButtons;
