import React, {Component} from 'react';
import CategoryCard from "./CategoryCard";
import "./categoryList.css";

const genre = [{
    id:1,
    name:"Drama",
    img:""
},{
    id:2,
    name:"Romance",
    img:""
},
{
    id:3,
    name:"Adventure",
    img:""
},
{
    id:4,
    name:"Poetry",
    img:""
}];
const category = [{
    id:1,
    name:"Fiction",
    img: ""
},
{
    id:2,
    name:"Non-Fiction",
    img: ""
}];
export default class CategoryList extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
       
        
        return (
            <div className="category-list">
                {console.log(this.props.name)}
              {this.props.name==="Genre" ? <CategoryCard  title="Drama" image="https://images-na.ssl-images-amazon.com/images/I/71hqWFOiFiL.jpg"></CategoryCard>:<CategoryCard title="Fition" image="https://images.gr-assets.com/books/1447303603l/2767052.jpg"></CategoryCard>}
              {this.props.name==="Genre" ? <CategoryCard title="Romance" image="https://images-na.ssl-images-amazon.com/images/I/415Vok2xosL.jpg"></CategoryCard>:<CategoryCard title="Non-Fition" image="https://www.abebooks.com/images/books/essential-non-fiction/caged-bird.jpg"></CategoryCard>}
              {this.props.name==="Genre" ? <CategoryCard title="Adventure" image="https://s2982.pcdn.co/wp-content/uploads/2018/03/Oceanic-by-Aimee-Nezhukumatathil.jpg"></CategoryCard>:null}
              {this.props.name==="Genre" ? <CategoryCard title="Poetry" image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png"></CategoryCard>:null}
              </div>

        );
    }
}