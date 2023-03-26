import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array, // khai báo props nhận vào 1 array
    onTodoClick: PropTypes.func // khai báo props nhận vào 1 func ! Xử lý handle khi item con đc click
};

TodoList.defaultProps = {
    todoList: [],            // gán giá trị mặc định cho props ( mảng rỗng )
    onTodoClick: null
}

// phải có key ở đây! Key ở đây là unique!!
function TodoList({ todoList, onTodoClick }) {

    const handleItemClick = (todoItem, indexItem) => {

        if (!onTodoClick) return;
        onTodoClick(todoItem, indexItem); // báo cho thằng cha xử lý!
    };


    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li key={todo.id}
                    className={classNames({
                        'todo-item': true, //  class này luôn có
                        completed: todo.status === 'completed' // nếu là true sẽ có thêm class 'completed'
                    })}

                    onClick={() => handleItemClick(todo, index)}
                >
                    {todo.id}-{todo.title}
                </li> // Nếu đơn giản thì làm <li> ở đây! Có thể sử dụng component TodoItem ở đây
            ))}
        </ul>
    );
}

export default TodoList;