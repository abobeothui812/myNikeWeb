
import Proptypes from 'prop-types'
function List(props){
    const fruits =[
        {id: 1,name: "apple", calories: 95},
        {id: 2,name: "banana", calories: 45},
        {id: 3,name: "coconut", calories: 105},
        {id: 4,name: "jackfruit", calories: 159},
        {id: 5,name: "orange", calories: 37}
    ];
    //fruits.sort((a,b) => a.name.localeCompare(b.name));//ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name));REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories-b.calories);//numeric
    //fruits.sort((a,b) => b.calories-a.calories);//reverse numeric

    //const lowCalfruits =fruits.filter(fruit =>  fruit.calories < 100);
    const itemList=props.item; 
    const category = props.category;   
    const listitems = itemList.map( item => <li key={item.id}>{item.name}:&nbsp; <b>{item.calories}</b></li>)


    return(
    <><h3 className="category">{category}</h3>
    <ol className="listitem">{listitems}</ol>
    </>);

}
List.Proptypes ={
    category : Proptypes.string,
    items : Proptypes.arrayOf(Proptypes.shape({id: Proptypes.number,name: Proptypes.string, calories:Proptypes.number}))
}
List.defaultProps={
    category: "Category",
    item: [],
}
export default List
