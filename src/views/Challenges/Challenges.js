import React, { Component } from 'react'
import axios from 'axios'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

class Challenges extends Component {
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
        return <CategoryCard key={i} category={category.category} icon={category.badge}/>
        })         
        return(
            <div>
                
                <GlobalHeader />
                {categories}
                <GlobalFooter />
            </div>
        )
    }
}



export default Challenges