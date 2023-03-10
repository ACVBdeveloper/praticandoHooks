import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App() {


  const [tarefas, setTarefas] = useState(['pagar a conta de luz ',
          'estudar react hooks']);

  const[input, setInput] = useState('');


  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  },[tarefas]);
  
  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  },[input,tarefas]);

  const totalTarefas = useMemo(()=> tarefas.length,[tarefas])

  return (
    <div>
      <h1>pq essa merda não ta</h1>
      <ul>
        {tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>))}
      </ul>
      <br/>
      <strong>Voce tem {totalTarefas} tarefas</strong>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
      <button type="button" onClick={handleAdd} >Adicionar</button>

    </div>
  );
}

export default App;
