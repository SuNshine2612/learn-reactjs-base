import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {

    // khởi tạo data!
    const initData = [
        {
            id: 1,
            title: "Eat",
            status: "completed"
        },
        {
            id: 2,
            title: "Code",
            status: "new"
        },
        {
            id: 3,
            title: "Sleep",
            status: "new"
        }
    ];

    const [todoList, setTodoList] = useState(initData);

    // gọi component TodoList ở đây
    // và khi item ( thằng con đc click, phải báo lên cho thằng cha trên này) => phải viết 1 hàm handle để xử lý
    // Component TodoList à, ông render giùm tôi cái List này đi ! Và mỗi lần 1 item nào đó click, thì ông gọi giùm tôi cái hàm Handle này!
    const handleTodoClick = (todoItem, indexItem) => {
        console.log(todoItem, indexItem);

        //0. clont current array(object) to the new one!
        const newTodoList = [...todoList];
        //1. Toggle state
        const newItem = {
            ...newTodoList[indexItem],
            status: newTodoList[indexItem].status === 'new' ? 'completed' : 'new',
        };

        newTodoList[indexItem] = newItem;
        // => có thể gộp bước 1 này mà ko cần tách như trên
        //2. Update todo list
        setTodoList(newTodoList);
    };


    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;