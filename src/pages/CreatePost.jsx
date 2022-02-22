import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { db, auth } from '../firebase_config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';


const Containter = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  place-items: center;
`

const Wrapper = styled.div`
  width: 500px;
  height: auto;
  padding: 20px;
  background-color: black;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const InputGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

const TitleH1 = styled.h1`
  text-align: center;
`;

const InputGropLabel = styled.label`
  font-size: 25px;
`

const InputGroupInput = styled.input`
  height: 40px;
`

const BaseInputStyles = css`
  font-size: 18px;
  border: none;
  border-radius: 2px;
  padding: 5px;
  margin-top: 5px;
`

const Inputs = styled.input`
  ${BaseInputStyles}
  height: 40px;
`

const InputGroupTextArea = styled.textarea`
  ${BaseInputStyles}
  height: 150px;
`

const Button = styled.button`
  margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });
    navigate("/")
  }

  useEffect(() => {
    if(!isAuth) {
      navigate("/login")
    }
  }, [])

  return (
    <Containter>
      <Wrapper>
        <TitleH1>Create a Post</TitleH1>
        <InputGroup>
          <InputGropLabel> Title:</InputGropLabel>
          <InputGroupInput 
            placeholder='Title...'
            onChange={(e) => setTitle(e.target.value)}/>
        </InputGroup>
        <InputGroup>
          <InputGropLabel> Post:</InputGropLabel>
          <InputGroupTextArea 
            placeholder='Post...'
            onChange={(e) => setPostText(e.target.value)}/>
        </InputGroup>
        <Button onClick={createPost}>Submit Post</Button>
      </Wrapper>
    </Containter>
  )
}


export default CreatePost