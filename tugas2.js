import { useEffect } from "react";

 function App(){ 
    function checkingClass12(data) {
      return data.class === 12;
    }

    function printOutput(data, totalValue, isClass12){
      document.write(
        "nama " +
        data.name +
        " kelas " +
        data.class +
        (isClass12 ? " mau lulus " : "") +
        " nilai akhir "+
        totalValue +
        "<br/>"
      )
    }

    useEffect(() => {
  const person = [
    { name: "Joni", class: 12, value: 100, reduceValue: 10 },
    { name: "Poni", class: 10, value: 100, reduceValue: 23 },
    { name: "Asep", class: 11, value: 100, reduceValue: 20 }
  ];

  for (const index in person){
   var total = person[index].value - person[index].reduceValue
    var isClass12 = checkingClass12(person[index]);
    if(isClass12){
     printOutput(person[index], total, isClass12);
    } else {
     printOutput(person[index], total);
    }
  }
 }, []);

 return () => {};
}

export default App;

