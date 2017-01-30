export class Init{
    load(){
        if(localStorage.getItem('todos') == null
         || localStorage.getItem('todos') == undefined)
         {
             console.log('No todos found...Creating...');

             var todos = [
                 {
                     text: 'Pickup kids after school'
                 }
             ];

         localStorage.setItem('todos',JSON.stringify(todos));
         return;
         }
         else{
             console.log('Found Todos...');
         }

   
    }
}