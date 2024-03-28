//import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
    //loadingUser: false,
    loadingSession: false,
  }),
  actions: {
    async registerUser(email, password) {
      this.loadingSession = true;
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.uid };
        //this.loadingSession = false;
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingSession = false;
      }
    },
    async loginUser(email, password) {
      this.loadingSession = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.uid };
        //this.loadingSession = false;
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingSession = false;
      }
    },
    async logoutUser() {
      try {
        await signOut(auth);
        this.userData = null;
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    /*currentUser() {
      return new Promise((resolve, reject) => {
        const unsuscribe = onAuthStateChanged(
          auth,
          async (user) => {
            if (user) {
              this.userData = {
                email: user.email,
                uid: user.uid,
              };
            } else {
              this.userData = null;
            }
            resolve(user);
          },
          (e) => reject(e)
        );
        unsuscribe();
      });
    },*/
    currentUser() {
      let unsubscribe;
      return new Promise((resolve, reject) => {
        unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              this.userData = { email: user.email, uid: user.uid };
            } else {
              this.userData = null;
            }
            resolve(user);
          },
          (e) => reject(e)
        );
      }).then((user) => {
        unsubscribe();
        return user;
      });
    },
  },
});
