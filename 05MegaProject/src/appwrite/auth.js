import conf from '../confi/confi'

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteprojectId)
        this.account = new Account(this.client)
    }
    async createAccount({email, password , name}) {
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password, name)
            if (userAccount) {
                // call another Methord
                this.login({email, password})
            }
            else{
                return userAccount
            }
            
        } catch (error) {
            throw error
            
        }

    }
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password)
            
        } catch (error) {
            throw error
            
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("This is the error getCurrentUser",error)
            
        }
        return null;
    }
    async logout() {
        try {
            return await this.account.deleteSessions()
            
            
        } catch (error) {
            console.log("This is the error logout",error)
        }
    }
}

const authservice = new AuthService()

export default authservice;