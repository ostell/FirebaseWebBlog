import { useEffect, useState } from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import styled from 'styled-components'
import { db, auth } from '../firebase_config'


const Containter = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

const PostContainter = styled.div`
  width: 600px;
  height: auto;
  max-height: 600px;
  background-color: rgb(250, 250, 250);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
`

const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const PostTitle = styled.h1`
  flex: 50%;
`

const PostDeleteContainter = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const PostDeleteButton = styled.button`
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
`

const PostTextContainer = styled.div`
  word-wrap: break-word;
  height: auto;
  max-height: 400px;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
`

const Home = ({isAuth}) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getPosts();
  }, [deletePost]);

  
  return (
    <Containter>
      {postList.map((post, idx) => {
        return (
          <PostContainter key={idx}>
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostDeleteContainter>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <PostDeleteButton onClick={() => deletePost(post.id)}>
                    {" "}
                    &#128465;
                  </PostDeleteButton>
                )}
              </PostDeleteContainter>
            </PostHeader>
            <PostTextContainer>{post.postText}</PostTextContainer>
            <h3>@{post.author.name}</h3>
          </PostContainter>
        );
      })}
    </Containter>
  )
}

export default Home