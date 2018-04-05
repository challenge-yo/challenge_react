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
          axios.get('/api/categories').then(response => {
            this.setState({categories: response.data})
          })
      }
    render() {
        const categories = this.state.categories.map((category, i) => {
        return <Link style={{textDecoration: 'none', textSize: 32}}key={i} to={`/challenges/${category.category}`}><CategoryCard  name={category.category} icon={category.badge}/></Link>
        })         
        return(
            <div className='main-app-wrapper'>
                {categories}
            </div>
        )
    }
}
export default Categories