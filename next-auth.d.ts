
import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        firstName?: string;
        lastName?: string;
        role?: string;
        isOAuth?: boolean;
    }

    interface Session {
        user: User;
    }
}
