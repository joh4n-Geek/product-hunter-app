import { firebaseAuth } from "./config";
import { signInWithEmailAndPassword} from 'firebase/auth';

export const userAuthWithEmailAndPass = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    console.log(result.user);
    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    };
  }
};

export const logOutUser = async () => {
    return await firebaseAuth.signOut();
};