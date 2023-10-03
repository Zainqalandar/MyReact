import { Client, Databases, Query, Storage, ID } from "appwrite";
import confi from '../confi/confi'


export class Sevicse {
    client = new Client();
    databases;
    storage;
    constructor() {
        this.client
            .setEndpoint(confi.appwriteUrl)
            .setProject(confi.appwriteprojectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, content, slug, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                confi.appwritedatabaseId,
                confi.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log(error)

        }

    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                confi.appwritedatabaseId,
                confi.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log(error)
        }

    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                confi.appwritedatabaseId,
                confi.appwritecollectionId,
                slug
            )
            return true;

        } catch (error) {
            console.log(error)
            return false;

        }

    }
    async getPost(slug) {
        try {
            await this.databases.getDocument(
                confi.appwritedatabaseId,
                confi.appwritecollectionId,
                slug
            )

            return true;

        } catch (error) {
            console.log(error)
            return false;
        }

    }

    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                confi.appwritedatabaseId,
                confi.appwritecollectionId,
                queries
            )

        } catch (error) {
            console.log(error)

        }

    }
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                confi.appwritebucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log(error)

        }



    }
    async deletFile(fileId) {
        try {
            return await this.storage.deleteFile(
                confi.appwritebucketId,
                fileId
            )
            return true;

        } catch (error) {
            console.log(error)

        }

    }
    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            confi.appwritebucketId,
            fileId
        );
    }
}

const sevicse = new Sevicse();

export default sevicse;