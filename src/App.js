import React, {useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import '../src/styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python 1', body: 'Description'},
        {id: 2, title: 'Python 2', body: 'Description'},
        {id: 3, title: 'Python 3', body: 'Description'},
    ])

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

  return (
    <div className="App">
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Название поста"
            />
            {/*Неуправляемый компонент*/}
            <MyInput
                ref={bodyInputRef}
                type="text"
                placeholder="Содержание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Список постов 1"/>
        <PostList posts={posts2} title="Список постов 2"/>
    </div>
  );
}

export default App;
