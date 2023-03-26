import TodoFeature from 'features/Todo';
import './App.css';

function App() {
  // const userName = "SuNshine 2612";
  // const age = 32;
  // const isMale = true;
  // const student = {
  //   name: 'Đường Anh Minh',
  //   job: 'Developer'
  // };
  // const colorList = ['red', 'purple', 'blue']



  // return (
  //   <div className="app">
  //     <p>Learn ReactJS - {userName} <br /> Age is: {age} - 24/03/2023</p>
  //     <p>Gender {isMale ? <strong>Male</strong> : 'Female'}</p>
  //     <p>Sure! I'm {isMale && <strong>Male</strong>}</p>
  //     <p>My fullname: {student.name}, and my job is {student.job}</p>
  //     <div>
  //       <ul>
  //         {colorList.map(color => (
  //           <li style={{ color }}>{color}</li>
  //         ))}
  //       </ul>
  //     </div>

  //   </div>
  // );

  // Xuất TodoList <TodoFeature />
  return (
    <div className="app">
      <TodoFeature />
    </div>
  );
}

export default App;
