import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const userAuthWithEmailAndPass = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    console.log(result.user);
    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.code,
    };
  }
};

export const userAuthWithGoogle = async () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    console.log(result.user);
    const { uid, photoURL, displayName, email } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.code,
    };
  }
};

export const registerNewUser = async ({ displayName, email, password }) => {
  try {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL } = result.user;
    await updateProfile(firebaseAuth.currentUser,{ displayName });

    return {
      ok: true,
      uid, photoURL, email, displayName
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.code
    };
  }
};

export const userLogOut = async () => {
  return await firebaseAuth.signOut();
};
