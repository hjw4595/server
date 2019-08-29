import { adjectives, nouns } from "./words";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email) => null;

export const sendSecretMail = (adress, secret) =>{
    const email ={
        from : "hongjung73@gmail.com",
        to: adress,
        subject: "login for insta",
        html: `key is ${secret}<br>capy paste on the app</br>`
    }
}