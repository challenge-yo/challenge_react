import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

class Categories extends Component {
    constructor(){
        super()
        
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        this.getCategories()
    }
      getCategories(){
          axios.get('http://localhost:3000/api/categories').then(response => {
            this.setState({categories: response.data})
          })
      }
    render() {
        const categories = this.state.categories.map((category, i) => {
        return <Link to={`/challenges/${category.category}`}><CategoryCard key={i} category={category.category} icon={category.badge}/></Link>
        })         
        return(
            <div>
                {categories}
            </div>
        )
    }
}
export default Categories