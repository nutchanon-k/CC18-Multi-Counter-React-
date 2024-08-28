

function App (){
    const [counters, setCounters] = React.useState([
        {id : 1, number :0},
        
    ])

    const updateCounter=(id , num)=>{
        let idx = counters.findIndex(el => el.id === id)
        
        // update counter แบบ copy arr
        // const newCounter = [...counters]
        // if( newCounter[idx].number>0  && num!= 0 || num >0 ){
        //     newCounter[idx].number += num
        //     console.log(newCounter)
        //     setCounters(newCounter)
        
        // }  
        // else {
        //     newCounter[idx].number = 0
        //     console.log(newCounter)
        //     setCounters(newCounter)
        // }

        
        
        //แบบใช้ Arrow
        if( counters[idx].number>0  && num!= 0 || num >0 ){  
            setCounters(prev =>{
                [...prev][idx].number += num
                return [...prev]
            })
        }
        else {setCounters(prev =>{
                [...prev][idx].number = 0
                return [...prev]
            })
        }
      
    }

    // const deleteCounter = (id) =>{
    //     //แบบ filter   
    //     setCounters(prev => prev.filter(el => el.id !== id))  
       
    //     // แบบ splice 
    //     let idx = counters.findIndex(el => el.id === id)
    //     const newCounter = [...counters]
    //     newCounter.splice(idx,1)
    //     setCounters(newCounter)
        
    // }

    // const addCounter = () => {
    //     // const newCounter = [...counters]
    //     // let findID = counters[counters.length-1].id+1
    //     // console.log(findID)
    //     // newCounter.push({ id: findID, number: 0})
    //     // setCounters(newCounter)

    //     setCounters(prev => ([...prev, {id : prev[prev.length-1].id+1, number : 0}]))
    // }
    
    
    
    //แบบใช้ Function เดียวในการเพิ่ม ลบ Counter
    const adjustCounter = (num, id) => {
        num == 1 && counters.length !=0 ? setCounters(prev => ([...prev, {id : prev[prev.length-1].id+1, number : 0}]))  :
        num == 1 && counters.length == 0 ? setCounters([{id : 1, number : 0}]) :
        setCounters(prev => prev.filter(el => el.id !== id))    
    }


    // รวมค่า
    const sum = counters.reduce((prev, curr)=> prev + curr.number,0 )

    
    
    return(
        <div className = "app">
            <h1 className="show-sum">Sum = {sum} </h1>
            <button className="btn-add" onClick={()=> adjustCounter(1)}>Add Counter</button>
            <hr />
            {counters.map(el=>(<Counter key={el.id} item = {el.number} id ={el.id} updateCounter = {updateCounter} adjustCounter =  {adjustCounter} />))}
        
        </div>
    )
}



function Counter(props){
    const {item, id, updateCounter, adjustCounter} = props
    return(
        <div className ="counter">
            <button className ="btn btn-dec" onClick = {() => updateCounter(id , -1)}>-</button>
            <h3 className ="number">{item}</h3>
            <button className ="btn btn-inc" onClick = {() => updateCounter(id , 1)}>+</button>
            <button className ="btn btn-clr" onClick = {() => updateCounter(id , 0)}>C</button>
            <button className ="btn btn-dlt" onClick = {() => adjustCounter(0, id)}>X</button>
        </div>
    )

}



ReactDOM.createRoot(document.querySelector('#root')).render(<App />)