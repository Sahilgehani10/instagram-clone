import {prisma} from "@/db";
import Postsgrid from "./Postsgrid";

export default async function ProfilePosts({email}: {email: string}) {
  const posts = await prisma.post.findMany({
    where: {
        author: email,
    }
})
return (
    <Postsgrid posts={posts}/>
);
}