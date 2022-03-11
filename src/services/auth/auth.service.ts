import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const auth = getAuth();

class AuthService {
    signIn(id: string, password: string) {
        const user = signInWithEmailAndPassword(auth, id, password);
        return user;
    }

    signOut(){
        signOut(auth);
    }
}

export default new AuthService();