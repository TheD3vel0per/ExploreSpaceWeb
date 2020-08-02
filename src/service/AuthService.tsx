import { sign } from 'crypto';
import * as firebase from 'firebase';

export class AuthService {

    constructor() {

    }

    async signOut() {
        await firebase.auth().signOut();
    }

    async signInWithYahoo() {
        const provider = new firebase.auth.OAuthProvider('yahoo.com');
        const result = await this.signIn(provider);
        return result;
    }

    async signInWithTwitter() {
        const provider = new firebase.auth.TwitterAuthProvider();
        const result = await this.signIn(provider);
        return result;
    }

    async signInWithGithub() {
        const provider = new firebase.auth.GithubAuthProvider();
        const result = await this.signIn(provider);
        return result;
    }

    async signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await this.signIn(provider);
        return result;
    }

    async signInWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        const result = await this.signIn(provider);
        return result;
    }

    private async signIn(provider: firebase.auth.AuthProvider) {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

        let result: firebase.auth.UserCredential;
        try {
            result = await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            alert("error signing in... please try using chrome or firefox and enable cookies")
            console.error(error);
        }

        return result;
    }


}

window['authService'] = new AuthService();
export const authService: AuthService = window['authService'];