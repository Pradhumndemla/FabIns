import AdsPost from "./AdsPost";
import FriendSuggestion from "./FriendSuggestion";
import Post from "./Post";
import MultiPost from "./MultiPost";
import SimplePost from "./SimplePost";
import VotePost from "./VotePost";
import VoteResultPost from "./VoteResultPost";
import BlogPost from "./BlogPost";
import SimplePost2 from "./SimplePost2";
import LoadMorePost from "./LoadMorePost";

export default function Timeline() {
    return (
        <>
            <Post />
            <AdsPost />
            <MultiPost />
            <SimplePost />
            <FriendSuggestion />
            <VotePost />
            <VoteResultPost />
            <BlogPost />
            <SimplePost2 />
            <LoadMorePost />
        </>
    );
}